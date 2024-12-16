"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { InvestmentCalculator } from "./interactive-tools/investment-calculator"
import { RiskAssessment } from "./interactive-tools/risk-assessment"
import { MarketInsights } from "./interactive-tools/market-insights"
import { theme } from "@/lib/theme"
import { cn } from "@/lib/utils"

export function InteractiveTools() {
  const [activeTab, setActiveTab] = useState("calculator")

  return (
    <section id="interactive-tools" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center", theme.typography.fontFamily.serif)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Interactive Financial Tools
      </motion.h2>
      <Card className="bg-white/50 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className={cn(theme.typography.fontSize['2xl'], theme.typography.fontFamily.sans)}>Explore Our Tools</CardTitle>
          <CardDescription className={theme.typography.fontSize.base}>
            Use these interactive tools to gain insights into your financial decisions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="calculator">Investment Calculator</TabsTrigger>
              <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
              <TabsTrigger value="market">Market Insights</TabsTrigger>
            </TabsList>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TabsContent value="calculator">
                <InvestmentCalculator />
              </TabsContent>
              <TabsContent value="risk">
                <RiskAssessment />
              </TabsContent>
              <TabsContent value="market">
                <MarketInsights />
              </TabsContent>
            </motion.div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

