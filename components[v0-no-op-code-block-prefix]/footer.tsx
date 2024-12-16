import { Logo } from '@/components/ui/logo'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-4">
          <Logo className="h-6 w-6" />
          <p className="text-sm leading-loose text-muted-foreground">
            © 2024 Lalit Khade. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4">
          <a
            href="https://github.com/lalitkhade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lalitkumar-khade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:lkhade@asu.edu"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}

