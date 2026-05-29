import { ChatConversation } from "./chat-data"
import { ChatSearch } from "./chat-search"
import { ConversationList } from "./conversation-list"

type ChatListPanelProps = {
  conversations: ChatConversation[]
  selectedConversationId: string
  searchQuery: string
  onSearchChange: (value: string) => void
  onSelectConversation: (conversationId: string) => void
}

export function ChatListPanel({
  conversations,
  selectedConversationId,
  searchQuery,
  onSearchChange,
  onSelectConversation,
}: ChatListPanelProps) {
  return (
    <aside className="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div className="flex shrink-0 flex-col justify-center gap-3 border-b px-4 h-16">
        <ChatSearch value={searchQuery} onValueChange={onSearchChange} />
      </div>

      <ConversationList
        conversations={conversations}
        selectedConversationId={selectedConversationId}
        onSelectConversation={onSelectConversation}
      />
    </aside>
  )
}
