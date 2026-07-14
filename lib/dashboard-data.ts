export const stats = [
  {
    label: "Total Revenue",
    value: "$48,259",
    change: "+12.5%",
    trend: "up" as const,
    hint: "vs. last month",
  },
  {
    label: "Active Users",
    value: "8,492",
    change: "+5.2%",
    trend: "up" as const,
    hint: "vs. last month",
  },
  {
    label: "New Orders",
    value: "1,257",
    change: "-2.1%",
    trend: "down" as const,
    hint: "vs. last month",
  },
  {
    label: "Conversion Rate",
    value: "3.84%",
    change: "+0.8%",
    trend: "up" as const,
    hint: "vs. last month",
  },
]

export const revenueData = [
  { month: "Jan", revenue: 18600, orders: 820 },
  { month: "Feb", revenue: 22050, orders: 910 },
  { month: "Mar", revenue: 19800, orders: 870 },
  { month: "Apr", revenue: 27300, orders: 1040 },
  { month: "May", revenue: 31200, orders: 1180 },
  { month: "Jun", revenue: 28900, orders: 1100 },
  { month: "Jul", revenue: 35400, orders: 1290 },
  { month: "Aug", revenue: 39100, orders: 1380 },
  { month: "Sep", revenue: 42600, orders: 1470 },
  { month: "Oct", revenue: 40800, orders: 1410 },
  { month: "Nov", revenue: 45200, orders: 1560 },
  { month: "Dec", revenue: 48259, orders: 1620 },
]

export const channelDataByPeriod = {
  "7d": [
    { channel: "Organic", visitors: 980 },
    { channel: "Direct", visitors: 720 },
    { channel: "Referral", visitors: 540 },
    { channel: "Social", visitors: 410 },
    { channel: "Email", visitors: 260 },
  ],
  "30d": [
    { channel: "Organic", visitors: 4200 },
    { channel: "Direct", visitors: 3100 },
    { channel: "Referral", visitors: 2400 },
    { channel: "Social", visitors: 1800 },
    { channel: "Email", visitors: 1200 },
  ],
  "90d": [
    { channel: "Organic", visitors: 12400 },
    { channel: "Direct", visitors: 9200 },
    { channel: "Referral", visitors: 7100 },
    { channel: "Social", visitors: 5300 },
    { channel: "Email", visitors: 3600 },
  ],
} as const

export type ChannelPeriod = keyof typeof channelDataByPeriod

export const channelPeriodLabels: Record<ChannelPeriod, string> = {
  "7d": "Last 7 days",
  "30d": "Last 30 days",
  "90d": "Last 90 days",
}

export const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    initials: "OM",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    initials: "JL",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    initials: "IN",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    initials: "WK",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    initials: "SD",
  },
]
