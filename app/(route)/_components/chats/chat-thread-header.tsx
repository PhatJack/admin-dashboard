import { ArrowLeft, MoreVertical, Phone, Video } from "lucide-react"

import { ChatParticipant } from "./chat-data"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type ChatThreadHeaderProps = {
  participant: ChatParticipant
  onBackToList: () => void
}

const actions = [
  { label: "Start call", icon: Phone },
  { label: "Start video call", icon: Video },
  { label: "More options", icon: MoreVertical },
]

export function ChatThreadHeader({
  participant,
  onBackToList,
}: ChatThreadHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b bg-card px-4">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onBackToList}
        aria-label="Back to chats"
      >
        <ArrowLeft />
      </Button>

      <Avatar size="lg">
        {participant.avatarUrl ? (
          <AvatarImage src={participant.avatarUrl} alt={participant.name} />
        ) : null}
        <AvatarFallback>{participant.initials}</AvatarFallback>
        {participant.online ? <AvatarBadge /> : null}
      </Avatar>

      <div className="min-w-0 flex-1">
        <h2 className="truncate text-sm font-semibold tracking-normal">
          {participant.name}
        </h2>
        <p className="truncate text-xs text-muted-foreground">
          {participant.status}
        </p>
      </div>

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
      </div>
    </header>
  )
}
