'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const expertise = [
  "Strategic financial planning and analysis",
  "Investment strategy development",
  "Risk management and assessment",
  "Data-driven financial modeling",
  "Balance sheet analysis and auditing",
  "Corporate finance and valuation",
  "Mergers and acquisitions analysis",
  "Portfolio optimization",
  "Financial technology integration",
  "Regulatory compliance and reporting"
]

export function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="about" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center", theme.typography.fontFamily.serif)}
        {...fadeIn}
      >
        About Me
      </motion.h2>
      <Card className="overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg">
        <CardContent className="p-4 sm:p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h3 className={cn("text-2xl font-semibold mb-4", theme.typography.fontFamily.sans)}>My Expertise</h3>
              <p className={cn("text-lg leading-relaxed text-muted-foreground mb-4", theme.typography.fontSize.base)}>
                As a Masters in Finance graduate from Arizona State University, I bring a unique blend of financial acumen and technical expertise to the table. My background in Computer Science and Engineering enables me to leverage cutting-edge technologies in financial analysis and modeling.
              </p>
              <p className={cn("text-lg leading-relaxed text-muted-foreground mb-4", theme.typography.fontSize.base)}>
                With nearly five years of experience in the finance industry, I've developed substantial knowledge in various areas of finance and investment strategy.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <h3 className={cn("text-2xl font-semibold mb-4", theme.typography.fontFamily.sans)}>Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-2">
                {expertise.map((item, index) => (
                  <Badge key={index} variant="secondary" className={cn("text-sm py-1 px-2", theme.typography.fontSize.sm)}>
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.p 
            className={cn("text-lg leading-relaxed text-muted-foreground mt-6", theme.typography.fontSize.base)}
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            I'm passionate about using my combined skills in finance and technology to drive financial performance and make informed strategic decisions in the fast-paced world of investment banking and corporate finance.
          </motion.p>
        </CardContent>
      </Card>
    </section>
  )
}

