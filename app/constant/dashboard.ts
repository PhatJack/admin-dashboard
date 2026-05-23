export type DashboardTabKey =
  | "overview"
  | "analytics"
  | "reports"
  | "notifications"

export type DashboardMetric = {
  label: string
  value: string
  change: string
  trend: "up" | "down"
  detail: string
}

export type TrendPoint = {
  label: string
  primary: number
  secondary: number
}

export type SegmentPoint = {
  name: string
  value: number
  fill: string
}

export type DashboardActivity = {
  title: string
  owner: string
  status: string
  value: string
}

export type DashboardTabData = {
  key: DashboardTabKey
  title: string
  description: string
  metrics: DashboardMetric[]
  trend: TrendPoint[]
  segments: SegmentPoint[]
  activities: DashboardActivity[]
}

export const dashboardTabs: DashboardTabData[] = [
  {
    key: "overview",
    title: "Overview",
    description: "A quick read on revenue, active users, and conversion.",
    metrics: [
      {
        label: "Revenue",
        value: "$128.4K",
        change: "+12.5%",
        trend: "up",
        detail: "from last month",
      },
      {
        label: "Active users",
        value: "24,892",
        change: "+8.2%",
        trend: "up",
        detail: "weekly active",
      },
      {
        label: "Conversion",
        value: "6.84%",
        change: "+1.1%",
        trend: "up",
        detail: "checkout rate",
      },
      {
        label: "Open tickets",
        value: "142",
        change: "-4.7%",
        trend: "down",
        detail: "support queue",
      },
    ],
    trend: [
      { label: "Jan", primary: 82, secondary: 48 },
      { label: "Feb", primary: 97, secondary: 54 },
      { label: "Mar", primary: 111, secondary: 63 },
      { label: "Apr", primary: 104, secondary: 69 },
      { label: "May", primary: 128, secondary: 74 },
      { label: "Jun", primary: 146, secondary: 82 },
    ],
    segments: [
      { name: "Direct", value: 42, fill: "var(--chart-1)" },
      { name: "Organic", value: 31, fill: "var(--chart-2)" },
      { name: "Referral", value: 18, fill: "var(--chart-3)" },
      { name: "Social", value: 9, fill: "var(--chart-4)" },
    ],
    activities: [
      {
        title: "Enterprise onboarding",
        owner: "Success team",
        status: "In progress",
        value: "$38.2K",
      },
      {
        title: "Checkout optimization",
        owner: "Growth",
        status: "Live",
        value: "+3.1%",
      },
      {
        title: "Support backlog sweep",
        owner: "Operations",
        status: "Queued",
        value: "42 left",
      },
    ],
  },
  {
    key: "analytics",
    title: "Analytics",
    description: "Behavior signals across acquisition and engagement.",
    metrics: [
      {
        label: "Sessions",
        value: "318K",
        change: "+18.4%",
        trend: "up",
        detail: "last 30 days",
      },
      {
        label: "Bounce rate",
        value: "32.1%",
        change: "-2.8%",
        trend: "down",
        detail: "site average",
      },
      {
        label: "Avg. duration",
        value: "4m 18s",
        change: "+22s",
        trend: "up",
        detail: "per session",
      },
      {
        label: "Event volume",
        value: "1.9M",
        change: "+11.6%",
        trend: "up",
        detail: "tracked events",
      },
    ],
    trend: [
      { label: "Mon", primary: 42, secondary: 28 },
      { label: "Tue", primary: 58, secondary: 34 },
      { label: "Wed", primary: 71, secondary: 39 },
      { label: "Thu", primary: 66, secondary: 45 },
      { label: "Fri", primary: 84, secondary: 52 },
      { label: "Sat", primary: 92, secondary: 49 },
    ],
    segments: [
      { name: "Product", value: 38, fill: "var(--chart-1)" },
      { name: "Pricing", value: 24, fill: "var(--chart-2)" },
      { name: "Docs", value: 21, fill: "var(--chart-3)" },
      { name: "Blog", value: 17, fill: "var(--chart-4)" },
    ],
    activities: [
      {
        title: "Product tour completions",
        owner: "Activation",
        status: "Rising",
        value: "68%",
      },
      {
        title: "Paid campaign cohort",
        owner: "Marketing",
        status: "Review",
        value: "14.2K",
      },
      {
        title: "Search intent cluster",
        owner: "Insights",
        status: "New",
        value: "9 terms",
      },
    ],
  },
  {
    key: "reports",
    title: "Reports",
    description: "Scheduled exports, report quality, and delivery health.",
    metrics: [
      {
        label: "Reports sent",
        value: "1,284",
        change: "+9.8%",
        trend: "up",
        detail: "this month",
      },
      {
        label: "Delivery rate",
        value: "98.7%",
        change: "+0.6%",
        trend: "up",
        detail: "email exports",
      },
      {
        label: "Failed jobs",
        value: "17",
        change: "-23.4%",
        trend: "down",
        detail: "scheduled runs",
      },
      {
        label: "Data freshness",
        value: "11m",
        change: "-4m",
        trend: "down",
        detail: "median delay",
      },
    ],
    trend: [
      { label: "W1", primary: 164, secondary: 12 },
      { label: "W2", primary: 192, secondary: 10 },
      { label: "W3", primary: 218, secondary: 8 },
      { label: "W4", primary: 246, secondary: 7 },
      { label: "W5", primary: 228, secondary: 9 },
      { label: "W6", primary: 264, secondary: 6 },
    ],
    segments: [
      { name: "PDF", value: 44, fill: "var(--chart-1)" },
      { name: "CSV", value: 29, fill: "var(--chart-2)" },
      { name: "Sheets", value: 19, fill: "var(--chart-3)" },
      { name: "API", value: 8, fill: "var(--chart-4)" },
    ],
    activities: [
      {
        title: "Finance close package",
        owner: "Finance",
        status: "Scheduled",
        value: "Fri",
      },
      {
        title: "Regional sales digest",
        owner: "Revenue ops",
        status: "Delivered",
        value: "98%",
      },
      {
        title: "Data warehouse audit",
        owner: "Platform",
        status: "Running",
        value: "64%",
      },
    ],
  },
  {
    key: "notifications",
    title: "Notifications",
    description: "Message delivery, alert volume, and user engagement.",
    metrics: [
      {
        label: "Sent",
        value: "842K",
        change: "+15.9%",
        trend: "up",
        detail: "all channels",
      },
      {
        label: "Open rate",
        value: "41.6%",
        change: "+3.4%",
        trend: "up",
        detail: "push and email",
      },
      {
        label: "Muted users",
        value: "3.2%",
        change: "-0.9%",
        trend: "down",
        detail: "opt-out rate",
      },
      {
        label: "Critical alerts",
        value: "26",
        change: "+5",
        trend: "up",
        detail: "needs review",
      },
    ],
    trend: [
      { label: "08:00", primary: 54, secondary: 21 },
      { label: "10:00", primary: 76, secondary: 29 },
      { label: "12:00", primary: 118, secondary: 47 },
      { label: "14:00", primary: 104, secondary: 41 },
      { label: "16:00", primary: 132, secondary: 58 },
      { label: "18:00", primary: 88, secondary: 34 },
    ],
    segments: [
      { name: "Email", value: 48, fill: "var(--chart-1)" },
      { name: "Push", value: 27, fill: "var(--chart-2)" },
      { name: "In-app", value: 18, fill: "var(--chart-3)" },
      { name: "SMS", value: 7, fill: "var(--chart-4)" },
    ],
    activities: [
      {
        title: "Billing alert template",
        owner: "Lifecycle",
        status: "A/B test",
        value: "+7%",
      },
      {
        title: "Incident broadcast",
        owner: "Reliability",
        status: "Ready",
        value: "4 zones",
      },
      {
        title: "Weekly summary",
        owner: "Product",
        status: "Draft",
        value: "28K",
      },
    ],
  },
]
