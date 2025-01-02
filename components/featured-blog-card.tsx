'use client'

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from 'lucide-react'
import { useState } from "react"

interface FeaturedBlogCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  image?: string
  href: string
  className?: string
  featured?: boolean
  fullWidth?: boolean
}

export function FeaturedBlogCard({
  title,
  description,
  date,
  tags,
  image,
  href,
  className,
  featured,
  fullWidth,
}: FeaturedBlogCardProps) {
  const [imageIsLoading, setImageIsLoading] = useState(true)
  const imageUrl = image || (featured 
    ? 'https://images.unsplash.com/photo-1731636117974-5eab41e59504?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1734275689167-5f458aacde63?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  )

  return (
    <Link href={href}>
      <article 
        className={cn(
          "group relative space-y-4 transition-all duration-300 hover:-translate-y-1",
          fullWidth ? "grid grid-cols-2 gap-6 space-y-0" : "",
          className
        )}
      >
        <div 
          className={cn(
            "relative overflow-hidden rounded-lg",
            fullWidth ? "aspect-[4/3]" : featured ? "aspect-[21/9]" : "aspect-[16/9]"
          )}
        >
          <div className={cn(
            "absolute inset-0 bg-muted animate-pulse",
            !imageIsLoading && "hidden"
          )} />
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-105",
              imageIsLoading && "opacity-0"
            )}
            priority={featured}
            onLoadingComplete={() => setImageIsLoading(false)}
            sizes={
              fullWidth 
                ? "(max-width: 768px) 100vw, 50vw"
                : featured 
                  ? "100vw"
                  : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium">Read article</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <time 
            dateTime={date}
            className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
          >
            {date}
          </time>
          <h2 className={cn(
            "font-semibold tracking-tight leading-tight",
            featured || fullWidth ? "text-3xl" : "text-2xl"
          )}>
            {title}
          </h2>
          <p className="text-muted-foreground text-base font-light leading-relaxed line-clamp-2">{description}</p>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-light text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}

