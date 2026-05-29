import { ServerCrash } from "lucide-react"
import type { Metadata } from "next"

import { ErrorEmpty } from "../_components/error-empty"

export const metadata: Metadata = {
  title: "Internal Server Error",
  description: "View recovery guidance when the dashboard encounters a server error.",
}

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
