"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

import {
  BadgeCheck,
  Bell,
  Building2,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  Crown,
  Gem,
  LogOut,
  Rocket,
  Sparkles,
} from "lucide-react"

import { Avatar, AvatarFallback } from "./ui/avatar"
import { useState } from "react"
import { sidebarMenu } from "@/app/constant/sidebar"
import { Badge } from "./ui/badge"
import Link from "next/link"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import { cn } from "@/lib/utils"

const teams = [
  {
    name: "Shadcn Admin",
    plan: "Free",
    icon: Building2,
  },
  {
    name: "Acme Studio",
    plan: "Pro",
    icon: Rocket,
  },
  {
    name: "Nova Team",
    plan: "Business",
    icon: Crown,
  },
  {
    name: "Pixel Agency",
    plan: "Enterprise",
    icon: Gem,
  },
]

export function AppSidebar() {
  const [activeTeam, setActiveTeam] = useState(teams[0])
  const [activeCollapsible, setActiveCollapsible] = useState<string | null>(
    null
  )
  const ActiveIcon = activeTeam.icon

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex h-12 w-full items-center gap-2">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground">
                    <ActiveIcon className="size-5" />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col text-left">
                    <span className="truncate text-sm font-semibold">
                      {activeTeam.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {activeTeam.plan} Plan
                    </span>
                  </div>

                  <ChevronsUpDown className="size-4 text-muted-foreground" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent side="right" align="start">
                <DropdownMenuLabel>Switch Team</DropdownMenuLabel>

                <DropdownMenuGroup>
                  {teams.map((team) => {
                    const Icon = team.icon

                    return (
                      <DropdownMenuItem
                        key={team.name}
                        onClick={() => setActiveTeam(team)}
                        className="flex items-center gap-3"
                      >
                        <div className="flex size-8 items-center justify-center rounded-md border">
                          <Icon className="size-4" />
                        </div>

                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {team.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {team.plan} Plan
                          </span>
                        </div>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {sidebarMenu.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem key={group.label}>
                {group.items.map((item) =>
                  item.items && item.items.length ? (
                    <Collapsible
                      key={item.title}
                      open={activeCollapsible === item.title}
                      onOpenChange={(open) =>
                        setActiveCollapsible(open ? item.title : null)
                      }
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <div className="flex w-full items-center gap-2">
                            {item.icon && <item.icon className="size-4" />}
                            {item.title}
                            {item.badge && (
                              <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                            )}
                            <ChevronRight
                              className={cn(
                                "ml-auto size-4 text-muted-foreground transition-transform",
                                activeCollapsible === item.title && "rotate-90"
                              )}
                            />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="relative overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <span className="absolute top-0 left-3.75 h-full w-px bg-muted" />
                        {item.items.map((subItem) => (
                          <SidebarMenuButton
                            key={subItem.title}
                            asChild
                            className="pl-8"
                            tooltip={subItem.title}
                          >
                            <Link href={subItem.url}>
                              {subItem.icon && (
                                <subItem.icon className="size-4" />
                              )}
                              <span className="truncate">{subItem.title}</span>
                              {subItem.badge && (
                                <SidebarMenuBadge>
                                  {subItem.badge}
                                </SidebarMenuBadge>
                              )}
                            </Link>
                          </SidebarMenuButton>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      key={item.title}
                      asChild
                      tooltip={item.title}
                    >
                      {item.url ? (
                        <Link
                          href={item.url}
                          className="flex w-full items-center gap-2"
                        >
                          {item.icon && <item.icon className="size-4" />}
                          {item.title}
                          {item.badge && (
                            <SidebarMenuBadge>
                              {item.badge}
                            </SidebarMenuBadge>
                          )}
                        </Link>
                      ) : (
                        <>
                          {item.icon && <item.icon className="size-4" />}
                          {item.title}
                          {item.badge && (
                            <SidebarMenuBadge>
                              {item.badge}
                            </SidebarMenuBadge>
                          )}
                        </>
                      )}
                    </SidebarMenuButton>
                  )
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-12 w-full items-center gap-2">
                {/* <SidebarMenuButton className="flex h-12 w-full items-center gap-2"> */}
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex min-w-0 flex-1 flex-col text-left">
                  <span className="truncate text-sm font-semibold">
                    jack phat
                  </span>
                  <span className="text-xs text-muted-foreground">
                    jackvuabongro@gmail.com
                  </span>
                </div>

                <ChevronsUpDown className="size-4 text-muted-foreground" />
                {/* </SidebarMenuButton> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="end">
                <DropdownMenuLabel className="flex items-center gap-2 px-2 py-2 font-normal">
                  <Avatar>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-semibold">
                      Jack Phat
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      jackvuabongro@gmail.com
                    </span>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    <span>Upgrade to Pro</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <LogOut />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
