import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { recentSales } from "@/lib/dashboard-data"

export function RecentSales() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {recentSales.map((sale) => (
          <div key={sale.email} className="flex items-center gap-4">
            <Avatar className="size-9">
              <AvatarFallback className="bg-accent text-xs text-accent-foreground">
                {sale.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{sale.name}</p>
              <p className="truncate text-xs text-muted-foreground">{sale.email}</p>
            </div>
            <span className="text-sm font-medium text-foreground">{sale.amount}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
