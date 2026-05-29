import { ChatConversation } from "./chat-data"
import { ChatListPanel } from "./chat-list-panel"
import { ChatThreadPanel } from "./chat-thread-panel"
import { cn } from "@/lib/utils"

type ChatShellProps = {
  conversations: ChatConversation[]
  selectedConversation?: ChatConversation
  selectedConversationId: string
  searchQuery: string
  draftMessage: string
  showThreadOnMobile: boolean
  onSearchChange: (value: string) => void
  onDraftMessageChange: (value: string) => void
  onSelectConversation: (conversationId: string) => void
  onBackToList: () => void
  onSendMessage: () => void
}

export function ChatShell({
  conversations,
  selectedConversation,
  selectedConversationId,
  searchQuery,
  draftMessage,
  showThreadOnMobile,
  onSearchChange,
  onDraftMessageChange,
  onSelectConversation,
  onBackToList,
  onSendMessage,
}: ChatShellProps) {
  return (
    <div
      data-chat-shell
      className="flex h-[calc(100vh-3.5rem)] min-h-[620px] bg-background"
    >
      <div
        className={cn(
          "min-w-0 shrink-0 basis-full border-r bg-card md:flex md:basis-80 lg:basis-88",
          showThreadOnMobile ? "hidden" : "flex"
        )}
      >
        <ChatListPanel
          conversations={conversations}
          selectedConversationId={selectedConversationId}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onSelectConversation={onSelectConversation}
        />
      </div>

      <div
        className={cn(
          "min-w-0 flex-1 bg-background md:flex",
          showThreadOnMobile ? "flex" : "hidden"
        )}
      >
        {selectedConversation ? (
          <ChatThreadPanel
            conversation={selectedConversation}
            draftMessage={draftMessage}
            onBackToList={onBackToList}
            onDraftMessageChange={onDraftMessageChange}
            onSendMessage={onSendMessage}
          />
        ) : (
          <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
            Select a conversation to start chatting.
          </div>
        )}
      </div>
    </div>
  )
}
