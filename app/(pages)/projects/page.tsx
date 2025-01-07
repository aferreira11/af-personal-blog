import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, Cardtitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getProjects } from "@/lib/notion"
import { BorderTrail } from "@/components/ui/border-trail"

export const metadata: Metadata = {
  title: "Projects - Amadeu Ferreira",
  description: "Check out my latest projects and work",
}

export const revalidate = 3600 // Revalidate every hour

export default async function ProjectsPage() {
  const projects = await getProjects()
  console.log("Projects list:", projects.map(p => ({ 
    id: p.id, 
    title: p.title, 
    slug: p.slug,
    slugEncoded: encodeURIComponent(p.slug),
    slugLength: p.slug.length,
    slugChars: Array.from(p.slug).map(c => c.charCodeAt(0))
  })))

  return (
    <div className="container-padding py-8">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-muted-foreground mb-8">
          Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
        </p>
        
        <div className="grid gap-6">
          {projects.map((project) => {
            const slug = encodeURIComponent(project.slug)
            const href = `/projects/${slug}`
            return (
              <div className="relative" key={project.id}>
                <Link 
                  href={href} 
                  className="block relative group"
                >
                  <Card className="transition-all duration-300 hover:scale-[1.02] bg-background border-muted relative">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <BorderTrail 
                        className="bg-gradient-to-r from-blue-500/50 to-blue-700/50 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                        size={120}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Cardtitle className="text-2xl">
                              {project.title}
                            </Cardtitle>
                            <Badge variant="outline">{project.status}</Badge>
                          </div>
                          <CardDescription className="line-clamp-2">
                            {project.meta_description}
                          </CardDescription>
                        </div>
                        <ArrowUpRight className="h-5 w-5 flex-none" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.categories.map((category, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 