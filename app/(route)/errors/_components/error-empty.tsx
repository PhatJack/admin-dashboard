import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

type ErrorEmptyProps = {
  code: string
  title: string
  description: string
  icon: LucideIcon
  buttons?: React.ReactNode[]
}

export function ErrorEmpty({
  code,
  title,
  description,
  icon: Icon,
  buttons,
}: ErrorEmptyProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6">
      <Empty className="max-w-xl">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icon />
          </EmptyMedia>
          <p className="text-9xl font-semibold text-primary">{code}</p>
          <EmptyTitle>{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          {buttons && buttons?.length > 0 ? (
            <div className="flex w-full items-center justify-center gap-2">
              {buttons}
            </div>
          ) : (
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          )}
        </EmptyContent>
      </Empty>
    </div>
  )
}
