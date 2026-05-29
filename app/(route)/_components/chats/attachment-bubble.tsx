import { FileText } from "lucide-react"

import { ChatAttachment } from "./chat-data"

type AttachmentBubbleProps = {
  attachment: ChatAttachment
}

export function AttachmentBubble({ attachment }: AttachmentBubbleProps) {
  return (
    <div className="w-64 overflow-hidden rounded-md border bg-card text-card-foreground shadow-sm sm:w-80">
      <div className="flex aspect-video items-center justify-center bg-muted">
        <FileText aria-hidden="true" className="size-8 text-muted-foreground" />
      </div>
      <div className="flex items-center gap-3 p-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileText aria-hidden="true" className="size-4 text-muted-foreground" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{attachment.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {attachment.source} - {attachment.size}
          </p>
        </div>
      </div>
    </div>
  )
}
