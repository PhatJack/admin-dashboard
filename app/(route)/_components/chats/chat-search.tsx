import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

type ChatSearchProps = {
  value: string
  onValueChange: (value: string) => void
}

export function ChatSearch({ value, onValueChange }: ChatSearchProps) {
  return (
    <div className="relative">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder="Search chats..."
        className="h-9 ps-8"
      />
    </div>
  )
}
