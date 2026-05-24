"use client"

import * as React from "react"
import {
  Column,
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { format } from "date-fns"
import { ArrowUpDown, Search } from "lucide-react"

import { Task, TaskPriority, TaskStatus, tasks } from "@/app/constant/tasks"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const statusVariant: Record<
  TaskStatus,
  React.ComponentProps<typeof Badge>["variant"]
> = {
  Backlog: "outline",
  Todo: "secondary",
  "In Progress": "default",
  Review: "outline",
  Done: "secondary",
}

const priorityVariant: Record<
  TaskPriority,
  React.ComponentProps<typeof Badge>["variant"]
> = {
  Low: "outline",
  Medium: "secondary",
  High: "default",
  Urgent: "destructive",
}

const DATE_FORMAT = "MMM d, yyyy"

function SortableHeader({
  label,
  column,
}: {
  label: string
  column: Column<Task, unknown>
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-2"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <ArrowUpDown data-icon="inline-end" />
    </Button>
  )
}

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <SortableHeader label="Task" column={column} />,
    filterFn: (row, _columnId, filterValue) => {
      const search = String(filterValue).toLowerCase()
      const content = `${row.original.id} ${row.original.title}`.toLowerCase()

      return content.includes(search)
    },
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span className="font-medium">{row.original.title}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {row.original.id}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "project",
    header: ({ column }) => <SortableHeader label="Project" column={column} />,
  },
  {
    accessorKey: "owner",
    header: ({ column }) => <SortableHeader label="Owner" column={column} />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader label="Status" column={column} />,
    cell: ({ row }) => (
      <Badge variant={statusVariant[row.original.status]}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "priority",
    header: ({ column }) => <SortableHeader label="Priority" column={column} />,
    cell: ({ row }) => (
      <Badge variant={priorityVariant[row.original.priority]}>
        {row.original.priority}
      </Badge>
    ),
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => <SortableHeader label="Due date" column={column} />,
    cell: ({ row }) => format(new Date(row.original.dueDate), DATE_FORMAT),
  },
  {
    accessorKey: "progress",
    header: ({ column }) => <SortableHeader label="Progress" column={column} />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div
          className="h-2 w-24 overflow-hidden rounded-sm bg-muted"
          aria-label={`${row.original.progress}% complete`}
        >
          <div
            className="h-full rounded-sm bg-primary"
            style={{ width: `${row.original.progress}%` }}
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {row.original.progress}%
        </span>
      </div>
    ),
  },
]

export function TasksPage() {
  const [sorting, setSorting] = React.useState<SortingState>([])

  // TanStack Table exposes function properties that React Compiler cannot memoize.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: tasks,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  const completedTasks = tasks.filter((task) => task.status === "Done").length
  const activeTasks = tasks.length - completedTasks
  const urgentTasks = tasks.filter((task) => task.priority === "Urgent").length

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-normal">Tasks</h1>
        <p className="text-sm text-muted-foreground">
          Track delivery work across projects, owners, and priorities.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <TaskSummaryCard label="Total tasks" value={tasks.length.toString()} />
        <TaskSummaryCard label="Active" value={activeTasks.toString()} />
        <TaskSummaryCard label="Urgent" value={urgentTasks.toString()} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All tasks</CardTitle>
          <CardDescription>
            Sort columns and search by task title or task ID.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="relative max-w-sm">
            <Search
              data-icon="inline-start"
              size={16}
              className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("id")?.setFilterValue(event.target.value)
              }
              placeholder="Search tasks..."
              className="pl-8"
            />
          </div>

          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No tasks found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function TaskSummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl">{value}</CardTitle>
      </CardHeader>
    </Card>
  )
}
