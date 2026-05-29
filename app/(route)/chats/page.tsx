import type { Metadata } from "next"

import { ChatsPage } from "../_components/chats/chats-page"

export const metadata: Metadata = {
  title: "Chats",
  description: "View conversations, messages, and team communication threads.",
}

const Page = () => {
  return <ChatsPage />
}

export default Page
