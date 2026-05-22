import { ServerCrash } from "lucide-react"

import { ErrorEmpty } from "../_components/error-empty"

export default function InternalServerErrorPage() {
  return (
    <ErrorEmpty
      code="500"
      title="Internal server error"
      description="Something went wrong on our side. Please refresh the page or come back in a moment."
      icon={ServerCrash}
    />
  )
}