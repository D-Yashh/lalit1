import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { theme } from "@/lib/theme"
import { cn } from "@/lib/utils"

const riskQuestions = [
  {
    question: "What's your primary investment goal?",
    options: [
      { label: "Capital preservation", value: 1 },
      { label: "Balanced growth and income", value: 2 },
      { label: "Aggressive growth", value: 3 },
    ]
  },
  {
    question: "How would you react to a sudden 20% drop in your investment value?",
    options: [
      { label: "Sell immediately to prevent further losses", value: 1 },
      { label: "Hold and wait for recovery", value: 2 },
      { label: "Buy more at the lower price", value: 3 },
    ]
  },
  {
    question: "What's your investment time horizon?",
    options: [
      { label: "Less than 5 years", value: 1 },
      { label: "5-10 years", value: 2 },
      { label: "More than 10 years", value: 3 },
    ]
  },
  {
    question: "How much of your portfolio are you comfortable allocating to higher-risk investments?",
    options: [
      { label: "Less than 10%", value: 1 },
      { label: "10-30%", value: 2 },
      { label: "More than 30%", value: 3 },
    ]
  },
  {
    question: "How often do you plan to monitor and adjust your investments?",
    options: [
      { label: "Daily or weekly", value: 1 },
      { label: "Monthly or quarterly", value: 2 },
      { label: "Annually or less frequently", value: 3 },
    ]
  },
]

export function RiskAssessment() {
  const [riskScore, setRiskScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleRiskAnswer = (value: number) => {
    setSelectedAnswer(value)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setRiskScore(riskScore + selectedAnswer)
      if (currentQuestion < riskQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setCurrentQuestion(riskQuestions.length)
      }
    }
  }

  const getRiskProfile = (score: number) => {
    if (score <= 7) return "Conservative"
    if (score <= 11) return "Moderate"
    if (score <= 15) return "Growth"
    return "Aggressive"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn(theme.typography.fontSize.xl, theme.typography.fontFamily.sans)}>Risk Tolerance Assessment</CardTitle>
        <CardDescription className={theme.typography.fontSize.base}>Evaluate your investment risk tolerance to determine your ideal portfolio allocation</CardDescription>
      </CardHeader>
      <CardContent>
        {currentQuestion < riskQuestions.length ? (
          <div className="space-y-4">
            <h3 className={cn(theme.typography.fontSize.lg, "font-semibold")}>Question {currentQuestion + 1} of {riskQuestions.length}</h3>
            <p className={theme.typography.fontSize.base}>{riskQuestions[currentQuestion].question}</p>
            <RadioGroup 
              onValueChange={(value) => handleRiskAnswer(Number(value))}
              value={selectedAnswer?.toString()}
              className="space-y-2"
            >
              {riskQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
                  <RadioGroupItem value={option.value.toString()} id={`option-${index}`} className="border-primary" />
                  <Label htmlFor={`option-${index}`} className={cn(theme.typography.fontSize.sm, "flex-grow cursor-pointer")}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button 
              onClick={handleNextQuestion} 
              disabled={selectedAnswer === null}
              className="mt-4"
            >
              {currentQuestion === riskQuestions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h3 className={cn(theme.typography.fontSize.xl, "font-semibold")}>Assessment Complete</h3>
            <p className={cn(theme.typography.fontSize['3xl'], "font-bold text-primary")}>Your Risk Profile: {getRiskProfile(riskScore)}</p>
            <p className={theme.typography.fontSize.lg}>Risk Score: {riskScore} out of {riskQuestions.length * 3}</p>
            <div className={cn(theme.typography.fontSize.sm, "p-4 bg-muted rounded-lg text-muted-foreground")}>
              <p><strong>Conservative (5-7):</strong> Focus on capital preservation with some growth.</p>
              <p><strong>Moderate (8-11):</strong> Balance between growth and capital preservation.</p>
              <p><strong>Growth (12-15):</strong> Emphasis on growth with moderate risk tolerance.</p>
              <p><strong>Aggressive (16-15):</strong> High growth potential with higher risk tolerance.</p>
            </div>
            <Button onClick={() => { setCurrentQuestion(0); setRiskScore(0); setSelectedAnswer(null); }}>Retake Assessment</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

