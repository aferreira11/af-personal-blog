'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Mail } from "lucide-react"
import { ContactDialog } from "@/components/contact-dialog"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full border-b border-black/10 dark:border-white/[0.15] bg-background/80 backdrop-blur-sm z-40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          A<span className="text-[#004CFF]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-1">
            <Link
              href="/about"
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors group",
                pathname === "/about"
                  ? "text-black dark:text-white"
                  : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
              )}
            >
              <span className="relative">
                About
                {pathname !== "/about" && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-foreground dark:bg-white transition-all duration-300 w-0 group-hover:w-full" />
                )}
              </span>
            </Link>
            <Link
              href="/blog"
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors group",
                pathname === "/blog" || pathname.startsWith("/blog/")
                  ? "text-black dark:text-white"
                  : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
              )}
            >
              <span className="relative">
                Blog
                {!(pathname === "/blog" || pathname.startsWith("/blog/")) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-foreground dark:bg-white transition-all duration-300 w-0 group-hover:w-full" />
                )}
              </span>
            </Link>
            <Link
              href="/projects"
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors group",
                pathname === "/projects" || pathname.startsWith("/projects/")
                  ? "text-black dark:text-white"
                  : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
              )}
            >
              <span className="relative">
                Projects
                {!(pathname === "/projects" || pathname.startsWith("/projects/")) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-foreground dark:bg-white transition-all duration-300 w-0 group-hover:w-full" />
                )}
              </span>
            </Link>
          </div>

          <div className="flex items-center border-l border-black/10 dark:border-white/[0.15] pl-4 ml-4 gap-2">
            <ContactDialog open={isOpen} onOpenChange={setIsOpen}>
              <button
                className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </button>
            </ContactDialog>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

