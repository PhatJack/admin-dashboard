import { Rocket } from "lucide-react"
import type { Metadata } from "next"

import { ErrorEmpty } from "../errors/_components/error-empty"

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Preview a dashboard area that is still being prepared.",
}

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
