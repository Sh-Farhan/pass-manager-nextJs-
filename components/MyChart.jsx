"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", Registered: 186, Solved: 80 },
  { month: "February", Registered: 305, Solved: 200 },
  { month: "March", Registered: 237, Solved: 120 },
  { month: "April", Registered: 73, Solved: 190 },
  { month: "May", Registered: 209, Solved: 130 },
  { month: "June", Registered: 214, Solved: 140 },
]

const chartConfig = {
  Registered: {
    label: "Registered",
    color: "hsl(var(--chart-1))",
  },
  Solved: {
    label: "Solved",
    color: "hsl(var(--chart-2))",
  },
}

export function DataChart() {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Registered" fill="var(--color-Registered)" radius={4} />
            <Bar dataKey="Solved" fill="var(--color-Solved)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Solved up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
