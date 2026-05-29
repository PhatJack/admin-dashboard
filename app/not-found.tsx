import { SearchX } from "lucide-react"
import type { Metadata } from "next"
import React from "react"

import { ErrorEmpty } from "./(route)/errors/_components/error-empty"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Find guidance when a dashboard page cannot be found.",
}

const NotFoundPage = () => {
  return (
    <ErrorEmpty
      code="404"
      title="Page not found"
      description="The page you are looking for does not exist or may have been moved."
      icon={SearchX}
    />
  )
}

export default NotFoundPage
