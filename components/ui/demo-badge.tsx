import { Badge } from "@/components/ui/badge"
import { PlayCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DemoBadgeProps {
  className?: string
  size?: "default" | "sm" | "lg"
}

export function DemoBadge({ className, size = "default" }: DemoBadgeProps) {
  const sizeClasses = {
    default: "text-xs px-2 py-1",
    sm: "text-[10px] px-1.5 py-0.5",
    lg: "text-sm px-3 py-1.5"
  }

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "bg-demo/10 text-demo border-demo/20 font-medium gap-1 select-none",
        sizeClasses[size],
        className
      )}
    >
      <PlayCircleIcon className="h-3 w-3" />
      DEMO
    </Badge>
  )
}