// Ensures this code only runs on the server side
import "server-only";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// React's cache helps prevent redundant API calls
import { cache } from "react";

// Initialize Notion client with API token
export const notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
});


// Define the two types of content we can fetch from Notion
export type ContentType = "Project" | "Post" | "Page";


// Interface matching Notion's API response structure
// Each property matches Notion's database column types
type NotionProperties = {
  title: { title: Array<{ plain_text: string }> };
  status: { select: { name: string } };
  type: { select: { name: ContentType } };
  categories: { multi_select: Array<{ name: string }> };
  meta_description: { rich_text: Array<{ plain_text: string }> };
  slug: { formula: { string: string } };
  cover_image: { files: Array<{ file: { url: string } }> };
  live: { checkbox: boolean };
  img_URL: { url: string };
  img_width: { number: number };
  img_height: { number: number };
  featured: { checkbox: boolean };
};

// Add this type to make it clear which fields come from the page object itself
type NotionPageMetadata = {
  id: string;
  created_time: string;
  // Other page-level fields would go here
};

// Update the interface to show the source of each field
export interface NotionPage extends NotionPageMetadata {
  // Fields from properties
  title: string;
  status: string;
  type: ContentType;
  categories: string[];
  meta_description: string;
  slug: string;
  cover_image?: string;
  featured?: boolean;
  img_URL?: string;
  img_width?: number;
  img_height?: number;
}

// Fetches all content blocks for a specific Notion page
export const getPageContent = cache(async (pageId: string) => {
  const res = await notionClient.blocks.children.list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
});

// Transforms complex Notion API response into our cleaner NotionPage format
// Uses optional chaining (?.) and nullish coalescing (??) for safety
const transformPageResults = (page: PageObjectResponse): NotionPage => {
  const props = page.properties as unknown as Partial<NotionProperties>;
  
  return {
    id: page.id,
    title: props.title?.title?.[0]?.plain_text ?? "",
    status: props.status?.select?.name ?? "",
    type: props.type?.select?.name ?? "Post",
    categories: props.categories?.multi_select?.map(cat => cat.name) ?? [],
    meta_description: props.meta_description?.rich_text?.[0]?.plain_text ?? "",
    created_time: page.created_time,
    slug: props.slug?.formula?.string ?? "",
    cover_image: props.cover_image?.files?.[0]?.file?.url,
    img_URL: props.img_URL?.url ?? "",
    img_width: props.img_width?.number ?? 0,    
    img_height: props.img_height?.number ?? 0,
    featured: props.featured?.checkbox ?? false,
  };
};

// Generic function to fetch items by type (Post or Project)
// Includes filtering for live status and sorting by creation date
const getItemsByType = cache(async (type: ContentType): Promise<NotionPage[]> => {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "type",
          select: {
            equals: type,
          },
        },
        {
          property: "live",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "created_time",
        direction: "descending",
      },
    ],
  });

  // Filter for valid pages and transform results
  return response.results
    .filter((page): page is PageObjectResponse => 'properties' in page)
    .map(transformPageResults);
});

// Convenience function to fetch all projects
export const getProjects = cache(async (): Promise<NotionPage[]> => {
  return getItemsByType("Project");
});

// Convenience function to fetch all posts
export const getPosts = cache(async (): Promise<NotionPage[]> => {
  return getItemsByType("Post");
});

// Fetches a specific project by its slug
export const getProject = cache(async (slug: string): Promise<NotionPage | undefined> => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "slug",
          formula: {
            string: {
              equals: slug,
            },
          },
        },
        {
          property: "type",
          select: {
            equals: "Project",
          },
        },
      ],
    },
  });

  const page = res.results[0] as PageObjectResponse | undefined;
  return page ? transformPageResults(page) : undefined;
});

// Fetches a specific post by its slug
// Includes special handling for cover images
export const getPageBySlug = cache(async (slug: string): Promise<NotionPage | undefined> => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "slug",
          formula: {
            string: {
              equals: slug,
            },
          },
        },
        {
          property: "type",
          select: {
            equals: "Post",
          },
        },
      ],
    },
  });

  const page = res.results[0] as PageObjectResponse | undefined;
  if (!page) return undefined;
  
  const post = transformPageResults(page);
  
  // Handle different types of cover images (external or internal)
  const coverImageFile = page.properties.cover_image?.type === 'files' 
    ? page.properties.cover_image.files[0]
    : undefined;

  let coverImageUrl: string | undefined;
  if (coverImageFile) {
    if ('external' in coverImageFile) {
      coverImageUrl = coverImageFile.external.url;
    } else if ('file' in coverImageFile) {
      coverImageUrl = coverImageFile.file.url;
    }
  }

  post.cover_image = coverImageUrl ? getOptimizedImageUrl(coverImageUrl) : undefined;

  return post;
});

// Adds optimization parameters to image URLs if they're not already optimized
export function getOptimizedImageUrl(url: string) {
  if (url.includes('_next/image')) return url;
  
  return `${url}?quality=75&width=1200`;
}

// Add this new function to fetch featured posts
export const getFeaturedPosts = cache(async (): Promise<NotionPage[]> => {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
            property: "type",
            select: {
              equals: "Post",
            },
          },
        {
          property: "live",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "featured",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "created_time",
        direction: "descending",
      },
    ],
  });

  return response.results
    .filter((page): page is PageObjectResponse => 'properties' in page)
    .map(transformPageResults);
});

// Add this new function to fetch static pages
export const getStaticPage = cache(async (slug: string): Promise<NotionPage | undefined> => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "slug",
          formula: {
            string: {
              equals: slug,
            },
          },
        },
        {
          property: "type",
          select: {
            equals: "Page",
          },
        },
      ],
    },
  });

  const page = res.results[0] as PageObjectResponse | undefined;
  return page ? transformPageResults(page) : undefined;
});

