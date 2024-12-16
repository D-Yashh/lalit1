import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Testimonials } from '@/components/testimonials'
import { InteractiveTools } from '@/components/interactive-tools'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <InteractiveTools />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

