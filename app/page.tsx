import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TextEffect } from "@/components/ui/text-effect"
import { BackgroundLines } from "@/components/ui/background-lines"
import { TextLoop } from "@/components/ui/text-loop"
import Image from "next/image"
import { FeaturedPosts } from "@/components/featured-posts"
import { ArrowUpRight } from "lucide-react"
import CardTopics from "@/components/cards-demo-2"

export default function Home() {
  return (
    <main className="relative">
      <BackgroundLines className="absolute inset-0 pointer-events-none">
        <></>
      </BackgroundLines>
      
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
            Hi, I&apos;m{" "}
            <span className="text-[#004CFF]">
              <TextLoop interval={3}>
                <span>Amadeu 👋</span>
                <span>a Product Manager.</span>
                <span>a Developer.</span>
                <span>a Designer.</span>
              </TextLoop>
            </span>
          </h1>
          <TextEffect 
            per="char" 
            className="text-2xl md:text-3xl text-black/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={{
              item: {
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.01 }
                }
              }
            }}
          >
            Exploring how innovation, business, and society intersect to shape our future.
          </TextEffect>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              className="w-44 h-12 text-base font-medium bg-[#004CFF] hover:bg-[#0039CC] text-white rounded-md transition-colors"
              asChild
            >
              <Link href="/blog">Read My Blog</Link>
            </Button>
            <Button 
              variant="outline" 
              className="w-44 h-12 text-base font-medium bg-white/10 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:bg-white/20 dark:hover:bg-zinc-900/70 backdrop-blur-sm text-black dark:text-white rounded-md transition-colors"
              asChild
            >
              <Link href="/about">More About Me</Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="relative px-6 md:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  Why Listen to Me?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    As a startup founder and product manager, I&apos;ve been at the forefront of innovation, building solutions that bridge technology and human needs. My journey as an immigrant has given me a unique perspective on adaptability and problem-solving in diverse contexts.
                  </p>
                  <p>
                    With a polymath approach to learning and creation, I combine insights from technology, business, and social sciences to develop comprehensive views on modern challenges. This interdisciplinary background allows me to spot patterns and opportunities others might miss.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about"
                  className="group inline-flex items-center text-foreground hover:text-[#004CFF] transition-colors"
                >
                  <span className="text-lg font-medium">More About Me</span>
                  <ArrowUpRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link 
                  href="/projects"
                  className="group inline-flex items-center text-foreground hover:text-[#004CFF] transition-colors"
                >
                  <span className="text-lg font-medium">View My Projects</span>
                  <ArrowUpRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/amadeu.png"
                alt="Amadeu Ferreira"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Find Here Section */}
      <div className="relative px-6 md:px-8 py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What You&apos;ll Find Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This blog is where I explore the intersection of technology, business, and society, focusing on building a better future through impactful solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <CardTopics
              title="Technology"
              description="Exploring groundbreaking ideas and their impact on our future."
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3"
              hoverGif="https://media.giphy.com/media/wViS9n0RqN2/giphy.gif"
              gifPosition="center"
              gifSize="300%"
              className="md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800"
            />
            <CardTopics
              title="Business"
              description="Building meaningful products and ventures that make a difference."
              image="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3"
              hoverGif="https://media.giphy.com/media/McgfJZSsoWqFsd3XS2/giphy.gif"
              gifPosition="center"
              gifSize="cover"
              className="md:border-r border-b md:border-b-0 border-zinc-200 dark:border-zinc-800"
            />
            <CardTopics
              title="Society"
              description="Understanding how technology shapes and transforms the world around us."
              image="https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
              hoverGif="https://media.giphy.com/media/1ZVBVvY5kS7qUHhqI2/giphy.gif"
              gifPosition="center"
              gifSize="200%"
            />
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <FeaturedPosts />
    </main>
  )
}
