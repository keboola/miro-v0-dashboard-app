import { asc } from "drizzle-orm"
import { db } from "@/lib/db"
import {
  channelTraffic,
  recentSales,
  revenue,
  stats,
  topProducts,
} from "@/lib/db/schema"
import type { ChannelDatum, ChannelPeriod } from "@/lib/dashboard-types"

export async function getStats() {
  return db.select().from(stats).orderBy(asc(stats.sortOrder))
}

export async function getRevenue() {
  return db
    .select({
      month: revenue.month,
      revenue: revenue.revenue,
      orders: revenue.orders,
    })
    .from(revenue)
    .orderBy(asc(revenue.sortOrder))
}

export async function getChannelDataByPeriod() {
  const rows = await db
    .select({
      period: channelTraffic.period,
      channel: channelTraffic.channel,
      visitors: channelTraffic.visitors,
    })
    .from(channelTraffic)
    .orderBy(asc(channelTraffic.sortOrder))

  const grouped: Record<ChannelPeriod, ChannelDatum[]> = {
    "7d": [],
    "30d": [],
    "90d": [],
  }

  for (const row of rows) {
    const period = row.period as ChannelPeriod
    if (grouped[period]) {
      grouped[period].push({ channel: row.channel, visitors: row.visitors })
    }
  }

  return grouped
}

export async function getRecentSales() {
  return db
    .select({
      name: recentSales.name,
      email: recentSales.email,
      amount: recentSales.amount,
      initials: recentSales.initials,
    })
    .from(recentSales)
    .orderBy(asc(recentSales.sortOrder))
}

export async function getTopProducts() {
  return db
    .select({
      name: topProducts.name,
      sales: topProducts.sales,
      share: topProducts.share,
    })
    .from(topProducts)
    .orderBy(asc(topProducts.sortOrder))
}
