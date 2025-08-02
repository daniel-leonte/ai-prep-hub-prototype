"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DemoBadge } from "@/components/ui/demo-badge"
import { LiveBadge } from "@/components/ui/live-badge"
import { InfoIcon, XIcon, ArrowDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DemoInfoBannerProps {
  className?: string
  dismissible?: boolean
}

export function DemoInfoBanner({ className, dismissible = true }: DemoInfoBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  return (
    <Card className={cn(
      "border-dashed border-2 border-primary/30 bg-gradient-to-r from-demo/5 to-live/5",
      className
    )}>
      <CardContent className="flex items-center gap-4 py-4">
        <InfoIcon className="h-5 w-5 text-primary flex-shrink-0" />
        <div className="flex-1 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <DemoBadge size="sm" />
            <span className="text-muted-foreground">Try all features below</span>
            <span className="text-muted-foreground">•</span>
            <LiveBadge size="sm" />
            <span className="text-muted-foreground">Join our waitlist</span>
            <ArrowDownIcon className="h-4 w-4 text-muted-foreground animate-bounce" />
          </div>
          <p className="text-muted-foreground">
            <strong>This is a working prototype.</strong> Explore all features to test the user experience, then sign up for early access to the real platform.
          </p>
        </div>
        {dismissible && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDismissed(true)}
            className="h-8 w-8 p-0 flex-shrink-0"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}