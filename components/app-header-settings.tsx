"use client"

import * as React from "react"
import { ArrowLeftRight, Check, RotateCcw } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useDirectionSettings } from "@/components/ui/direction"
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type ThemeOption = "system" | "light" | "dark"
type SidebarOption = "inset" | "floating" | "sidebar"
type LayoutOption = "default" | "compact" | "full"
type DirectionOption = "ltr" | "rtl"

type SettingOption<T extends string> = {
  value: T
  label: string
}

const THEME_OPTIONS = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
] satisfies SettingOption<ThemeOption>[]

const SIDEBAR_OPTIONS = [
  { value: "inset", label: "Inset" },
  { value: "floating", label: "Floating" },
  { value: "sidebar", label: "Sidebar" },
] satisfies SettingOption<SidebarOption>[]

const LAYOUT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "compact", label: "Compact" },
  { value: "full", label: "Full layout" },
] satisfies SettingOption<LayoutOption>[]

const DIRECTION_OPTIONS = [
  { value: "ltr", label: "Left to Right" },
  { value: "rtl", label: "Right to Left" },
] satisfies SettingOption<DirectionOption>[]

const DEFAULT_SETTINGS = {
  theme: "system",
  sidebar: "floating",
  layout: "default",
  direction: "ltr",
} satisfies {
  theme: ThemeOption
  sidebar: SidebarOption
  layout: LayoutOption
  direction: DirectionOption
}

const SettingCard = React.memo(function SettingCard({
  children,
  className,
  isSelected,
  label,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  isSelected?: boolean
  label: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex w-full flex-col gap-2 rounded-xl border p-2 text-start transition-all duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        isSelected
          ? "border-foreground/80 bg-muted/40 shadow-sm"
          : "border-border/80 bg-background hover:border-foreground/20 hover:bg-muted/30",
        className
      )}
    >
      <div className="relative aspect-[1.55] overflow-hidden rounded-xl border border-border/70 bg-linear-to-br from-slate-100 via-background to-slate-50 p-2 shadow-inner dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        {children}
      </div>
      {isSelected ? (
        <span className="absolute -top-1.5 -end-1.5 inline-flex size-5 items-center justify-center rounded-full bg-slate-950 text-white shadow-md dark:bg-white dark:text-slate-950">
          <Check className="size-3.5" />
        </span>
      ) : null}
      <span className="text-center text-sm font-medium text-foreground">
        {label}
      </span>
    </button>
  )
})

const ThemePreview = React.memo(function ThemePreview({
  option,
}: {
  option: ThemeOption
}) {
  return (
    <div
      className={cn(
        "flex h-full rounded-lg border p-2",
        option === "dark"
          ? "border-slate-700 bg-slate-950 text-slate-100"
          : option === "light"
            ? "border-slate-200 bg-white text-slate-900"
            : "border-slate-300 bg-slate-50 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
      )}
    >
      <div className="flex w-5 flex-col gap-1.5">
        <div className="size-2 rounded-full bg-current/15" />
        <div className="h-1.5 rounded-full bg-current/30" />
        <div className="h-1.5 w-3 rounded-full bg-current/20" />
      </div>
      <div className="ms-2 flex-1 rounded-md border border-current/10 bg-current/5 p-2">
        <div className="flex items-start gap-2">
          <div className="size-3 rounded-full bg-current/25" />
          <div className="h-3 w-8 rounded-full bg-current/20" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-6 rounded-md bg-current/10" />
          <div className="h-6 rounded-md bg-current/10" />
        </div>
      </div>
    </div>
  )
})

const SidebarPreview = React.memo(function SidebarPreview({
  option,
}: {
  option: SidebarOption
}) {
  return (
    <div className="flex h-full rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950">
      <div
        className={cn(
          "rounded-md bg-slate-200/80 dark:bg-slate-800",
          option === "sidebar" ? "w-6" : option === "floating" ? "w-8" : "w-0"
        )}
      />
      <div className="ms-2 flex flex-1 flex-col gap-1.5">
        <div className="h-2 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div className="h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="mt-1 flex flex-1 gap-1.5">
          <div
            className={cn(
              "rounded-md bg-slate-200 dark:bg-slate-800",
              option === "inset" ? "w-1/2" : "w-1/4"
            )}
          />
          <div className="flex-1 rounded-md bg-slate-100 dark:bg-slate-900" />
        </div>
      </div>
    </div>
  )
})

const LayoutPreview = React.memo(function LayoutPreview({
  option,
}: {
  option: LayoutOption
}) {
  return (
    <div className="flex h-full rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950">
      <div
        className={cn(
          "rounded-md bg-slate-200 dark:bg-slate-800",
          option === "default" ? "w-6" : option === "compact" ? "w-4" : "w-0"
        )}
      />
      <div className="ms-2 flex-1">
        <div className="flex items-start gap-2">
          <div className="h-2 w-10 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="ms-auto size-6 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="col-span-2 h-8 rounded-md bg-slate-100 dark:bg-slate-900" />
        </div>
      </div>
    </div>
  )
})

const DirectionPreview = React.memo(function DirectionPreview({
  direction,
}: {
  direction: DirectionOption
}) {
  return (
    <div className="flex h-full rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950">
      <div
        className={cn(
          "flex size-7 items-center justify-center rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
          direction === "rtl" && "ms-auto"
        )}
      >
        <ArrowLeftRight className="size-3.5" />
      </div>
      <div className="ms-2 flex flex-1 flex-col gap-1.5">
        <div className="h-1.5 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />
        <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="h-1.5 w-4/5 rounded-full bg-slate-100 dark:bg-slate-900" />
      </div>
    </div>
  )
})

function SettingSection<T extends string>({
  columns = 3,
  onReset,
  onValueChange,
  options,
  renderPreview,
  title,
  value,
}: {
  columns?: 2 | 3
  onReset?: () => void
  onValueChange: (value: T) => void
  options: readonly SettingOption<T>[]
  renderPreview: (value: T) => React.ReactNode
  title: string
  value: T
}) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2 px-1">
        <h2 className="text-sm font-semibold text-muted-foreground">
          {title}
        </h2>
        {onReset ? (
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            className="text-muted-foreground"
            aria-label={`Reset ${title.toLowerCase()}`}
            onClick={onReset}
          >
            <RotateCcw className="size-3.5" />
            <span className="sr-only">Reset {title.toLowerCase()}</span>
          </Button>
        ) : null}
      </div>
      <div
        className={cn(
          "grid gap-3",
          columns === 2 ? "grid-cols-2" : "grid-cols-3"
        )}
      >
        {options.map((option) => (
          <SettingCard
            key={option.value}
            label={option.label}
            isSelected={value === option.value}
            onClick={() => onValueChange(option.value)}
          >
            {renderPreview(option.value)}
          </SettingCard>
        ))}
      </div>
    </section>
  )
}

function SettingsSheetContent() {
  const { theme, setTheme } = useTheme()
  const { direction, setDirection } = useDirectionSettings()
  const [sidebar, setSidebar] = React.useState<SidebarOption>("floating")
  const [layout, setLayout] = React.useState<LayoutOption>("default")

  const currentTheme = (theme ?? "system") as ThemeOption

  const resetAll = React.useCallback(() => {
    setTheme(DEFAULT_SETTINGS.theme)
    setSidebar(DEFAULT_SETTINGS.sidebar)
    setLayout(DEFAULT_SETTINGS.layout)
    setDirection(DEFAULT_SETTINGS.direction)
  }, [setDirection, setTheme])

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <SheetHeader className="gap-1 border-b px-5 py-4">
        <SheetTitle>Theme Settings</SheetTitle>
        <SheetDescription>
          Adjust the appearance and layout to suit your preferences.
        </SheetDescription>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-6">
          <SettingSection
            title="Theme"
            options={THEME_OPTIONS}
            value={currentTheme}
            onValueChange={setTheme}
            onReset={() => setTheme(DEFAULT_SETTINGS.theme)}
            renderPreview={(option) => <ThemePreview option={option} />}
          />

          <SettingSection
            title="Sidebar"
            options={SIDEBAR_OPTIONS}
            value={sidebar}
            onValueChange={setSidebar}
            onReset={() => setSidebar(DEFAULT_SETTINGS.sidebar)}
            renderPreview={(option) => <SidebarPreview option={option} />}
          />

          <SettingSection
            title="Layout"
            options={LAYOUT_OPTIONS}
            value={layout}
            onValueChange={setLayout}
            renderPreview={(option) => <LayoutPreview option={option} />}
          />

          <SettingSection
            title="Direction"
            columns={2}
            options={DIRECTION_OPTIONS}
            value={direction}
            onValueChange={setDirection}
            renderPreview={(option) => <DirectionPreview direction={option} />}
          />
        </div>
      </div>

      <div className="border-t px-4 py-4">
        <Button
          type="button"
          variant="destructive"
          className="h-11 w-full rounded-xl text-sm font-semibold"
          onClick={resetAll}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export { SettingsSheetContent }
