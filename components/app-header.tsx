"use client"

import {
  CreditCard,
  LifeBuoy,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react"
import Link from "next/link"

import { AppHeaderNotifications } from "@/components/app-header-notifications"
import { SettingsSheetContent } from "@/components/app-header-settings"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useDirectionSettings } from "@/components/ui/direction"
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
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const AppHeader = () => {
  const { direction } = useDirectionSettings()

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <SidebarTrigger />
      <Separator orientation="vertical" className="my-auto h-5" />

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="relative ms-auto hidden w-full max-w-sm md:block">
          <Search
            size={16}
            className="pointer-events-none absolute start-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search dashboard..."
            className="ps-8"
          />
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost" size="icon" aria-label="Help">
            <LifeBuoy />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={direction === "rtl" ? "left" : "right"}
          className="w-full p-0 sm:max-w-[420px]"
        >
          <SettingsSheetContent />
        </SheetContent>
      </Sheet>

      <AppHeaderNotifications />

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
            <DropdownMenuItem asChild>
              <Link href="/billing" className="cursor-pointer">
                <CreditCard />
                Billing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="cursor-pointer">
                <Settings />
                Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" asChild>
            <Link href="/login" className="cursor-pointer">
              <LogOut />
              Sign out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export default AppHeader
