import { Image, Paperclip, Plus, Send, Smile } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Textarea } from "@/components/ui/textarea"

type MessageComposerProps = {
  value: string
  onValueChange: (value: string) => void
  onSend: () => void
}

const actions = [
  { label: "Add item", icon: Plus },
  { label: "Add image", icon: Image },
  { label: "Attach file", icon: Paperclip },
  { label: "Add emoji", icon: Smile },
]

export function MessageComposer({
  value,
  onValueChange,
  onSend,
}: MessageComposerProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSend()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shrink-0 border-t bg-card px-4 py-4"
      aria-label="Message composer"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-lg border bg-background p-3 shadow-sm">
        <Textarea
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder="Type a message..."
          className="border-0 bg-transparent dark:bg-transparent px-0 shadow-none focus-visible:ring-0 resize-none"
        />
        <div className="flex items-center gap-1">
          {actions.map((action) => {
            const Icon = action.icon

            return (
              <Tooltip key={action.label}>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={action.label}
                  >
                    <Icon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{action.label}</TooltipContent>
              </Tooltip>
            )
          })}

          <Separator orientation="vertical" className="mx-2 h-5" />
          <Button type="submit" size="sm" className="chat-composer-send ms-auto">
            Send
            <Send data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </form>
  )
}
