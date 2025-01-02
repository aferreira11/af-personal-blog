import Image from "next/image";
import { Breadcrumb } from "../breadcrumb";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
  created_time: string;
  categories: string[];
  meta_description: string;
}

export function Project(props: ProjectProps) {
  const { 
    title, 
    content, 
    bannerImage, 
    bannerImageWidth, 
    bannerImageHeight,
    created_time,
    categories,
    meta_description 
  } = props;

  return (
    <article className="mx-auto max-w-3xl py-8">
      <Breadcrumb
        items={[
          { label: 'Projects', href: '/projects' },
          { label: title }
        ]}
      />
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {categories.map(category => (
              <Badge key={category} variant="secondary" className="font-light text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <time 
            dateTime={created_time}
            className="text-xs text-muted-foreground"
          >
            {new Date(created_time).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        {meta_description && (
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {meta_description}
          </p>
        )}
      </header>
      {bannerImage && (
        <div className="mb-8">
          <Image
            src={bannerImage}
            alt={title}
            width={bannerImageWidth}
            height={bannerImageHeight}
            className="rounded-lg"
          />
        </div>
      )}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </article>
  );
} 