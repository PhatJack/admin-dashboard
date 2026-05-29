import { CheckCheck } from "lucide-react"

import { AttachmentBubble } from "./attachment-bubble"
import { ChatMessageItem, ChatParticipant } from "./chat-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChatMessage, MessageBubble } from "@/components/ui/message-bubble"
import { cn } from "@/lib/utils"

type ChatMessageRowProps = {
  message: ChatMessageItem
  participant: ChatParticipant
}

export function ChatMessageRow({ message, participant }: ChatMessageRowProps) {
  const isSent = message.sender === "me"

  return (
    <div
      className={cn(
        "flex w-full items-end gap-2",
        isSent ? "justify-end" : "justify-start"
      )}
    >
      {!isSent ? (
        <Avatar size="sm" className="mb-6">
          {participant.avatarUrl ? (
            <AvatarImage src={participant.avatarUrl} alt={participant.name} />
          ) : null}
          <AvatarFallback>{participant.initials}</AvatarFallback>
        </Avatar>
      ) : null}

      <div
        className={cn(
          "flex max-w-[min(34rem,82vw)] flex-col gap-1",
          isSent ? "items-end" : "items-start"
        )}
      >
        {message.attachment ? (
          <MessageBubble
            message=""
            variant={isSent ? "sent" : "received"}
            className="max-w-full p-0"
          >
            <AttachmentBubble attachment={message.attachment} />
          </MessageBubble>
        ) : (
          <ChatMessage
            messages={message.messages}
            timestamp={message.timestamp}
            variant={isSent ? "sent" : "received"}
            className="max-w-full"
          />
        )}

        {message.attachment ? (
          <MessageMeta
            timestamp={message.timestamp}
            status={message.status}
            isSent={isSent}
          />
        ) : message.status ? (
          <span className="flex items-center gap-1 px-2 text-xs text-muted-foreground">
            {message.status}
            <CheckCheck aria-hidden="true" className="size-3" />
          </span>
        ) : null}
      </div>
    </div>
  )
}

function MessageMeta({
  timestamp,
  status,
  isSent,
}: {
  timestamp: string
  status?: string
  isSent: boolean
}) {
  return (
    <span
      className={cn(
        "mt-1 flex items-center gap-1 px-2 text-xs text-muted-foreground",
        isSent && "self-end"
      )}
    >
      {timestamp}
      {status ? (
        <>
          <span aria-hidden="true">-</span>
          <span>{status}</span>
          <CheckCheck aria-hidden="true" className="size-3" />
        </>
      ) : null}
    </span>
  )
}
