'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Linkedin } from 'lucide-react'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote: "Lalit's deep understanding of financial markets and data analytics significantly improved our investment strategy, resulting in substantial portfolio growth.",
    author: "Sarah Chen",
    title: "Chief Investment Officer, Global Ventures Ltd",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
    linkedin: "https://www.linkedin.com/in/sarahchen"
  },
  {
    quote: "His ability to combine technical analysis with fundamental research provided invaluable insights for our fund management team, leading to more informed investment decisions.",
    author: "Michael Rodriguez",
    title: "Senior Portfolio Manager, Capital Investments",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
    linkedin: "https://www.linkedin.com/in/michaelrodriguez"
  },
  {
    quote: "The financial models developed by Lalit have become an integral part of our decision-making process. His work is thorough, innovative, and has directly contributed to our improved risk-adjusted returns.",
    author: "Dr. Emily Watson",
    title: "Head of Quantitative Strategies, Strategic Finance Corp",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
    linkedin: "https://www.linkedin.com/in/emilywatson"
  }
]

const linkedinRecommendations = [
  {
    text: "Lalit's analytical skills and attention to detail make him an invaluable asset to any financial team. His work on our risk management strategies was exceptional and led to a significant reduction in our portfolio's volatility.",
    author: "John Doe",
    title: "Director of Risk Management, Tech Innovations Inc.",
    linkedin: "https://www.linkedin.com/in/johndoe",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    text: "I had the pleasure of working with Lalit on several complex financial projects. His ability to break down intricate problems and provide clear, actionable insights is truly impressive. His contributions were key to the success of our merger and acquisition strategies.",
    author: "Jane Smith",
    title: "CFO, Global Solutions Corp.",
    linkedin: "https://www.linkedin.com/in/janesmith",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setDirection(-1)
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  return (
    <section id="testimonials" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center", theme.typography.fontFamily.serif)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Client Testimonials
      </motion.h2>
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Card className="relative overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6 sm:p-12">
                <div className="flex items-center justify-center mb-8">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-4 text-center max-w-3xl mx-auto">
                  <p className={cn(theme.typography.fontSize.xl, "italic")}>{testimonials[currentIndex].quote}</p>
                  <div className="flex flex-col items-center">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      width={100}
                      height={100}
                      className="rounded-full mb-4"
                    />
                    <p className={cn(theme.typography.fontSize.lg, theme.typography.fontFamily.sans, "font-semibold")}>{testimonials[currentIndex].author}</p>
                    <p className={cn(theme.typography.fontSize.sm, "text-muted-foreground")}>{testimonials[currentIndex].title}</p>
                    <a
                      href={testimonials[currentIndex].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center mt-2"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            onClick={previous}
            className="rounded-full bg-background/80 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full bg-background/80 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <h3 className={cn(theme.typography.fontSize['2xl'], theme.typography.fontFamily.sans, "font-bold mb-8 text-center")}>LinkedIn Recommendations</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {linkedinRecommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/50 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className={cn(theme.typography.fontSize.base, "mb-4")}>{rec.text}</p>
                  <div className="flex items-center">
                    <Image
                      src={rec.image}
                      alt={rec.author}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className={cn(theme.typography.fontSize.lg, theme.typography.fontFamily.sans, "font-semibold")}>{rec.author}</p>
                      <p className={cn(theme.typography.fontSize.sm, "text-muted-foreground")}>{rec.title}</p>
                      <a
                        href={rec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center mt-2"
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        View on LinkedIn
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

