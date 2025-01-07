import { getPageContent, getProject, notionClient } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { TracingBeam } from "@/components/ui/tracing-beam";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

import { Project } from "@/components/projects/project";

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(decodeURIComponent(params.slug));
  if (!project) return constructMetadata({ title: 'Project Not Found', noIndex: true });

  const ogImage = project.cover_image || project.img_URL;
  
  return constructMetadata({
    title: `${project.title} | Projects - Amadeu Ferreira`,
    description: project.meta_description,
    image: ogImage,
  })
}

export default async function Page({ params }: Props) {
  const project = await getProject(decodeURIComponent(params.slug));
  if (!project) notFound();

  const content = await getPageContent(project.id);

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
          <Project
            title={project.title}
            content={html}
            created_time={project.created_time}
            categories={project.categories}
            bannerImage=""
            bannerImageWidth={1200}
            bannerImageHeight={630}
            meta_description={project.meta_description}
          />
        </div>
      </TracingBeam>
    </div>
  );
}