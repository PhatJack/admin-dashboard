import { ShieldAlert } from "lucide-react"
import type { Metadata } from "next"

import { ErrorEmpty } from "../_components/error-empty"

export const metadata: Metadata = {
  title: "Service Unavailable",
  description: "View service status guidance when the dashboard is temporarily unavailable.",
}

export default function ServiceUnavailablePage() {
  return (
    <ErrorEmpty
      code="503"
      title="Service unavailable"
      description="This service is temporarily unavailable. We are likely doing maintenance or handling heavy traffic."
      icon={ShieldAlert}
    />
  )
}
