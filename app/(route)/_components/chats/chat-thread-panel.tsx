import { ChatConversation } from "./chat-data"
import { ChatThreadHeader } from "./chat-thread-header"
import { MessageComposer } from "./message-composer"
import { MessageTimeline } from "./message-timeline"

type ChatThreadPanelProps = {
  conversation: ChatConversation
  draftMessage: string
  onBackToList: () => void
  onDraftMessageChange: (value: string) => void
  onSendMessage: () => void
}

export function ChatThreadPanel({
  conversation,
  draftMessage,
  onBackToList,
  onDraftMessageChange,
  onSendMessage,
}: ChatThreadPanelProps) {
  return (
    <section className="flex min-w-0 flex-1 flex-col">
      <ChatThreadHeader
        participant={conversation.participant}
        onBackToList={onBackToList}
      />
      <MessageTimeline conversation={conversation} />
      <MessageComposer
        value={draftMessage}
        onValueChange={onDraftMessageChange}
        onSend={onSendMessage}
      />
    </section>
  )
}
