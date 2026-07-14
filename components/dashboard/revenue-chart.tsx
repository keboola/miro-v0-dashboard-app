"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type RevenueDatum = { month: string; revenue: number; orders: number }

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  orders: {
    label: "Orders",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const rangeMonths = {
  "3m": 3,
  "6m": 6,
  "12m": 12,
} as const

type Range = keyof typeof rangeMonths

export function RevenueChart({ revenueData }: { revenueData: RevenueDatum[] }) {
  const [range, setRange] = useState<Range>("12m")
  const data = revenueData.slice(-rangeMonths[range])

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div className="space-y-1.5">
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Revenue and order volume over time</CardDescription>
        </div>
        <ToggleGroup
          type="single"
          value={range}
          onValueChange={(value) => value && setRange(value as Range)}
          variant="outline"
          size="sm"
          className="shrink-0"
        >
          <ToggleGroupItem value="3m" aria-label="Last 3 months">
            3M
          </ToggleGroupItem>
          <ToggleGroupItem value="6m" aria-label="Last 6 months">
            6M
          </ToggleGroupItem>
          <ToggleGroupItem value="12m" aria-label="Last 12 months">
            12M
          </ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart data={data} margin={{ left: 4, right: 4, top: 8 }}>
            <defs>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-orders)" stopOpacity={0.35} />
                <stop offset="95%" stopColor="var(--color-orders)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className="text-xs"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={44}
              className="text-xs"
              tickFormatter={(value) => `$${(value as number) / 1000}k`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="revenue"
              type="monotone"
              fill="url(#fillRevenue)"
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
            <Area
              dataKey="orders"
              type="monotone"
              fill="url(#fillOrders)"
              stroke="var(--color-orders)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
