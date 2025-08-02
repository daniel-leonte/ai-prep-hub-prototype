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
import { DemoBadge } from "@/components/ui/demo-badge"
import { SignupForm } from "@/components/signup-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Navbar() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const { onOpen } = useMobileSidebar()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Welcome to AI Prep Hub</DialogTitle>
            <DialogDescription>Choose how you'd like to proceed</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signup">Join Waitlist</TabsTrigger>
              <TabsTrigger value="demo">Demo Sign In</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signup" className="mt-4">
              <SignupForm 
                variant="compact"
                title="Join Early Access"
                description="Get notified when AI Prep Hub launches"
                onSuccess={() => setIsSignInModalOpen(false)}
              />
            </TabsContent>
            
            <TabsContent value="demo" className="mt-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <DemoBadge size="sm" />
                <span className="text-sm font-medium">Demo Authentication</span>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" type="email" defaultValue="demo@example.com" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input id="password" type="password" defaultValue="demo123" className="col-span-3" />
                </div>
              </div>
              <Button type="submit" onClick={() => setIsSignInModalOpen(false)} className="w-full">
                Sign In (Demo)
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                This is a demo sign-in. No actual authentication is performed.
              </p>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </header>
  )
}
