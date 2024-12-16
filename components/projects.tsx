'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

const projects = [
  {
    title: "Investment Portfolio Optimization",
    description: "Implemented a Core-Satellite portfolio allocation strategy using advanced financial modeling techniques.",
    achievements: [
      "15% outperformance vs S&P 500 benchmark",
      "Reduced portfolio volatility by 20%",
      "Applied Treynor-Black model for optimal asset allocation",
      "Conducted comprehensive investment analysis with non-zero alpha values"
    ],
    tags: ["Portfolio Management", "Risk Analysis", "Financial Modeling", "Asset Allocation"]
  },
  {
    title: "Fixed Income Portfolio Construction",
    description: "Developed a risk-adjusted fixed income portfolio worth $3M using Bloomberg Terminal, targeting a 7% annual yield.",
    achievements: [
      "Achieved 7% fixed income target consistently over 12 months",
      "Diversified across 6 asset classes including government bonds, corporate bonds, and mortgage-backed securities",
      "Implemented duration and convexity strategies to optimize interest rate risk",
      "Utilized Bloomberg Terminal for real-time market data analysis and trade execution"
    ],
    tags: ["Fixed Income", "Risk Management", "Bloomberg Terminal", "Interest Rate Risk"]
  },
  {
    title: "Corporate Financial Analysis",
    description: "Conducted comprehensive financial analysis for a Fortune 500 company, focusing on profitability, liquidity, and growth prospects.",
    achievements: [
      "Identified potential 10% increase in operational efficiency",
      "Developed a 5-year financial projection model with multiple scenarios",
      "Performed detailed ratio analysis revealing key areas for improvement",
      "Presented findings to C-level executives, influencing strategic decisions"
    ],
    tags: ["Financial Analysis", "Ratio Analysis", "Financial Projections", "Corporate Finance"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center", theme.typography.fontFamily.serif)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Signature Projects
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Card className="h-full flex flex-col bg-white/50 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className={cn(theme.typography.fontSize.xl, theme.typography.fontFamily.sans)}>{project.title}</CardTitle>
                <CardDescription className={theme.typography.fontSize.base}>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <h4 className={cn(theme.typography.fontSize.lg, "font-semibold mb-2")}>Key Achievements:</h4>
                <ul className="list-disc pl-4 space-y-2 mb-4 flex-grow">
                  {project.achievements.map((achievement, j) => (
                    <li key={j} className={cn(theme.typography.fontSize.sm, "text-muted-foreground")}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

