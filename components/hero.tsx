'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'
import { FinanceOptimizer } from './finance-optimizer'
import { cn } from "@/lib/utils"
import { theme } from "@/lib/theme"
import { smoothScroll } from '@/lib/smooth-scroll'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 items-start">
          <motion.div 
            className="flex flex-col items-start text-left space-y-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h1 className={cn("text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight", theme.typography.fontFamily.serif)}>
                <span className="block text-foreground">Lalit Khade</span>
                <span className="block text-primary">Financial Analyst &</span>
                <span className="block text-primary">Strategist</span>
              </h1>
              <p className={cn("max-w-[600px] text-lg text-muted-foreground", theme.typography.fontSize.lg)}>
                Masters in Finance graduate from ASU with expertise in financial modeling, risk management, and data analytics. 
                Leveraging cutting-edge tools to optimize financial performance and drive strategic growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="group">
                <a href="/Lalit_Khade_Resume.pdf" download="Lalit_Khade_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={(e) => smoothScroll(e, 'contact')}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:max-w-[420px] mx-auto lg:mr-0"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-1">
              <FinanceOptimizer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

