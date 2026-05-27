import type {
  ForwardRefExoticComponent,
  RefAttributes,
} from "react"
import type { SvgIconProps } from "@thesvg/react"
import {
  Discord,
  Figma,
  Github,
  GoogleAnalytics,
  Hubspot,
  Jira,
  Mailchimp,
  Notion,
  Salesforce,
  Shopify,
  Slack,
  Stripe,
} from "@thesvg/react"

export type AppIntegrationStatus = "Connected" | "Available" | "Beta"

export type AppIntegrationCategory =
  | "Analytics"
  | "Communication"
  | "Developer"
  | "Docs"
  | "Marketing"
  | "Payments"
  | "Product"
  | "Sales"

export type AppIntegrationIcon = ForwardRefExoticComponent<
  SvgIconProps & RefAttributes<SVGSVGElement>
>

export type AppIntegration = {
  name: string
  description: string
  category: AppIntegrationCategory
  status: AppIntegrationStatus
  syncLabel: string
  icon: AppIntegrationIcon
}

export const appIntegrations: AppIntegration[] = [
  {
    name: "Slack",
    description: "Send activity alerts and approval updates to team channels.",
    category: "Communication",
    status: "Connected",
    syncLabel: "Real-time alerts",
    icon: Slack,
  },
  {
    name: "GitHub",
    description: "Link issues, pull requests, and deployment events to workstreams.",
    category: "Developer",
    status: "Available",
    syncLabel: "Code events",
    icon: Github,
  },
  {
    name: "Stripe",
    description: "Sync billing, subscription, and payment events into reports.",
    category: "Payments",
    status: "Available",
    syncLabel: "Billing sync",
    icon: Stripe,
  },
  {
    name: "Notion",
    description: "Attach docs, specs, and workspace pages to operational records.",
    category: "Docs",
    status: "Beta",
    syncLabel: "Workspace docs",
    icon: Notion,
  },
  {
    name: "Figma",
    description: "Preview design files and review status beside product tasks.",
    category: "Product",
    status: "Available",
    syncLabel: "Design handoff",
    icon: Figma,
  },
  {
    name: "Shopify",
    description: "Bring storefront orders and customer signals into dashboards.",
    category: "Sales",
    status: "Available",
    syncLabel: "Order stream",
    icon: Shopify,
  },
  {
    name: "Google Analytics",
    description: "Track acquisition, conversion, and campaign performance trends.",
    category: "Analytics",
    status: "Connected",
    syncLabel: "Daily metrics",
    icon: GoogleAnalytics,
  },
  {
    name: "HubSpot",
    description: "Unify contact, deal, and lifecycle activity from revenue teams.",
    category: "Sales",
    status: "Available",
    syncLabel: "CRM updates",
    icon: Hubspot,
  },
  {
    name: "Salesforce",
    description: "Connect account ownership and pipeline status to executive views.",
    category: "Sales",
    status: "Beta",
    syncLabel: "Pipeline sync",
    icon: Salesforce,
  },
  {
    name: "Jira",
    description: "Mirror sprint, epic, and release details into delivery reports.",
    category: "Developer",
    status: "Available",
    syncLabel: "Sprint tracking",
    icon: Jira,
  },
  {
    name: "Discord",
    description: "Route community notifications and moderation events into queues.",
    category: "Communication",
    status: "Available",
    syncLabel: "Community alerts",
    icon: Discord,
  },
  {
    name: "Mailchimp",
    description: "Monitor campaign sends, audiences, and lifecycle email activity.",
    category: "Marketing",
    status: "Beta",
    syncLabel: "Campaign sync",
    icon: Mailchimp,
  },
]
