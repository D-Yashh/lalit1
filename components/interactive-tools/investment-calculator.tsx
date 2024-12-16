import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { theme } from "@/lib/theme"
import { cn } from "@/lib/utils"

export function InvestmentCalculator() {
  const [principal, setPrincipal] = useState(10000)
  const [rate, setRate] = useState(7)
  const [time, setTime] = useState(10)
  const [result, setResult] = useState(0)
  const [error, setError] = useState("")

  const calculateInvestment = () => {
    if (principal <= 0 || rate < 0 || time <= 0) {
      setError("Please enter valid positive numbers for all fields.")
      return
    }
    setError("")
    const amount = principal * Math.pow((1 + rate / 100), time)
    setResult(parseFloat(amount.toFixed(2)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn(theme.typography.fontSize.xl, theme.typography.fontFamily.sans)}>Investment Calculator</CardTitle>
        <CardDescription className={theme.typography.fontSize.base}>Calculate the future value of your investment using compound interest</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="principal" className={theme.typography.fontSize.sm}>Initial Investment ($)</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              min="0"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rate" className={theme.typography.fontSize.sm}>Annual Interest Rate (%)</Label>
            <Slider
              id="rate"
              min={0}
              max={20}
              step={0.1}
              value={[rate]}
              onValueChange={(value) => setRate(value[0])}
            />
            <div className="text-right text-sm text-muted-foreground">{rate.toFixed(1)}%</div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time" className={theme.typography.fontSize.sm}>Investment Period (Years)</Label>
            <Slider
              id="time"
              min={1}
              max={30}
              step={1}
              value={[time]}
              onValueChange={(value) => setTime(value[0])}
            />
            <div className="text-right text-sm text-muted-foreground">{time} years</div>
          </div>
          <Button onClick={calculateInvestment}>Calculate</Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {result > 0 && (
            <div className="text-center p-4 bg-muted rounded-lg">
              <p className={cn(theme.typography.fontSize.lg, "font-semibold")}>Future Value:</p>
              <p className={cn(theme.typography.fontSize['3xl'], "font-bold text-primary")}>${result.toLocaleString()}</p>
              <p className={cn(theme.typography.fontSize.sm, "text-muted-foreground mt-2")}>
                Total growth: ${(result - principal).toLocaleString()} ({((result / principal - 1) * 100).toFixed(2)}%)
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

