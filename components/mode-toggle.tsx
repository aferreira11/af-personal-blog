"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModeToggleProps {
  className?: string
}

export function ModeToggle({ className }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div className={cn("focus:outline-none focus-visible:outline-none", className)}>
      <Button
        variant="ghost"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus:ring-0 focus:ring-offset-0"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}

