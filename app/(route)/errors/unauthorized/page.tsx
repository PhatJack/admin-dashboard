import { Lock } from "lucide-react"
import type { Metadata } from "next"

import { ErrorEmpty } from "../_components/error-empty"

export const metadata: Metadata = {
  title: "Unauthorized",
  description: "View access guidance when a dashboard page requires permission.",
}

export default function UnauthorizedPage() {
  return (
    <ErrorEmpty
      code="401"
      title="Unauthorized"
      description="You do not have permission to view this page. Sign in with an account that has access, then try again."
      icon={Lock}
    />
  )
}
