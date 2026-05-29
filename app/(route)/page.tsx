import { DashboardPage } from "./_components/dashboard-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Review dashboard metrics, activity, and operational insights in one place.",
}

const Page = () => {
  return <DashboardPage />
}

export default Page
