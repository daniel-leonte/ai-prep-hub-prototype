import type React from "react"
import { cn } from "@/lib/utils"

interface StageIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  stage: string
  title: string
}

export function StageIndicator({ stage, title, className, ...props }: StageIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-6", className)} {...props}>
      <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
        {stage}
      </span>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}
