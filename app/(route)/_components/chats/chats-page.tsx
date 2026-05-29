"use client"

import * as React from "react"

import {
  ChatConversation,
  ChatMessageItem,
  chatConversations,
} from "./chat-data"
import { ChatShell } from "./chat-shell"

function formatMessageTime(date: Date) {
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date)
}

export function ChatsPage() {
  const [conversations, setConversations] =
    React.useState<ChatConversation[]>(chatConversations)
  const [selectedConversationId, setSelectedConversationId] = React.useState(
    chatConversations[0]?.id ?? ""
  )
  const [searchQuery, setSearchQuery] = React.useState("")
  const [draftMessage, setDraftMessage] = React.useState("")
  const [showThreadOnMobile, setShowThreadOnMobile] = React.useState(false)

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId
  )

  const filteredConversations = conversations.filter((conversation) => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) return true

    return `${conversation.participant.name} ${conversation.lastMessage}`
      .toLowerCase()
      .includes(query)
  })

  function handleSelectConversation(conversationId: string) {
    setSelectedConversationId(conversationId)
    setShowThreadOnMobile(true)
  }

  function handleSendMessage() {
    const trimmedMessage = draftMessage.trim()

    if (!trimmedMessage || !selectedConversation) return

    const sentAt = new Date()
    const nextMessage: ChatMessageItem = {
      id: `local-${sentAt.getTime()}`,
      sender: "me",
      messages: [trimmedMessage],
      timestamp: formatMessageTime(sentAt),
      status: "Sent",
    }

    setConversations((currentConversations) =>
      currentConversations.map((conversation) =>
        conversation.id === selectedConversation.id
          ? {
              ...conversation,
              lastMessage: trimmedMessage,
              timeLabel: formatMessageTime(sentAt),
              unreadCount: undefined,
              messages: [...conversation.messages, nextMessage],
            }
          : conversation
      )
    )
    setDraftMessage("")
  }

  return (
    <ChatShell
      conversations={filteredConversations}
      selectedConversation={selectedConversation}
      selectedConversationId={selectedConversationId}
      searchQuery={searchQuery}
      draftMessage={draftMessage}
      showThreadOnMobile={showThreadOnMobile}
      onSearchChange={setSearchQuery}
      onDraftMessageChange={setDraftMessage}
      onSelectConversation={handleSelectConversation}
      onBackToList={() => setShowThreadOnMobile(false)}
      onSendMessage={handleSendMessage}
    />
  )
}
