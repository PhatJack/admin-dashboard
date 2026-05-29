import { ChatConversation } from "./chat-data"
import { ConversationListItem } from "./conversation-list-item"
import { ScrollArea } from "@/components/ui/scroll-area"

type ConversationListProps = {
  conversations: ChatConversation[]
  selectedConversationId: string
  onSelectConversation: (conversationId: string) => void
}

export function ConversationList({
  conversations,
  selectedConversationId,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="flex flex-col overflow-hidden">
        {conversations.length ? (
          conversations.map((conversation) => (
            <ConversationListItem
              key={conversation.id}
              conversation={conversation}
              isActive={conversation.id === selectedConversationId}
              onSelect={() => onSelectConversation(conversation.id)}
            />
          ))
        ) : (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">
            No chats found.
          </div>
        )}
      </div>
    </div>
  )
}
