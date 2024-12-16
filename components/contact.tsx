'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Phone, Calendar, Send } from 'lucide-react'
import { theme } from '@/lib/theme'
import { cn } from "@/lib/utils"

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <section id="contact" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center", theme.typography.fontFamily.serif)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-white/50 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className={cn(theme.typography.fontSize['2xl'], theme.typography.fontFamily.sans)}>Contact Information</CardTitle>
            <CardDescription className={theme.typography.fontSize.base}>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:lkhade@asu.edu" className="text-primary hover:underline">lkhade@asu.edu</a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <a href="https://calendly.com/lalitkhade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Schedule a Meeting</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 h-4 w-4" />
              <a href="https://www.linkedin.com/in/lalitkumar-khade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Profile</a>
            </div>
            <div className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              <a href="https://github.com/lalitkhade" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Profile</a>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/50 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className={cn(theme.typography.fontSize['2xl'], theme.typography.fontFamily.sans)}>Send a Message</CardTitle>
            <CardDescription className={theme.typography.fontSize.base}>I'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={cn(theme.typography.fontSize.sm, "font-medium")}>Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className={cn(theme.typography.fontSize.sm, "font-medium")}>Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={cn(theme.typography.fontSize.sm, "font-medium")}>Subject</label>
                <Input id="subject" placeholder="Message Subject" required />
              </div>
              <div>
                <label htmlFor="message" className={cn(theme.typography.fontSize.sm, "font-medium")}>Message</label>
                <Textarea id="message" placeholder="Your message here..." required />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

