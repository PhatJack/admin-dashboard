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
        badge: "10",
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
            title: "Login",
            url: "/login",
          },
          {
            title: "Register",
            url: "/register",
          },
          {
            title: "Forgot Password",
            url: "/forgot-password",
            badge: "New",
          },
          {
            title: "OTP",
            url: "/otp",
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
            url: "/errors/unauthorized",
          },
          {
            icon: SearchX,
            title: "Not Found",
            url: "/errors/not-found",
          },
          {
            icon: ServerCrash,
            title: "Internal Server Error",
            url: "/errors/internal-server-error",
            badge: "New",
          },
          {
            icon: ShieldAlert,
            title: "Service Unavailable",
            url: "/errors/service-unavailable",
            badge: "New",
          },
          {
            icon: ClockAlert,
            title: "Gateway Timeout",
            url: "/errors/gateway-timeout",
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
        url: "/coming-soon",
        icon: CircleHelp,
      },
    ],
  },
]
