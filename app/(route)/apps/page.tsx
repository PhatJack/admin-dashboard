import type { Metadata } from "next"

import { AppsPage } from "../_components/apps-page"

export const metadata: Metadata = {
  title: "Apps",
  description: "Browse and manage connected apps and dashboard integrations.",
}

const Page = () => {
  return <AppsPage />
}

export default Page
