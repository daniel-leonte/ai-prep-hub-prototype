import { Badge } from "@/components/ui/badge"
import { ZapIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LiveBadgeProps {
  className?: string
  size?: "default" | "sm" | "lg"
}

export function LiveBadge({ className, size = "default" }: LiveBadgeProps) {
  const sizeClasses = {
    default: "text-xs px-2 py-1",
    sm: "text-[10px] px-1.5 py-0.5",
    lg: "text-sm px-3 py-1.5"
  }

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "bg-live/10 text-live border-live/20 font-medium gap-1 select-none",
        sizeClasses[size],
        className
      )}
    >
      <ZapIcon className="h-3 w-3" />
      LIVE
    </Badge>
  )
}