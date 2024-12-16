'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { theme } from '@/lib/theme'
import { cn } from "@/lib/utils"

export function FinanceOptimizer() {
  const [revenue, setRevenue] = useState(3800000)
  const [costs, setCosts] = useState(3000000)
  const [productivity, setProductivity] = useState(26)

  const profit = revenue - costs
  const profitMargin = (profit / revenue) * 100

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-2 pb-4">
        <CardTitle className="text-xl font-bold text-primary">Finance Optimizer</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Adjust the sliders to see how changes impact your company's financial performance
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <p className="text-lg font-semibold text-blue-600">{formatCurrency(revenue)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Costs</p>
            <p className="text-lg font-semibold text-red-500">{formatCurrency(costs)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Profit</p>
            <p className="text-lg font-semibold text-green-500">{formatCurrency(profit)}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Revenue</label>
              <span className="text-sm text-muted-foreground">{formatCurrency(revenue)}</span>
            </div>
            <Slider
              value={[revenue]}
              min={1000000}
              max={10000000}
              step={100000}
              onValueChange={(value) => setRevenue(value[0])}
              className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Costs</label>
              <span className="text-sm text-muted-foreground">{formatCurrency(costs)}</span>
            </div>
            <Slider
              value={[costs]}
              min={500000}
              max={8000000}
              step={100000}
              onValueChange={(value) => setCosts(value[0])}
              className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Productivity</label>
              <span className="text-sm text-muted-foreground">{productivity}%</span>
            </div>
            <Slider
              value={[productivity]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setProductivity(value[0])}
              className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3"
            />
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg space-y-2">
          <h4 className="font-medium">Financial Insights</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>Your current profit margin is <span className="text-primary font-medium">{profitMargin.toFixed(2)}%</span></li>
            <li>Increasing productivity could add up to {formatCurrency(profit * (productivity / 100))} in value</li>
            <li>Consider strategies to increase revenue or reduce costs for better performance</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

