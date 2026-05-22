import { SearchX } from "lucide-react"

import { ErrorEmpty } from "../_components/error-empty"

export default function NotFoundPage() {
  return (
    <ErrorEmpty
      code="404"
      title="Page not found"
      description="The page you are looking for does not exist or may have been moved."
      icon={SearchX}
    />
  )
}