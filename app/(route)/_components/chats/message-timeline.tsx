import { ChatConversation } from "./chat-data"
import { ChatMessageRow } from "./chat-message-row"
import { DateDivider } from "./date-divider"
import { ScrollArea } from "@/components/ui/scroll-area"

type MessageTimelineProps = {
  conversation: ChatConversation
}

export function MessageTimeline({ conversation }: MessageTimelineProps) {
  return (
    <ScrollArea className="min-h-0 flex-1">
      <div className="mx-auto flex w-full flex-col gap-5 px-4 py-6 sm:px-6">
        <DateDivider label={conversation.dayLabel} />
        {conversation.messages.map((message) => (
          <ChatMessageRow
            key={message.id}
            message={message}
            participant={conversation.participant}
          />
        ))}
      </div>
    </ScrollArea>
  )
}
