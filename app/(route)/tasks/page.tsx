import { Suspense } from "react"

import { TasksPage } from "../_components/tasks-page"

const Page = () => {
  return (
    <Suspense fallback={null}>
      <TasksPage />
    </Suspense>
  )
}

export default Page
