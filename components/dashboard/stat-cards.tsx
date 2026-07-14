import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Stat = {
  label: string
  value: string
  change: string
  trend: string
  hint: string
}

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.trend === "up" ? TrendingUp : TrendingDown
        return (
          <Card key={stat.label}>
            <CardContent className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
              <div className="flex items-center gap-1.5 text-sm">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium",
                    stat.trend === "up"
                      ? "bg-accent text-accent-foreground"
                      : "bg-destructive/10 text-destructive",
                  )}
                >
                  <Icon className="size-3" />
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">{stat.hint}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
