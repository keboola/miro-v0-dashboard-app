import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  value: text("value").notNull(),
  change: text("change").notNull(),
  trend: text("trend").notNull(),
  hint: text("hint").notNull(),
  sortOrder: integer("sortOrder").notNull().default(0),
})

export const revenue = pgTable("revenue", {
  id: serial("id").primaryKey(),
  month: text("month").notNull(),
  revenue: integer("revenue").notNull(),
  orders: integer("orders").notNull(),
  sortOrder: integer("sortOrder").notNull().default(0),
})

export const channelTraffic = pgTable("channel_traffic", {
  id: serial("id").primaryKey(),
  period: text("period").notNull(),
  channel: text("channel").notNull(),
  visitors: integer("visitors").notNull(),
  sortOrder: integer("sortOrder").notNull().default(0),
})

export const recentSales = pgTable("recent_sales", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  amount: text("amount").notNull(),
  initials: text("initials").notNull(),
  sortOrder: integer("sortOrder").notNull().default(0),
})

export const topProducts = pgTable("top_products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  sales: integer("sales").notNull(),
  share: integer("share").notNull(),
  sortOrder: integer("sortOrder").notNull().default(0),
})
