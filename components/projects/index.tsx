import Image from "next/image";

interface ProjectProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
}

export function Project(props: ProjectProps) {
  const { title, content, bannerImage, bannerImageWidth, bannerImageHeight } =
    props;

  return (
    <article className="mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-4xl font-bold">{title}</h1>
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