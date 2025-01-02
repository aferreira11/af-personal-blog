import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from 'lucide-react';
import { Magnetic } from "@/components/ui/magnetic";

interface Post {
  id: string;
  title: string;
  created_time: string;
  slug: string;
  categories?: string[];
}

export function Sidebar() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch('/api/featured-posts');
        const data = await response.json();
        setFeaturedPosts(data);
      } catch (error) {
        console.error('Failed to fetch featured posts:', error);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return (
    <aside className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-visible pt-4 bg-background">
      <div className="space-y-12 pb-8 overflow-visible">
        {/* Author Info */}
        <div className="overflow-visible">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <Image 
                src="/amadeu.png"
                alt="Profile picture"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h2 className="font-semibold">Amadeu Ferreira</h2>
              <p className="text-sm text-muted-foreground">The Modern Polymath</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            I&apos;m a software engineer passionate about AI, photography, and building cool stuff. Join me as I explore the intersection of technology and creativity.
          </p>
          <Link href="/about" className="block overflow-visible">
            <Magnetic intensity={0.8} range={150}>
              <Button className="w-full" variant="outline">
                More About Me
              </Button>
            </Magnetic>
          </Link>
        </div>

        {/* Topics */}
        <div>
          <h2 className="font-semibold mb-4">Topics I Write About:</h2>
          <div className="flex flex-wrap gap-2">
            {["AI", "Photography", "Web Dev", "Tech", "Travel", "Keyboards"].map((topic) => (
              <Badge key={topic} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div>
          <h2 className="font-semibold mb-8">Featured Posts</h2>
          <div className="flex flex-col gap-4">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group transition-all duration-300 hover:translate-x-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-medium leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.created_time).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 flex-none opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

