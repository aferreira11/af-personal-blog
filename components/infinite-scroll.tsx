"use client"

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { BlogPost } from './blog-post'

interface Post {
  id: string
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

export function InfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()

  const loadMorePosts = async () => {
    // In a real application, you would fetch posts from an API
    // This is a mock implementation
    const newPosts: Post[] = [
      {
        id: `post-${page}-1`,
        date: new Date().toLocaleDateString(),
        title: `New Post ${page}-1`,
        excerpt: "This is a new post loaded via infinite scroll...",
        author: {
          name: "Alex Chen",
          avatar: "https://i.pravatar.cc/150?img=1",
          followers: "2.8K"
        },
        image: `https://picsum.photos/seed/${page}-1/800/600`
      },
      {
        id: `post-${page}-2`,
        date: new Date().toLocaleDateString(),
        title: `New Post ${page}-2`,
        excerpt: "This is another new post loaded via infinite scroll...",
        author: {
          name: "Alex Chen",
          avatar: "https://i.pravatar.cc/150?img=1",
          followers: "2.8K"
        },
        image: `https://picsum.photos/seed/${page}-2/800/600`
      }
    ]
    setPosts(prevPosts => [...prevPosts, ...newPosts])
    setPage(prevPage => prevPage + 1)
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts()
    }
  }, [inView])

  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} {...post} />
      ))}
      <div ref={ref} className="h-10 flex items-center justify-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    </div>
  )
}

