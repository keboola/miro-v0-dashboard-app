import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Product = { name: string; sales: number; share: number }

export function TopProducts({ products }: { products: Product[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>Best sellers this month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{product.name}</span>
              <span className="text-muted-foreground">{product.sales}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${product.share}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
