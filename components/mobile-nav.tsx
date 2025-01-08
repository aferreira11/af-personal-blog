import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { ModeToggle } from '@/components/mode-toggle'
import { ContactDialog } from '@/components/contact-dialog'
import { RiLinkedinBoxFill, RiGithubFill, RiBlueskyFill } from "react-icons/ri"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  const menuItems = [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <>
      <button
        className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
          strokeWidth="1.75"
        >
          <line x1="3" y1="7" x2="17" y2="7" />
          <line x1="8" y1="13" x2="17" y2="13" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[49] bg-black/50 backdrop-blur-sm"
                onClick={closeMenu}
              />,
              document.body
            )}
            {createPortal(
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed right-0 top-0 z-[51] h-full w-full max-w-[350px] border-l border-border bg-background/80 backdrop-blur-sm shadow-lg"
              >
                <BackgroundBeamsWithCollision className="!absolute inset-0 !h-full">
                  <div className="h-full w-full" />
                </BackgroundBeamsWithCollision>
                <div className="relative z-[52] flex flex-col h-full">
                  <div className="border-b border-border">
                    <div className="flex justify-between">
                      <div className="flex items-center h-[52px] pl-6">
                        <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                          <button
                            className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent"
                            aria-label="Contact"
                          >
                            <Mail className="h-5 w-5" />
                          </button>
                        </ContactDialog>
                      </div>
                      <div className="flex items-center justify-center w-[52px] border-l border-border">
                        <motion.button
                          className="inline-flex h-[52px] w-[52px] items-center justify-center"
                          onClick={closeMenu}
                          aria-label="Close menu"
                        >
                          <X className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <nav className="flex flex-col space-y-8 flex-1 mt-32">
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-3xl font-semibold transition-colors text-center",
                            pathname === item.href
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="flex justify-center space-x-4 mt-12 mb-8">
                      <Link 
                        href="https://github.com/aferreira11" 
                        className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent"
                        aria-label="GitHub Profile"
                        onClick={closeMenu}
                      >
                        <RiGithubFill className="h-5 w-5" />
                      </Link>
                      <Link 
                        href="https://bsky.app/profile/amadeuferreira.bsky.social" 
                        className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent"
                        aria-label="BlueSky Profile"
                        onClick={closeMenu}
                      >
                        <RiBlueskyFill className="h-5 w-5" />
                      </Link>
                      <Link 
                        href="https://www.linkedin.com/in/amadeuferreira/" 
                        className="inline-flex items-center justify-center rounded-md w-10 h-10 bg-transparent text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors hover:bg-accent"
                        aria-label="LinkedIn Profile"
                        onClick={closeMenu}
                      >
                        <RiLinkedinBoxFill className="h-5 w-5" />
                      </Link>
                    </div>
                    <div className="flex justify-center mb-6">
                      <div className="rounded-full border border-border bg-background/80 backdrop-blur-sm p-2 hover:bg-accent transition-colors group focus:outline-none focus-visible:outline-none focus-visible:ring-0">
                        <ModeToggle className="[&>button]:hover:bg-transparent [&>button]:focus:outline-none [&>button]:focus-visible:outline-none [&>button]:focus-visible:ring-0 [&>button]:focus:ring-0 [&>button]:focus:ring-offset-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>,
              document.body
            )}
          </>
        )}
      </AnimatePresence>
    </>
  )
}