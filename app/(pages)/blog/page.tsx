import { FeaturedBlogCard } from "@/components/featured-blog-card"
import { BlogCard } from "@/components/blog-card"
import { getPosts } from "@/lib/notion"
import { formatDate } from "@/lib/utils"
import { constructMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = constructMetadata({
  title: "Blog | Amadeu Ferreira",
  description: "Thoughts on software development, startups, and technology. Written by Amadeu Ferreira.",
})

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const posts = await getPosts()
  
  // Get the first post as featured if it exists
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="container-padding py-8">
      <div className="flex flex-col gap-10">
        {/* Featured Post */}
        {featuredPost && (
          <FeaturedBlogCard 
            title={featuredPost.title}
            description={featuredPost.meta_description}
            date={formatDate(new Date(featuredPost.created_time))}
            tags={featuredPost.categories}
            href={`/blog/${featuredPost.slug}`}
            image={featuredPost.cover_image}
            featured={true}
          />
        )}
        
        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularPosts.map((post) => (
            <BlogCard 
              key={post.id}
              title={post.title}
              description={post.meta_description}
              date={formatDate(new Date(post.created_time))}
              tags={post.categories}
              href={`/blog/${post.slug}`}
              image={post.cover_image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

