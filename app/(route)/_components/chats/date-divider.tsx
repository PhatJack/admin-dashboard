type DateDividerProps = {
  label: string
}

export function DateDivider({ label }: DateDividerProps) {
  return (
    <div className="flex justify-center">
      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        {label}
      </span>
    </div>
  )
}
