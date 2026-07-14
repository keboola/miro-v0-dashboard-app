export type ChannelPeriod = "7d" | "30d" | "90d"

export const channelPeriodLabels: Record<ChannelPeriod, string> = {
  "7d": "Last 7 days",
  "30d": "Last 30 days",
  "90d": "Last 90 days",
}

export type ChannelDatum = { channel: string; visitors: number }
