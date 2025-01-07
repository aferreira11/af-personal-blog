import Link from "next/link"
import Image from "next/image"
import { getFeaturedPosts } from "@/lib/notion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

export async function FeaturedPosts() {
  const posts = await getFeaturedPosts()

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">
              Featured Articles
            </h2>
            <p className="text-lg text-black/80 dark:text-white/80">
              My latest articles on product, technology, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
              >
                <article className="group relative space-y-4 transition-all duration-300 hover:-translate-y-1">
                  {post.cover_image && (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-muted animate-pulse" />
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex items-center gap-2 text-white">
                          <span className="text-sm font-medium">Read article</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <time 
                      dateTime={post.created_time}
                      className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      {formatDate(new Date(post.created_time))}
                    </time>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-base font-light leading-relaxed line-clamp-2">
                      {post.meta_description}
                    </p>
                    <div className="flex gap-2">
                      {post.categories.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-light text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              className="w-44 h-12 text-base font-medium bg-white/10 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:bg-white/20 dark:hover:bg-zinc-900/70 backdrop-blur-sm text-black dark:text-white rounded-md transition-colors"
              asChild
            >
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 