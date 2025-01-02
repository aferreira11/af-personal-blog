import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

interface BlogPostProps {
  date: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
    followers: string
  }
  image: string
}

export function BlogPost({ date, title, excerpt, author, image }: BlogPostProps) {
  return (
    <article className="grid md:grid-cols-2 gap-8 py-8">
      <div className="space-y-4">
        <time className="text-sm text-muted-foreground">{date}</time>
        <h2 className="text-3xl font-bold leading-tight tracking-tight">
          <Link href="#" className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-muted-foreground">{excerpt}</p>
        <Link
          href="#"
          className="inline-flex items-center text-sm font-medium hover:underline"
        >
          Read Article
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </article>
  )
}

