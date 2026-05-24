export type TaskStatus = "Backlog" | "Todo" | "In Progress" | "Review" | "Done"

export type TaskPriority = "Low" | "Medium" | "High" | "Urgent"

export type Task = {
  id: string
  title: string
  project: string
  owner: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string
  progress: number
}

export const tasks: Task[] = [
  {
    id: "TSK-1001",
    title: "Refresh onboarding analytics",
    project: "Activation",
    owner: "Maya Chen",
    status: "In Progress",
    priority: "High",
    dueDate: "2026-05-28",
    progress: 68,
  },
  {
    id: "TSK-1002",
    title: "Audit billing notification copy",
    project: "Lifecycle",
    owner: "Noah Kim",
    status: "Review",
    priority: "Medium",
    dueDate: "2026-05-30",
    progress: 84,
  },
  {
    id: "TSK-1003",
    title: "Design support queue filters",
    project: "Operations",
    owner: "Ava Patel",
    status: "Todo",
    priority: "High",
    dueDate: "2026-06-03",
    progress: 22,
  },
  {
    id: "TSK-1004",
    title: "Ship regional sales digest",
    project: "Revenue Ops",
    owner: "Ethan Brooks",
    status: "Done",
    priority: "Medium",
    dueDate: "2026-05-22",
    progress: 100,
  },
  {
    id: "TSK-1005",
    title: "Investigate failed export jobs",
    project: "Platform",
    owner: "Lina Torres",
    status: "In Progress",
    priority: "Urgent",
    dueDate: "2026-05-25",
    progress: 46,
  },
  {
    id: "TSK-1006",
    title: "Plan help center migration",
    project: "Docs",
    owner: "Sam Rivera",
    status: "Backlog",
    priority: "Low",
    dueDate: "2026-06-14",
    progress: 8,
  },
  {
    id: "TSK-1007",
    title: "Validate checkout event schema",
    project: "Growth",
    owner: "Grace Lee",
    status: "Review",
    priority: "High",
    dueDate: "2026-05-27",
    progress: 91,
  },
  {
    id: "TSK-1008",
    title: "Prepare incident broadcast template",
    project: "Reliability",
    owner: "Owen Clark",
    status: "Todo",
    priority: "Urgent",
    dueDate: "2026-05-26",
    progress: 18,
  },
]
