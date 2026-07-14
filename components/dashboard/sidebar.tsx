"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  CreditCard,
  Settings,
  LifeBuoy,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Customers", icon: Users },
  { label: "Orders", icon: ShoppingCart },
  { label: "Payments", icon: CreditCard },
]

const secondaryItems = [
  { label: "Settings", icon: Settings },
  { label: "Support", icon: LifeBuoy },
]

export function Sidebar() {
  const [active, setActive] = useState("Overview")

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Activity className="size-5" />
        </div>
        <span className="text-base font-semibold text-sidebar-foreground">Pulse</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Menu
        </p>
        {navItems.map((item) => (
          <NavButton
            key={item.label}
            {...item}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}

        <p className="px-3 pb-2 pt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          General
        </p>
        {secondaryItems.map((item) => (
          <NavButton
            key={item.label}
            {...item}
            active={active === item.label}
            onClick={() => setActive(item.label)}
          />
        ))}
      </nav>

      <div className="m-3 rounded-lg bg-accent p-4">
        <p className="text-sm font-medium text-accent-foreground">Upgrade to Pro</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Unlock advanced reports and unlimited history.
        </p>
        <button className="mt-3 w-full rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">
          Upgrade
        </button>
      </div>
    </aside>
  )
}

function NavButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
      )}
    >
      <Icon className="size-4" />
      {label}
    </button>
  )
}
