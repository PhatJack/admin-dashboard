import { ChatConversation } from "./chat-data"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type ConversationListItemProps = {
  conversation: ChatConversation
  isActive: boolean
  onSelect: () => void
}

export function ConversationListItem({
  conversation,
  isActive,
  onSelect,
}: ConversationListItemProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? "true" : undefined}
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 px-4 py-3 text-start transition-colors hover:bg-muted/70",
        isActive && "bg-muted"
      )}
    >
      <Avatar size="lg" className="mt-0.5">
        {conversation.participant.avatarUrl ? (
          <AvatarImage
            src={conversation.participant.avatarUrl}
            alt={conversation.participant.name}
          />
        ) : null}
        <AvatarFallback>{conversation.participant.initials}</AvatarFallback>
        {conversation.participant.online ? <AvatarBadge /> : null}
      </Avatar>

      <span className="flex min-w-0 flex-1 flex-col gap-1 overflow-hidden">
        <span className="flex min-w-0 items-center justify-between gap-2">
          <span className="truncate text-sm font-medium">
            {conversation.participant.name}
          </span>
          <span className="shrink-0 text-xs text-muted-foreground">
            {conversation.timeLabel}
          </span>
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate text-xs text-muted-foreground">
            {conversation.lastMessage}
          </span>
          {conversation.unreadCount ? (
            <Badge className="ms-auto h-5 min-w-5 shrink-0 rounded-full px-1.5 text-xs">
              {conversation.unreadCount}
            </Badge>
          ) : null}
        </span>
      </span>
    </button>
  )
}
