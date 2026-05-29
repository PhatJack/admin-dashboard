import { ClockAlert } from "lucide-react"
import type { Metadata } from "next"

import { ErrorEmpty } from "../_components/error-empty"

export const metadata: Metadata = {
  title: "Gateway Timeout",
  description: "View retry guidance when the dashboard server takes too long to respond.",
}

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
