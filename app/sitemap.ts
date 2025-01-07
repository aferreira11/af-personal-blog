import { MetadataRoute } from 'next'
import { getPosts, getProjects } from '@/lib/notion'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL from environment variable or default
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://amadeuferreira.com'

  // Fetch all posts and projects
  const posts = await getPosts()
  const projects = await getProjects()

  // Static routes with their update frequency and priority
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic routes for blog posts
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.created_time),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic routes for projects
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.created_time),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
} 