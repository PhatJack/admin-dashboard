import {
  Bell,
  CreditCard,
  LifeBuoy,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5 my-auto" />

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-medium">Dashboard</h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Business command center
          </p>
        </div>

        <div className="relative ms-auto hidden w-full max-w-sm md:block">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search dashboard..."
            className="pl-8"
          />
        </div>
      </div>

      <Button type="button" variant="ghost" size="icon" aria-label="Help">
        <LifeBuoy />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Notifications"
      >
        <Bell />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className="h-9 gap-2 px-2"
            aria-label="Open user menu"
          >
            <Avatar size="sm">
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <span className="hidden max-w-24 truncate text-sm md:inline">
              Jack Phat
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col gap-1">
            <span className="text-sm font-medium text-foreground">
              Jack Phat
            </span>
            <span className="truncate text-xs font-normal">
              jackvuabongro@gmail.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOut />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default AppHeader
