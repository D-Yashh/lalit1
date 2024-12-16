"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { Logo } from "@/components/ui/logo"
import { theme } from "@/lib/theme"
import { smoothScroll } from '@/lib/smooth-scroll'

const links = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "testimonials", label: "Testimonials" },
  { href: "contact", label: "Contact" },
]

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold" onClick={(e) => handleClick(e, "hero")} aria-label="Lalit Khade - Back to top">
          <Logo className="h-8 w-8 text-primary" aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">Lalit Khade</span>
        </a>
        <div className="hidden md:flex gap-6" role="menubar">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={(e) => handleClick(e, href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                theme.animation.default
              )}
              role="menuitem"
            >
              {label}
            </a>
          ))}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu" aria-expanded={isOpen}>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={`#${href}`}
                  onClick={(e) => handleClick(e, href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    theme.animation.default
                  )}
                  role="menuitem"
                >
                  {label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

