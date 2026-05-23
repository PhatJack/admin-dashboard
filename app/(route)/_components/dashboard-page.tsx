"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts"
import { ArrowDownRight, ArrowUpRight, Bell, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DashboardActivity,
  DashboardMetric,
  DashboardTabData,
  dashboardTabs,
} from "@/app/constant/dashboard"

const trendChartConfig = {
  primary: {
    label: "Primary",
    color: "var(--chart-1)",
  },
  secondary: {
    label: "Secondary",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const segmentChartConfig = {
  value: {
    label: "Share",
  },
  direct: {
    label: "Direct",
    color: "var(--chart-1)",
  },
  organic: {
    label: "Organic",
    color: "var(--chart-2)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-3)",
  },
  social: {
    label: "Social",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export function DashboardPage() {
  const [overview, analytics, reports, notifications] = dashboardTabs

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-normal">
            Dashboard
          </h1>
        </div>
      </div>
      <Tabs defaultValue="overview" className="gap-4">
        <TabsList className="justify-start w-fit">
          {dashboardTabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <OverviewPanel tab={overview} />
        </TabsContent>
        <TabsContent value="analytics" className="mt-0">
          <AnalyticsPanel tab={analytics} />
        </TabsContent>
        <TabsContent value="reports" className="mt-0">
          <ReportsPanel tab={reports} />
        </TabsContent>
        <TabsContent value="notifications" className="mt-0">
          <NotificationsPanel tab={notifications} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TabIntro({ tab }: { tab: DashboardTabData }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-lg font-medium tracking-normal">{tab.title}</h2>
      <p className="text-sm text-muted-foreground">{tab.description}</p>
    </div>
  )
}

function MetricCard({ metric }: { metric: DashboardMetric }) {
  const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight

  return (
    <Card>
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between gap-3">
          <CardDescription>{metric.label}</CardDescription>
          <Badge variant={metric.trend === "up" ? "secondary" : "outline"}>
            <TrendIcon data-icon="inline-start" />
            {metric.change}
          </Badge>
        </div>
        <CardTitle className="text-2xl">{metric.value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{metric.detail}</p>
      </CardContent>
    </Card>
  )
}

function TrendAreaChart({ tab }: { tab: DashboardTabData }) {
  return (
    <ChartContainer config={trendChartConfig} className="h-full w-full">
      <AreaChart
        accessibilityLayer
        data={tab.trend}
        margin={{ left: 0, right: 12 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} width={36} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="secondary"
          type="natural"
          fill="var(--color-secondary)"
          fillOpacity={0.18}
          stroke="var(--color-secondary)"
          stackId="a"
        />
        <Area
          dataKey="primary"
          type="natural"
          fill="var(--color-primary)"
          fillOpacity={0.28}
          stroke="var(--color-primary)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}

function SegmentPieChart({ tab }: { tab: DashboardTabData }) {
  return (
    <ChartContainer config={segmentChartConfig} className="mx-auto h-72 w-full">
      <PieChart accessibilityLayer>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={tab.segments}
          dataKey="value"
          nameKey="name"
          innerRadius={58}
          outerRadius={92}
          paddingAngle={2}
        >
          {tab.segments.map((segment) => (
            <Cell key={segment.name} fill={segment.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}

function VolumeBarChart({ tab }: { tab: DashboardTabData }) {
  return (
    <ChartContainer config={trendChartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={tab.trend}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} width={36} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="primary"
          fill="var(--color-primary)"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="secondary"
          fill="var(--color-secondary)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  )
}

function ActivityTable({ activities }: { activities: DashboardActivity[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.title}>
            <TableCell className="font-medium">{activity.title}</TableCell>
            <TableCell>{activity.owner}</TableCell>
            <TableCell>
              <Badge variant="outline">{activity.status}</Badge>
            </TableCell>
            <TableCell className="text-right font-mono">
              {activity.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function SegmentList({ tab }: { tab: DashboardTabData }) {
  return (
    <div className="grid gap-2">
      {tab.segments.map((segment) => (
        <div
          key={segment.name}
          className="flex items-center justify-between gap-3 text-sm"
        >
          <div className="flex items-center gap-2">
            <span
              className="size-2 rounded-sm"
              style={{ backgroundColor: segment.fill }}
            />
            <span>{segment.name}</span>
          </div>
          <span className="font-mono text-muted-foreground tabular-nums">
            {segment.value}%
          </span>
        </div>
      ))}
    </div>
  )
}

function OverviewPanel({ tab }: { tab: DashboardTabData }) {
  return (
    <div className="flex flex-col gap-4">
      <TabIntro tab={tab} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tab.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Trend performance</CardTitle>
            <CardDescription>
              Primary and secondary business signals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TrendAreaChart tab={tab} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Channel share</CardTitle>
            <CardDescription>Acquisition distribution snapshot.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <SegmentPieChart tab={tab} />
            <SegmentList tab={tab} />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Latest activity</CardTitle>
          <CardDescription>Operational work currently moving.</CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityTable activities={tab.activities} />
        </CardContent>
      </Card>
    </div>
  )
}

function AnalyticsPanel({ tab }: { tab: DashboardTabData }) {
  return (
    <div className="flex flex-col gap-4">
      <TabIntro tab={tab} />
      <div className="grid gap-4 xl:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.6fr)]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {tab.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Engagement volume</CardTitle>
            <CardDescription>
              A chart-first view of traffic and event movement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VolumeBarChart tab={tab} />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {tab.segments.map((segment) => (
          <Card key={segment.name}>
            <CardHeader>
              <CardDescription>{segment.name}</CardDescription>
              <CardTitle className="text-3xl">{segment.value}%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-2 rounded-sm bg-muted">
                <div
                  className="h-full rounded-sm"
                  style={{
                    width: `${segment.value}%`,
                    backgroundColor: segment.fill,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ReportsPanel({ tab }: { tab: DashboardTabData }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
      <div className="flex flex-col gap-4">
        <TabIntro tab={tab} />
        <Card>
          <CardHeader>
            <CardTitle>Report operations</CardTitle>
            <CardDescription>
              Scheduled exports, delivery states, and audit jobs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityTable activities={tab.activities} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Delivery trend</CardTitle>
            <CardDescription>Successful exports compared with failures.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trendChartConfig} className="h-64 w-full">
              <LineChart accessibilityLayer data={tab.trend}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  dataKey="primary"
                  type="monotone"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="secondary"
                  type="monotone"
                  stroke="var(--color-secondary)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
        {tab.metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText data-icon="inline-start" />
                <CardDescription>{metric.label}</CardDescription>
              </div>
              <CardTitle className="text-2xl">{metric.value}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground">
                {metric.detail}
              </span>
              <Badge variant={metric.trend === "up" ? "secondary" : "outline"}>
                {metric.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function NotificationsPanel({ tab }: { tab: DashboardTabData }) {
  return (
    <div className="flex flex-col gap-4">
      <TabIntro tab={tab} />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
        <Card>
          <CardHeader>
            <CardTitle>Notification timeline</CardTitle>
            <CardDescription>
              Recent message work grouped by owner and status.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {tab.activities.map((activity, index) => (
              <div key={activity.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="flex size-8 items-center justify-center rounded-full border bg-background">
                    <Bell data-icon="inline-start" />
                  </span>
                  {index < tab.activities.length - 1 && (
                    <Separator orientation="vertical" className="min-h-10 mx-auto" />
                  )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{activity.title}</p>
                    <Badge variant="outline">{activity.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.owner} · {activity.value}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Channel mix</CardTitle>
            <CardDescription>Where messages are being sent.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <SegmentPieChart tab={tab} />
            <SegmentList tab={tab} />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tab.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </div>
  )
}
