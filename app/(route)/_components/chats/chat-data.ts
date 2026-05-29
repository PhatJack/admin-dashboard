export type ChatParticipant = {
  name: string
  initials: string
  avatarUrl?: string
  status: string
  online: boolean
}

export type ChatAttachment = {
  name: string
  source: string
  size: string
}

export type ChatMessageItem = {
  id: string
  sender: "me" | "them"
  messages: string[]
  timestamp: string
  status?: string
  attachment?: ChatAttachment
}

export type ChatConversation = {
  id: string
  participant: ChatParticipant
  lastMessage: string
  timeLabel: string
  dayLabel: string
  unreadCount?: number
  messages: ChatMessageItem[]
}

export const chatConversations: ChatConversation[] = [
  {
    id: "sarah-jenkins",
    participant: {
      name: "Sarah Jenkins",
      initials: "SJ",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=96&h=96&q=80",
      status: "Active now",
      online: true,
    },
    lastMessage: "The new designs look fantastic! I'll review the prototype this afternoon.",
    timeLabel: "10:42 AM",
    dayLabel: "Today",
    unreadCount: 2,
    messages: [
      {
        id: "m-1",
        sender: "them",
        messages: ["Hey! Are we still on for the review meeting later?"],
        timestamp: "10:30 AM",
      },
      {
        id: "m-2",
        sender: "me",
        messages: [
          "Yes, definitely. I've just finished up the latest iterations on the dashboard layout.",
          "I'll send over a quick preview link now.",
        ],
        timestamp: "10:35 AM",
        status: "Read",
      },
      {
        id: "m-3",
        sender: "me",
        messages: [],
        timestamp: "10:38 AM",
        status: "Read",
        attachment: {
          name: "Dashboard_v2_Final.fig",
          source: "Figma",
          size: "2.4 MB",
        },
      },
      {
        id: "m-4",
        sender: "them",
        messages: [
          "The new designs look fantastic! I'll review the prototype this afternoon.",
        ],
        timestamp: "10:42 AM",
      },
    ],
  },
  {
    id: "design-team-sync",
    participant: {
      name: "Design Team Sync",
      initials: "DT",
      status: "3 members online",
      online: false,
    },
    lastMessage: "Michael: Can someone share the updated component states?",
    timeLabel: "Yesterday",
    dayLabel: "Yesterday",
    messages: [
      {
        id: "m-1",
        sender: "them",
        messages: ["Can someone share the updated component states?"],
        timestamp: "4:18 PM",
      },
      {
        id: "m-2",
        sender: "me",
        messages: ["I pushed the latest variants into the shared file."],
        timestamp: "4:21 PM",
        status: "Delivered",
      },
    ],
  },
  {
    id: "elena-petrova",
    participant: {
      name: "Elena Petrova",
      initials: "EP",
      status: "Last active Tuesday",
      online: false,
    },
    lastMessage: "Sounds good, let's connect on Thursday.",
    timeLabel: "Tue",
    dayLabel: "Tuesday",
    messages: [
      {
        id: "m-1",
        sender: "them",
        messages: ["Sounds good, let's connect on Thursday."],
        timestamp: "2:16 PM",
      },
    ],
  },
]
