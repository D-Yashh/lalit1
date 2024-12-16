'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronDown, ChevronUp, Briefcase, Calendar, Award } from 'lucide-react'
import { theme } from '@/lib/theme'
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Assistant Financial Analyst",
    company: "Avirat Enterprises Pvt. Ltd",
    period: "May 2020 - March 2023",
    location: "India",
    responsibilities: [
      "Performed research and gathered data like quotations from 100+ sub-contractors for comparison and preparing project report",
      "Utilized ProCore P6 to enable stage wise payments to implement budgeting & cost control strategies for all ongoing projects",
      "Led financial closeout for 7 commercial projects overseeing labor compliances, running account bills & defect liability payments",
      "Accelerated administrative support like addressing financial queries and enhanced invoice and payment bifurcation of project",
      "Collaborated with stakeholders for quarterly as well as yearly internal & external financial audits achieving 100% audit accuracy",
      "Conducted thorough analysis of all applications received from sub-contractors and segregated suitable option for management",
      "Conserved all business and financial records of previously collaborated sub-contractors for future reference related to new tenders",
      "Dealt directly with accounting team for invoice management, accounts receivable, accounts payable & payroll for staff & labors",
      "Streamlined the support process resulting in reducing resolution time by 30% and enhancing interdepartmental communication"
    ],
    achievements: [
      "Achieved 100% audit accuracy for quarterly and yearly financial audits",
      "Reduced resolution time by 30% through streamlined support processes",
      "Successfully managed financial closeout for 7 commercial projects"
    ],
    skills: ["Financial Analysis", "ProCore P6", "Budgeting", "Cost Control", "Audit Management", "Invoice Management", "Process Optimization"]
  },
  {
    title: "Assistant Financial Analyst",
    company: "Capstone Technologies Pvt. Ltd",
    period: "March 2019 - April 2020",
    location: "India",
    responsibilities: [
      "Audited and monitored invoices, expenses and payments, estimating around $150k yearly, upkeeping precision",
      "Rendered developing financial models that accessed project profitability and identified cost-saving opportunities of 10%",
      "Integrated balance sheet analysis worth $300k using SQL and contributed to the completion of month-end reporting",
      "Calculated monthly intercompany revenue of around $100k with precision resulting in improvement in financial management",
      "Contributed in filing direct and indirect taxation, ensuring measures to meet both State and Federal regulatory obligations",
      "Led an initiative to organize multiple team building events that increased internal networking opportunities amongst employees"
    ],
    achievements: [
      "Identified cost-saving opportunities of 10% through financial modeling",
      "Successfully integrated $300k worth of balance sheet analysis using SQL",
      "Improved financial management through precise calculation of $100k monthly intercompany revenue"
    ],
    skills: ["Financial Auditing", "Financial Modeling", "SQL", "Balance Sheet Analysis", "Tax Filing", "Team Building"]
  },
  {
    title: "Finance Trainee",
    company: "Capstone Technologies Pvt. Ltd",
    period: "August 2018 - February 2019",
    location: "India",
    responsibilities: [
      "Contributed in administration support to financial team with record keeping using MS EXCEL 2016 maintaining data integrity",
      "Assisted Finance team lead with compilation of financial documentation with 100% accuracy facilitating in efficient auditing",
      "Ensured error reduction to minimal of 0.1% in financial reporting and spreadsheet updating using MS EXCEL 2016"
    ],
    achievements: [
      "Achieved 100% accuracy in financial documentation compilation",
      "Reduced errors in financial reporting to a minimal 0.1%"
    ],
    skills: ["MS Excel", "Financial Reporting", "Data Integrity", "Documentation"]
  }
]

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("responsibilities")

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center", theme.typography.fontFamily.serif)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="transition-all duration-300 hover:shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="cursor-pointer p-4 sm:p-6" onClick={() => toggleExpand(index)}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle className={cn(theme.typography.fontSize['2xl'], theme.typography.fontFamily.sans)}>{exp.title}</CardTitle>
                    <CardDescription className={theme.typography.fontSize.base}>
                      <span className="flex items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center mt-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center mt-1">
                        <Award className="mr-2 h-4 w-4" />
                        {exp.location}
                      </span>
                    </CardDescription>
                  </div>
                  {expandedIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </CardHeader>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <Tabs defaultValue="responsibilities" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                          <TabsTrigger value="responsibilities" onClick={() => setActiveTab("responsibilities")}>Responsibilities</TabsTrigger>
                          <TabsTrigger value="achievements" onClick={() => setActiveTab("achievements")}>Achievements</TabsTrigger>
                          <TabsTrigger value="skills" onClick={() => setActiveTab("skills")}>Skills</TabsTrigger>
                        </TabsList>
                        <TabsContent value="responsibilities">
                          <ul className="list-disc pl-5 space-y-1 mt-4">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className={cn(theme.typography.fontSize.sm, "text-muted-foreground")}>{resp}</li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="achievements">
                          <ul className="space-y-2 mt-4">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <Badge variant="secondary" className="mr-2 mt-1">Achievement</Badge>
                                <span className={theme.typography.fontSize.sm}>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="skills">
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.skills.map((skill, i) => (
                              <Badge key={i} variant="outline">{skill}</Badge>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <a href="/Lalit_Khade_Resume.pdf" download>
            Download Full Resume
          </a>
        </Button>
      </div>
    </section>
  )
}

