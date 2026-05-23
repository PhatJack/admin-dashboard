import Link from "next/link"
import { Rocket } from "lucide-react"

import { ErrorEmpty } from "../errors/_components/error-empty"

export default function ComingSoonPage() {
  return (
    <ErrorEmpty
			code="123"
      title="Coming Soon"
      description="This page is still being prepared. Please check back later."
      icon={Rocket}
    />
  )
}
