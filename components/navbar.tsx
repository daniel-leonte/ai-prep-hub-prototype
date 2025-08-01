"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { MenuIcon } from "lucide-react"
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"

export function Navbar() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const { onOpen } = useMobileSidebar()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">AI Prep Hub</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                Stage 1: Apply
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/apply/resume-builder">Resume Builder</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/apply/email-crafter">Email Crafter</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                Stage 2: Interview Prep
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/interview/job-listings">Job Listings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/interview/mock-room">Mock Room</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" onClick={() => setIsSignInModalOpen(true)}>
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onOpen}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </div>

      <Dialog open={isSignInModalOpen} onOpenChange={setIsSignInModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>Enter your credentials to sign in. This is a dummy form.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" defaultValue="user@example.com" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" type="password" defaultValue="password123" className="col-span-3" />
            </div>
          </div>
          <Button type="submit" onClick={() => setIsSignInModalOpen(false)}>
            Sign In
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  )
}
