import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'
import { theme } from "@/lib/theme"
import { cn } from "@/lib/utils"

// Mock market data
const marketData = [
  { date: "2023-01", SP500: 3800, NASDAQ: 10500, DOW: 31000 },
  { date: "2023-03", SP500: 4100, NASDAQ: 11800, DOW: 32500 },
  { date: "2023-06", SP500: 4300, NASDAQ: 13200, DOW: 33800 },
  { date: "2023-09", SP500: 4200, NASDAQ: 12900, DOW: 33200 },
  { date: "2023-12", SP500: 4700, NASDAQ: 14700, DOW: 35500 },
  { date: "2024-03", SP500: 4900, NASDAQ: 15200, DOW: 36800 },
]

export function MarketInsights() {
  const [data, setData] = useState(marketData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setData(marketData)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch market data. Please try again later.")
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[250px]" /><Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-4 w-[300px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[400px] w-full" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn(theme.typography.fontSize.xl, theme.typography.fontFamily.sans)}>Market Insights</CardTitle>
        <CardDescription className={theme.typography.fontSize.base}>Interactive chart showing major index performance over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="SP500" stroke="#8884d8" name="S&P 500" />
              <Line type="monotone" dataKey="NASDAQ" stroke="#82ca9d" name="NASDAQ" />
              <Line type="monotone" dataKey="DOW" stroke="#ffc658" name="Dow Jones" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={cn(theme.typography.fontSize.sm, "mt-4 text-center text-muted-foreground")}>
          This chart shows mock data for illustrative purposes only. 
          Real-world applications would use live market data from financial APIs.
        </div>
      </CardContent>
    </Card>
  )
}

