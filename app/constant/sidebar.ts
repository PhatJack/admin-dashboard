import type { LucideIcon } from "lucide-react"
import {
  Bug,
  CircleHelp,
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  Settings,
  ShieldCheck,
  ShieldUser,
  Users,
  Boxes,
  Lock,
  ClockAlert,
  FileWarning,
  ShieldAlert,
  ServerCrash,
  SearchX,
} from "lucide-react"

export type SidebarMenuItem = {
  title: string
  url?: string
  icon?: LucideIcon
  badge?: string
  items?: {
    icon?: LucideIcon
    title: string
    url: string
    badge?: string
  }[]
}

export type SidebarMenuGroup = {
  label: string
  items: SidebarMenuItem[]
}

export const sidebarMenu: SidebarMenuGroup[] = [
  {
    label: "General",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Tasks",
        url: "/tasks",
        icon: ListTodo,
      },
      {
        title: "Apps",
        url: "/apps",
        icon: Boxes,
      },
      {
        title: "Chats",
        url: "/chats",
        icon: MessageSquare,
        badge: "3",
      },
      {
        title: "Users",
        url: "/users",
        icon: Users,
      },
      {
        title: "Secured by Clerk",
        icon: ShieldUser,
        items: [
          {
            title: "Sign In",
            url: "/sign-in",
          },
          {
            title: "Sign Up",
            url: "/sign-up",
          },
          {
            title: "User Management",
            url: "/user-management",
          },
        ],
      },
    ],
  },
  {
    label: "Pages",
    items: [
      {
        title: "Auth",
        icon: ShieldCheck,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
          {
            title: "Sign Up",
            url: "/auth/sign-up",
          },
          {
            title: "Forgot Password",
            url: "/auth/forgot-password",
            badge: "New",
          },
          {
            title: "OTP",
            url: "/auth/otp",
          },
        ],
      },
      {
        title: "Errors",
        icon: Bug,
        items: [
          {
            icon: Lock,
            title: "Unauthorized",
            url: "/errors/401",
          },
          {
            icon: SearchX,
            title: "Not Found",
            url: "/errors/404",
          },
          {
            icon: ServerCrash,
            title: "Internal Server Error",
            url: "/errors/500",
            badge: "New",
          },
          {
            icon: ShieldAlert,
            title: "Service Unavailable",
            url: "/errors/503",
            badge: "New",
          },
          {
            icon: ClockAlert,
            title: "Gateway Timeout",
            url: "/errors/504",
            badge: "New",
          },
        ],
      },
    ],
  },
  {
    label: "Other",
    items: [
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
      {
        title: "Help Center",
        url: "/help-center",
        icon: CircleHelp,
      },
    ],
  },
]
