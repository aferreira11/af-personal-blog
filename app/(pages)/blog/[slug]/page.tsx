import { getPageContent, getPageBySlug, notionClient } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import { TracingBeam } from "@/components/ui/tracing-beam";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

import { Post } from "@/components/blog";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(decodeURIComponent(params.slug));
  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  // Skip the first block if it's an H1 since we're using the title from properties
  const contentBlocks = content[0]?.type === 'heading_1' ? content.slice(1) : content;
  const html = await notionRenderer.render(...contentBlocks);

  return (
    <div className="min-h-screen relative">
      <TracingBeam className="px-6 md:px-8">
        <div className="pb-40">
          <Post
            title={post.title}
            content={html}
            created_time={post.created_time}
            categories={post.categories}
            meta_description={post.meta_description}
            bannerImage=""
            bannerImageWidth={1200}
            bannerImageHeight={630}
          />
        </div>
      </TracingBeam>
    </div>
  );
}