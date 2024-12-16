import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { GridBackground } from '@/components/grid-background'
import { cn } from "@/lib/utils"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lalit Khade | Financial Analyst & Investment Strategist',
  description: 'Masters in Finance graduate from ASU specializing in investment strategies, financial analysis, and data analytics. Seeking opportunities in Investment Banking and Finance.',
  keywords: ['Financial Analyst', 'Investment Strategist', 'Portfolio Management', 'Risk Analysis', 'Data Analytics', 'ASU Finance Graduate'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
            :root {
              --primary: 210 100% 35%;
              --primary-foreground: 0 0% 100%;
              --secondary: 210 40% 96.1%;
              --secondary-foreground: 222.2 47.4% 11.2%;
              --muted: 210 40% 96.1%;
              --muted-foreground: 215.4 16.3% 46.9%;
              --accent: 210 40% 96.1%;
              --accent-foreground: 222.2 47.4% 11.2%;
              --background: 0 0% 100%;
              --foreground: 222.2 84% 4.9%;
              --card: 0 0% 100%;
              --card-foreground: 222.2 84% 4.9%;
              --border: 214.3 31.8% 91.4%;
              --input: 214.3 31.8% 91.4%;
            }
            .dark {
              --primary: 210 100% 60%;
              --primary-foreground: 0 0% 100%;
              --secondary: 217.2 32.6% 25%;
              --secondary-foreground: 210 40% 98%;
              --muted: 217.2 32.6% 25%;
              --muted-foreground: 215 20.2% 75%;
              --accent: 217.2 32.6% 25%;
              --accent-foreground: 210 40% 98%;
              --background: 222.2 84% 4.9%;
              --foreground: 210 40% 98%;
              --card: 222.2 84% 4.9%;
              --card-foreground: 210 40% 98%;
              --border: 217.2 32.6% 25%;
              --input: 217.2 32.6% 25%;
            }
          `}
        </style>
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <GridBackground />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

