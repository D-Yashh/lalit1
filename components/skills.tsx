'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, BarChart, PieChart, TrendingUp, ShieldCheck, Laptop, GraduationCap } from 'lucide-react'

const skills = [
  {
    category: "Financial Analysis",
    items: [
      { name: "Financial Modeling", proficiency: 90 },
      { name: "Investment Strategies", proficiency: 85 },
      { name: "Risk Management", proficiency: 85 },
      { name: "Balance Sheet Analysis", proficiency: 90 },
      { name: "Budgeting & Cost Control", proficiency: 85 },
    ]
  },
  {
    category: "Technical Skills",
    items: [
      { name: "MS Excel", proficiency: 95 },
      { name: "Python", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "Bloomberg Terminal", proficiency: 85 },
      { name: "ProCore P6", proficiency: 80 },
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Strategic Thinking", proficiency: 90 },
      { name: "Project Management", proficiency: 85 },
      { name: "Communication", proficiency: 90 },
      { name: "Problem Solving", proficiency: 90 },
      { name: "Leadership", proficiency: 85 },
    ]
  }
]

const courses = [
  "Financial Accounting",
  "Managerial Finance",
  "Quantitative Methods",
  "Investment Strategies",
  "Corporate Finance",
  "Fixed Income",
  "International Finance",
  "Risk Management in Banks and Financial Institutions",
  "Financial Derivatives",
  "Finance Capstone",
  "Entrepreneurial Finance"
]

const experiences = [
  { name: "Financial Analysis", icon: LineChart, description: "Conducted thorough financial analysis for multiple projects and investments" },
  { name: "Investment Management", icon: TrendingUp, description: "Managed and optimized investment portfolios for maximum returns" },
  { name: "Risk Assessment", icon: ShieldCheck, description: "Evaluated and mitigated financial risks in various business scenarios" },
  { name: "Data Analytics", icon: PieChart, description: "Utilized advanced data analytics techniques for financial insights" },
  { name: "Financial Modeling", icon: BarChart, description: "Created complex financial models for forecasting and decision-making" },
  { name: "Technology Integration", icon: Laptop, description: "Leveraged technology to enhance financial processes and reporting" },
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Financial Analysis")

  return (
    <section id="skills" className="container py-24 md:py-32">
      <motion.h2 
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>
      <Tabs defaultValue="skills" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 lg:max-w-[640px] mx-auto">
          <TabsTrigger value="skills">Professional Skills</TabsTrigger>
          <TabsTrigger value="courses">Advanced Coursework</TabsTrigger>
          <TabsTrigger value="experience">Real-World Applications</TabsTrigger>
        </TabsList>
        <TabsContent value="skills" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Professional Skills</CardTitle>
              <CardDescription className="text-base">Comprehensive overview of my skill set and proficiency levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((category) => (
                    <Badge
                      key={category.category}
                      variant={selectedCategory === category.category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category.category)}
                    >
                      {category.category}
                    </Badge>
                  ))}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {skills.find(cat => cat.category === selectedCategory)?.items.map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Advanced Coursework</CardTitle>
              <CardDescription className="text-base">Specialized finance courses from Masters in Finance program at ASU</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {courses.map((course, index) => (
                  <motion.div 
                    key={`course-${index}`}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base">{course}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="experience" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Real-World Applications</CardTitle>
              <CardDescription className="text-base">Practical experience in applying financial knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={exp.name}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <exp.icon className="h-12 w-12 text-primary mb-2" />
                    <h3 className="text-lg font-semibold mb-2">{exp.name}</h3>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

