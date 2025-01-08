import Link from "next/link"
import { RiLinkedinBoxFill, RiGithubFill, RiBlueskyFill } from "react-icons/ri"

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/[0.15]">
      <div className="container-padding flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-between py-4 sm:py-0 gap-6 sm:gap-0">
        <p className="text-sm text-black/60 dark:text-white/60 order-2 sm:order-1">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
            Amadeu Ferreira
          </Link>
        </p>
        <div className="flex items-center space-x-4 order-1 sm:order-2">
          <Link 
            href="https://github.com/aferreira11" 
            className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <RiGithubFill className="w-5 h-5" />
          </Link>
          <Link 
            href="https://bsky.app/profile/amadeuferreira.bsky.social" 
            className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
            aria-label="BlueSky Profile"
          >
            <RiBlueskyFill className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/amadeuferreira/" 
            className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <RiLinkedinBoxFill className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

