import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatCards } from "@/components/dashboard/stat-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { ChannelChart } from "@/components/dashboard/channel-chart"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { TopProducts } from "@/components/dashboard/top-products"
import {
  getChannelDataByPeriod,
  getRecentSales,
  getRevenue,
  getStats,
  getTopProducts,
} from "@/lib/dashboard-queries"

export default async function DashboardPage() {
  const [stats, revenueData, channelDataByPeriod, recentSales, topProducts] =
    await Promise.all([
      getStats(),
      getRevenue(),
      getChannelDataByPeriod(),
      getRecentSales(),
      getTopProducts(),
    ])

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
          <StatCards stats={stats} />
          <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3">
            <RevenueChart revenueData={revenueData} />
            <ChannelChart channelDataByPeriod={channelDataByPeriod} />
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-6 xl:grid-cols-3">
            <RecentSales recentSales={recentSales} />
            <TopProducts products={topProducts} />
          </div>
        </main>
      </div>
    </div>
  )
}
