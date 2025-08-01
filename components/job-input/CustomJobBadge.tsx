import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"

interface CustomJobBadgeProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "secondary" | "outline"
}

export function CustomJobBadge({ 
  className = "", 
  size = "sm",
  variant = "secondary" 
}: CustomJobBadgeProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm", 
    lg: "text-base"
  }

  return (
    <Badge 
      variant={variant} 
      className={`${sizeClasses[size]} ${className} flex items-center gap-1`}
    >
      <StarIcon className="h-3 w-3" />
      Custom
    </Badge>
  )
}