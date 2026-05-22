import { ClockAlert } from "lucide-react"

import { ErrorEmpty } from "../_components/error-empty"

export default function GatewayTimeoutPage() {
  return (
    <ErrorEmpty
      code="504"
      title="Gateway timeout"
      description="The server took too long to respond. Please try again in a few moments."
      icon={ClockAlert}
    />
  )
}
