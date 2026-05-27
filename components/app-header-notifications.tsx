"use client"

import { Bell, CheckCheck } from "lucide-react"

import { appNotifications } from "@/app/constant/notifications"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ScrollArea } from "./ui/scroll-area"

const variantClassNames = {
  default: "bg-muted",
  warning: "bg-chart-4",
  success: "bg-chart-2",
}

export const AppHeaderNotifications = () => {
  const unreadCount = appNotifications.filter(
    (notification) => notification.unread
  ).length

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`${unreadCount} unread notifications`}
          className="relative"
        >
          <Bell />
          {unreadCount > 0 ? (
            <Badge
              variant="destructive"
              className="absolute -inset-e-1 -top-1 min-w-4 px-1 text-[10px] leading-4"
            >
              {unreadCount}
            </Badge>
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 gap-0 p-0">
        <PopoverHeader className="flex-row items-center justify-between gap-3 p-3">
          <PopoverTitle>Notifications</PopoverTitle>
          <Button type="button" variant="default" size="xs">
            <CheckCheck />
            Mark all as read
          </Button>
        </PopoverHeader>
        <Separator />
        <ScrollArea className="overflow-y-auto pr-3 pl-2 [&>[data-radix-scroll-area-viewport]]:max-h-96">
          <div className="flex flex-col">
            {appNotifications.map((notification) => (
              <button
                key={notification.id}
                type="button"
                className="flex w-full items-start gap-3 rounded-md px-2 py-3 text-start text-sm outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground"
              >
                <span
                  className={cn(
                    "mt-1 size-2 shrink-0 rounded-full",
                    variantClassNames[notification.variant]
                  )}
                />
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="flex items-center justify-between gap-3">
                    <span className="truncate font-medium">
                      {notification.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </span>
                  <span className="line-clamp-2 text-xs text-muted-foreground">
                    {notification.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}
