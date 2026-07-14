"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  channelDataByPeriod,
  channelPeriodLabels,
  type ChannelPeriod,
} from "@/lib/dashboard-data"

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChannelChart() {
  const [period, setPeriod] = useState<ChannelPeriod>("30d")
  const data = channelDataByPeriod[period]

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
        <div className="space-y-1.5">
          <CardTitle>Traffic by Channel</CardTitle>
          <CardDescription>Visitors acquired per source</CardDescription>
        </div>
        <Select value={period} onValueChange={(value) => setPeriod(value as ChannelPeriod)}>
          <SelectTrigger className="w-[140px] shrink-0" size="sm" aria-label="Select period">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            {(Object.keys(channelPeriodLabels) as ChannelPeriod[]).map((key) => (
              <SelectItem key={key} value={key}>
                {channelPeriodLabels[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ left: 8, right: 16 }}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <XAxis type="number" hide />
            <YAxis
              dataKey="channel"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={64}
              className="text-xs"
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
