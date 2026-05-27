import * as React from "react"

import {
  AppIntegration,
  AppIntegrationStatus,
  appIntegrations,
} from "@/app/constant/apps"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GoogleAnalytics } from "@thesvg/react"

const statusVariant: Record<
  AppIntegrationStatus,
  React.ComponentProps<typeof Badge>["variant"]
> = {
  Connected: "secondary",
  Available: "outline",
  Beta: "default",
}

const actionLabel: Record<AppIntegrationStatus, string> = {
  Connected: "Configure",
  Available: "Connect",
  Beta: "Request access",
}

export function AppsPage() {
  const connectedApps = appIntegrations.filter(
    (app) => app.status === "Connected"
  ).length
  const betaApps = appIntegrations.filter((app) => app.status === "Beta").length

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-normal">Apps</h1>
        <p className="text-sm text-muted-foreground">
          Connect the tools your team already uses for reporting, alerts, and
          operations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <AppsSummaryCard
          label="Integrations"
          value={appIntegrations.length.toString()}
        />
        <AppsSummaryCard label="Connected" value={connectedApps.toString()} />
        <AppsSummaryCard label="Beta access" value={betaApps.toString()} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {appIntegrations.map((app) => (
          <AppIntegrationCard key={app.name} app={app} />
        ))}
      </div>
    </div>
  )
}

function AppsSummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl">{value}</CardTitle>
      </CardHeader>
    </Card>
  )
}

function AppIntegrationCard({ app }: { app: AppIntegration }) {
  const Icon = app.icon

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Icon aria-hidden="true" className="size-6" />
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <CardTitle className="truncate">{app.name}</CardTitle>
              <CardDescription>{app.syncLabel}</CardDescription>
            </div>
          </div>
          <Badge variant={statusVariant[app.status]}>{app.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{app.description}</p>
        <Badge variant="outline">{app.category}</Badge>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline" size="sm" disabled>
          {actionLabel[app.status]}
        </Button>
      </CardFooter>
    </Card>
  )
}
