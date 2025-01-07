import Link from "next/link"
import { TextEffect } from "@/components/ui/text-effect"
import { BackgroundLines } from "@/components/ui/background-lines"
import { TextLoop } from "@/components/ui/text-loop"
import Image from "next/image"
import { FeaturedPosts } from "@/components/featured-posts"
import { ArrowUpRight } from "lucide-react"
import CardTopics from "@/components/card-topics"
import { CustomButton } from "@/components/ui/custom-button"
import { Spotlight } from '@/components/ui/spotlight'
import { InView } from "@/components/ui/in-view"

// Constants
const HOVER_TECHNOLOGY_GIF_URL = "https://media.giphy.com/media/wViS9n0RqN2/giphy.gif";
const HOVER_BUSINESS_GIF_URL = "https://media.giphy.com/media/McgfJZSsoWqFsd3XS2/giphy.gif";
const HOVER_SOCIETY_GIF_URL = "https://media.giphy.com/media/1USKMDPjuH4ovL7J5h/giphy.gif";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[80vh]">
        <div className="absolute inset-0 flex items-center justify-center">
          <BackgroundLines className="w-full h-full pointer-events-none">
            <></>
          </BackgroundLines>
        </div>
        
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-[#004CFF]">
                <TextLoop interval={3}>
                  <span>Amadeu 👋</span>
                  <span>a Startup Founder.</span>
                  <span>a Product Manager.</span>
                  <span>a Designer.</span>
                  <span>a Developer.</span>
                  <span>a Polymath.</span>
                </TextLoop>
              </span>
            </h1>
            <TextEffect 
              per="char" 
              className="text-lg sm:text-xl md:text-2xl text-black/80 dark:text-white/80 max-w-3xl mx-auto leading-relaxed"
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
              Exploring how technology, business, and law intersect to shape our future.
            </TextEffect>
            <nav className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <CustomButton 
                variant="primary"
                asChild
              >
                <Link href="/blog">Read My Blog</Link>
              </CustomButton>
              <CustomButton 
                variant="secondary"
                asChild
              >
                <Link href="/about">More About Me</Link>
              </CustomButton>
            </nav>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="relative w-full overflow-hidden bg-background">
        {/* Banner image section */}
        <div className="container-padding py-8">
          <div className="relative w-full mx-auto max-w-[2000px] overflow-hidden">
            {/* Main image */}
            <div className="relative w-full aspect-video">
              <Image
                src="/fintech_cadence.png"
                alt="Amadeu Ferreira speaking at an event"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2000px"
                className="object-cover rounded-md md:rounded-3xl"
                priority
              />
            </div>

            {/* Overlay with spotlight effect */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src="/fintech_cadence.png"
                  alt="Amadeu Ferreira speaking at an event"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 2000px"
                  className="object-cover mix-blend-normal rounded-md md:rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                <Spotlight
                  className="!opacity-90 mix-blend-soft-light hidden lg:block"
                  size={600}
                />

                {/* Card positioned relative to image - hidden on mobile/tablet */}
                <div className="absolute bottom-12 right-12 max-w-2xl hidden lg:block">
                  <InView
                    variants={{
                      hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                      visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    amount={1}
                    once={true}
                  >
                    <div className="relative backdrop-blur-xl bg-black/60 dark:bg-black/70 rounded-3xl p-10 shadow-2xl border border-white/10">
                      <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                          Why This Blog?
                        </h2>
                        <div className="space-y-4">
                          <p className="text-xl leading-relaxed text-white/80">
                            As a startup founder and product manager, I&apos;ve been building AI-powered products for the last 5 years, and in this blog I want to share my learnings with you.
                          </p>
                        </div>
                        <div className="flex flex-row gap-6 pt-2">
                          <Link 
                            href="/about"
                            className="group inline-flex items-center text-white/70 transition-all"
                          >
                            <span className="relative text-base font-medium group-hover:text-white">
                              More About Me
                              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                            </span>
                            <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                          </Link>
                          <Link 
                            href="/projects"
                            className="group inline-flex items-center text-white/70 transition-all"
                          >
                            <span className="relative text-base font-medium group-hover:text-white">
                              View My Projects
                              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                            </span>
                            <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </InView>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet version of Why This Blog - shown below image */}
        <div className="lg:hidden px-4 sm:px-6 md:px-8 py-16">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            once={true}
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Why This Blog?
              </h2>
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-muted-foreground">
                  As a startup founder and product manager, I&apos;ve been building AI-powered products for the last 5 years, and in this blog I want to share my learnings with you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/about"
                  className="group inline-flex items-center text-foreground/70 transition-all"
                >
                  <span className="relative text-base font-medium group-hover:text-foreground">
                    More About Me
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-foreground transition-all group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                </Link>
                <Link 
                  href="/projects"
                  className="group inline-flex items-center text-foreground/70 transition-all"
                >
                  <span className="relative text-base font-medium group-hover:text-foreground">
                    View My Projects
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-foreground transition-all group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                </Link>
              </div>
            </div>
          </InView>
        </div>
      </div>

      {/* What You'll Find Here Section */}
      <div className="relative container-padding py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 text-left lg:text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              What You&apos;ll Find Here
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              This blog is where I explore the intersection of technology, business, and law, focusing on building a better future through impactful solutions.
            </p>
          </div>

          {/* Mobile View - Scrollable Cards */}
          <div className="relative block lg:hidden">
            <div className="overflow-x-auto flex gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4">
              <div className="snap-center shrink-0 pl-4">
                <CardTopics
                  title="Technology"
                  description="Exploring groundbreaking ideas and their impact on our future."
                  image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3"
                  hoverGif={HOVER_TECHNOLOGY_GIF_URL}
                  gifPosition="center"
                  gifSize="300%"
                  className="w-[300px] sm:w-[350px] h-[400px]"
                />
              </div>
              <div className="snap-center shrink-0">
                <CardTopics
                  title="Business"
                  description="Building meaningful products and ventures that make a difference."
                  image="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3"
                  hoverGif={HOVER_BUSINESS_GIF_URL}
                  gifPosition="center"
                  gifSize="200%"
                  className="w-[300px] sm:w-[350px] h-[400px]"
                />
              </div>
              <div className="snap-center shrink-0 pr-4">
                <CardTopics
                  title="Society"
                  description="Understanding how technology shapes and transforms the world around us."
                  image="https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                  hoverGif={HOVER_SOCIETY_GIF_URL}
                  gifPosition="center"
                  gifSize="200%"
                  className="w-[300px] sm:w-[350px] h-[400px]"
                />
              </div>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            <div className="group"> {/* Technology */}
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${HOVER_TECHNOLOGY_GIF_URL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Technology
                </h3>
                <p className="text-base text-muted-foreground">
                  Exploring groundbreaking ideas and their impact on our future.
                </p>
              </div>
            </div>

            <div className="group"> {/* Business */}
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${HOVER_BUSINESS_GIF_URL})`,
                    backgroundSize: '150%',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Business
                </h3>
                <p className="text-base text-muted-foreground">
                  Building meaningful products and ventures that make a difference.
                </p>
              </div>
            </div>

            <div className="group"> {/* Law */}
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3)`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                  }}
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${HOVER_SOCIETY_GIF_URL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Law
                </h3>
                <p className="text-base text-muted-foreground">
                  Understanding how we create the guardrails to avoid the worst of AI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="container-padding">
        <FeaturedPosts />
      </div>
    </main>
  )
}
