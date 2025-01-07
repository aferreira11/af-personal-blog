import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/[0.15]">
      <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-between py-4 sm:py-0 space-y-4 sm:space-y-0">
        <p className="text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
            Amadeu Ferreira
          </Link>
        </p>
        <div className="flex items-center space-x-4">
          
          <Link href="https://www.linkedin.com/in/amadeuferreira/" className="text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors">
            LinkedIn
          </Link>
          
          
        </div>
      </div>
    </footer>
  )
}

