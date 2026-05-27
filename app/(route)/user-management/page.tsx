import { UserProfile } from "@clerk/nextjs"

export default function UserManagementPage() {
  return (
    <div className="flex min-h-full justify-center p-6">
      <UserProfile />
    </div>
  )
}
