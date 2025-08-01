"use client"

import type React from "react"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { cn } from "@/lib/utils"

interface MobileSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileSidebar({ className }: MobileSidebarProps) {
  const { isOpen, onClose } = useMobileSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className={cn("p-0 w-64", className)}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
