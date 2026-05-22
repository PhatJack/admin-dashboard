import { Lock } from "lucide-react"

import { ErrorEmpty } from "../_components/error-empty"

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