"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LiveBadge } from "@/components/ui/live-badge"
import { CheckCircleIcon, Loader2Icon, MailIcon, AlertCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
})

type SignupFormData = z.infer<typeof signupSchema>

interface SignupFormProps {
  variant?: "default" | "compact" | "inline"
  title?: string
  description?: string
  showName?: boolean
  className?: string
  onSuccess?: (email: string) => void
}

export function SignupForm({ 
  variant = "default", 
  title,
  description, 
  showName = false, 
  className,
  onSuccess 
}: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          waitlist_id: 29604,
          email: data.email,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Signup successful:', result)
      
      setIsSuccess(true)
      onSuccess?.(data.email)
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        reset()
      }, 3000)
      
    } catch (error) {
      console.error('Signup error:', error)
      setError(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={cn(
        "flex flex-col items-center gap-3 p-6 text-center",
        variant === "compact" && "p-4",
        variant === "inline" && "p-3",
        className
      )}>
        <div className="flex items-center gap-2">
          <CheckCircleIcon className="h-6 w-6 text-live" />
          <LiveBadge size="sm" />
        </div>
        <div>
          <h3 className="font-semibold text-live">You're on the waitlist!</h3>
          <p className="text-sm text-muted-foreground mt-1">
            We'll notify you when AI Prep Hub launches.
          </p>
        </div>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={cn("space-y-2", className)}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={cn(
                "transition-colors",
                errors.email && "border-destructive focus-visible:ring-destructive"
              )}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-live hover:bg-live/90 text-live-foreground"
          >
            {isLoading ? (
              <>
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                <MailIcon className="mr-2 h-4 w-4" />
                Join Waitlist
              </>
            )}
          </Button>
        </form>
        {error && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
            <AlertCircleIcon className="h-4 w-4 text-destructive flex-shrink-0" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}
      </div>
    )
  }

  const content = (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {showName && (
        <div className="space-y-2">
          <Label htmlFor="name">Name (Optional)</Label>
          <Input
            {...register("name")}
            id="name"
            placeholder="Your name"
            disabled={isLoading}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="you@example.com"
          disabled={isLoading}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-live hover:bg-live/90 text-live-foreground"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            Joining Waitlist...
          </>
        ) : (
          <>
            <MailIcon className="mr-2 h-4 w-4" />
            Join Early Access Waitlist
          </>
        )}
      </Button>
      {error && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
          <AlertCircleIcon className="h-4 w-4 text-destructive flex-shrink-0" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}
      <p className="text-xs text-muted-foreground text-center">
        We'll notify you when AI Prep Hub launches. No spam, ever.
      </p>
    </form>
  )

  if (variant === "compact") {
    return (
      <div className={cn("space-y-3", className)}>
        <div className="flex items-center gap-2 mb-3">
          <LiveBadge size="sm" />
          <span className="text-sm font-medium">Real Signup</span>
        </div>
        {content}
      </div>
    )
  }

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-xl">
            {title || "Join AI Prep Hub"}
          </CardTitle>
          <LiveBadge size="sm" />
        </div>
        <CardDescription>
          {description || "Get early access to the platform that helps engineers land jobs at AI startups."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}