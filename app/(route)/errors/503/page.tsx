import { ShieldAlert } from "lucide-react"

import { ErrorEmpty } from "../_components/error-empty"

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
