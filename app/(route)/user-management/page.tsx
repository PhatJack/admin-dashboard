import { UserProfile } from "@clerk/nextjs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Management",
  description: "Manage profile details, account settings, and user preferences.",
}

export default function UserManagementPage() {
  return (
    <div className="flex min-h-full justify-center p-6">
      <UserProfile />
    </div>
  )
}
