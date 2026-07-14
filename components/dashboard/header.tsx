import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/dashboard/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
        <p className="hidden text-xs text-muted-foreground sm:block">
          Welcome back, here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-48 rounded-md border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring lg:w-64"
          />
        </div>

        <ThemeToggle />

        <button
          className="relative flex size-9 items-center justify-center rounded-md border border-input bg-card text-foreground transition-colors hover:bg-accent"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
        </button>

        <Avatar className="size-9">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
