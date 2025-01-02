'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Mail } from "lucide-react"
import { ContactDialog } from "@/components/contact-dialog"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full border-b border-black/10 dark:border-white/[0.15] bg-background z-40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold">
          A<span className="text-[#004CFF]">.</span>
        </Link>

        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <Link
              href="/about"
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === "/about"
                  ? "text-black dark:text-white"
                  : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
              )}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === "/blog" || pathname.startsWith("/blog/")
                  ? "text-black dark:text-white"
                  : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
              )}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === "/projects" || pathname.startsWith("/projects/")
                  ? "text-black dark:text-white"
                  : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
              )}
            >
              Projects
            </Link>
          </div>

          <div className="flex items-center border-l border-black/10 dark:border-white/[0.15] pl-6 ml-6">
            <ContactDialog open={isOpen} onOpenChange={setIsOpen}>
              <button
                className="inline-flex items-center justify-center rounded-md w-9 h-9 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </button>
            </ContactDialog>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

