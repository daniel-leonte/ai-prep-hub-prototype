"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HomeIcon, FileTextIcon, MailIcon, BriefcaseIcon, MicIcon, LayoutDashboardIcon } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn("hidden md:block w-64 border-r bg-background p-4 sticky top-14 h-[calc(100vh-56px)]", className)}
    >
      <nav className="space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          <LayoutDashboardIcon className="h-4 w-4" />
          Dashboard
        </Link>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="stage-1">
            <AccordionTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors">
              Stage 1: Apply
            </AccordionTrigger>
            <AccordionContent className="pl-6 space-y-1">
              <Link
                href="/apply/resume-builder"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <FileTextIcon className="h-4 w-4" />
                Resume Builder
              </Link>
              <Link
                href="/apply/email-crafter"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <MailIcon className="h-4 w-4" />
                Email Crafter
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stage-2">
            <AccordionTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors">
              Stage 2: Interview Prep
            </AccordionTrigger>
            <AccordionContent className="pl-6 space-y-1">
              <Link
                href="/interview/job-listings"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <BriefcaseIcon className="h-4 w-4" />
                Job Listings
              </Link>
              <Link
                href="/interview/mock-room"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted transition-colors"
              >
                <MicIcon className="h-4 w-4" />
                Mock Room
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </aside>
  )
}
