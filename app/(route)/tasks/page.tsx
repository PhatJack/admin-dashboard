import type { Metadata } from "next"
import { Suspense } from "react"

import { TasksPage } from "../_components/tasks-page"

export const metadata: Metadata = {
  title: "Tasks",
  description: "Track, organize, and manage task activity across the dashboard.",
}

const Page = () => {
  return (
    <Suspense fallback={null}>
      <TasksPage />
    </Suspense>
  )
}

export default Page
