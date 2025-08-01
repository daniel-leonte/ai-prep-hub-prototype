"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  LinkIcon, 
  FileTextIcon, 
  LoaderIcon, 
  CheckCircleIcon,
  SparklesIcon,
  InfoIcon
} from "lucide-react"
import { JobPreview } from "./JobPreview"

interface JobInputDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onJobSaved?: (job: any) => void
}

export function JobInputDialog({ open, onOpenChange, onJobSaved }: JobInputDialogProps) {
  const [activeTab, setActiveTab] = useState("url")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [jobUrl, setJobUrl] = useState("")
  
  // Manual form state - simplified to single textarea
  const [jobPostingText, setJobPostingText] = useState("")
  const [isParsingText, setIsParsingText] = useState(false)

  // Sample job posting for demo
  const sampleJobPosting = `Senior Frontend Engineer - Vercel

Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.

We are looking for a Senior Frontend Engineer to join our team and help build the future of web development.

Location: San Francisco, CA (Remote OK)
Salary: $150k - $200k + equity
Type: Full-time
Experience: 4+ years

About the Role:
We're seeking a talented Frontend Engineer to join our growing team. You'll work on cutting-edge web technologies and help shape the future of web development.

Responsibilities:
• Build and maintain high-performance web applications
• Collaborate with designers and product managers
• Implement responsive designs with pixel-perfect accuracy  
• Optimize applications for maximum speed and scalability
• Write clean, maintainable code with comprehensive tests

Requirements:
• 4+ years of frontend development experience
• Expert knowledge of React, Next.js, and TypeScript
• Strong understanding of modern CSS and responsive design
• Experience with performance optimization and web vitals
• Familiarity with testing frameworks (Jest, Cypress)
• Strong communication and collaboration skills

Nice to Have:
• Experience with serverless technologies
• Knowledge of edge computing concepts
• Open source contributions
• Previous startup experience

Tech Stack: React, Next.js, TypeScript, Tailwind CSS, Vercel, Node.js

Apply by sending your resume and a cover letter explaining why you're excited about this role.`

  // Mock parsed job data - dynamically created from text or defaults
  const getMockParsedJob = () => {
    if (jobPostingText.trim()) {
      // Simple parsing simulation - in real app this would be AI-powered
      return {
        title: "Senior Frontend Engineer",
        company: "Vercel",
        location: "San Francisco, CA (Remote OK)",
        salary: "$150k - $200k + equity",
        posted: "Just added",
        applicants: "0",
        snippet: "Build and maintain high-performance web applications using cutting-edge web technologies.",
        techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Node.js"],
        requirements: [
          "4+ years of frontend development experience",
          "Expert knowledge of React, Next.js, and TypeScript",
          "Strong understanding of modern CSS and responsive design",
          "Experience with performance optimization and web vitals",
          "Familiarity with testing frameworks (Jest, Cypress)"
        ],
        logo: "▲"
      }
    }
    
    // Default fallback
    return {
      title: "Senior Full-Stack Engineer",
      company: "Stripe",
      location: "San Francisco, CA (Remote OK)",
      salary: "$160k - $220k + equity",
      posted: "Just added",
      applicants: "0",
      snippet: "Build the next generation of financial infrastructure.",
      techStack: ["React", "TypeScript", "Ruby", "Go", "PostgreSQL", "Redis"],
      requirements: [
        "5+ years full-stack development experience",
        "Expert in React and modern JavaScript",
        "Experience with backend systems and APIs"
      ],
      logo: "💳"
    }
  }

  const handleUrlSubmit = async () => {
    if (!jobUrl.trim()) return
    
    setIsProcessing(true)
    
    // Mock processing delay
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    // Mock successful parsing
    setIsProcessing(false)
    setShowPreview(true)
  }

  const handleManualSubmit = async () => {
    if (!jobPostingText.trim()) {
      return
    }
    
    setIsParsingText(true)
    
    // Mock AI parsing delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    setIsParsingText(false)
    setShowPreview(true)
  }

  const handleUseSample = () => {
    setJobPostingText(sampleJobPosting)
  }

  const handleJobSave = () => {
    onJobSaved?.(getMockParsedJob())
    onOpenChange(false)
    
    // Reset form
    setShowPreview(false)
    setJobUrl("")
    setJobPostingText("")
    setIsParsingText(false)
  }

  const handleBackToForm = () => {
    setShowPreview(false)
  }

  const isValidUrl = (url: string) => {
    const urlPattern = /^https?:\/\/.+/
    return urlPattern.test(url)
  }

  const getUrlSource = (url: string) => {
    if (url.includes('linkedin.com')) return 'LinkedIn'
    if (url.includes('indeed.com')) return 'Indeed'
    if (url.includes('angel.co') || url.includes('wellfound.com')) return 'AngelList'
    if (url.includes('glassdoor.com')) return 'Glassdoor'
    return 'Company Website'
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5" />
            Add Custom Job
          </DialogTitle>
          <DialogDescription>
            Import a job from URL or enter details manually. This job will be available across all platform features.
          </DialogDescription>
        </DialogHeader>

        {!showPreview ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="url" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                Import from URL
              </TabsTrigger>
              <TabsTrigger value="manual" className="flex items-center gap-2">
                <FileTextIcon className="h-4 w-4" />
                Enter Manually
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="url" className="mt-4 space-y-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertDescription>
                  Paste a job posting URL from LinkedIn, Indeed, AngelList, or company websites. Our AI will extract the key details automatically.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-url">Job Posting URL</Label>
                  <Input
                    id="job-url"
                    placeholder="https://linkedin.com/jobs/view/3..."
                    value={jobUrl}
                    onChange={(e) => setJobUrl(e.target.value)}
                    disabled={isProcessing}
                  />
                  {jobUrl && isValidUrl(jobUrl) && (
                    <p className="text-xs text-muted-foreground">
                      ✓ Detected: {getUrlSource(jobUrl)} job posting
                    </p>
                  )}
                </div>
                
                {isProcessing && (
                  <div className="space-y-3 p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 text-sm">
                      <LoaderIcon className="h-4 w-4 animate-spin" />
                      Parsing job details from {getUrlSource(jobUrl)}...
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleUrlSubmit} 
                  disabled={!jobUrl.trim() || !isValidUrl(jobUrl) || isProcessing}
                  className="w-full"
                >
                  {isProcessing ? (
                    <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <SparklesIcon className="mr-2 h-4 w-4" />
                  )}
                  {isProcessing ? "Extracting Details..." : "Extract Job Details"}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="manual" className="mt-4 space-y-4">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertDescription>
                  Paste the complete job posting text from any source. Our AI will automatically extract and organize the key details.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="job-posting-text">Complete Job Posting</Label>
                  <Button variant="outline" size="sm" onClick={handleUseSample}>
                    Use Sample Job
                  </Button>
                </div>
                
                <Textarea
                  id="job-posting-text"
                  placeholder="Paste the complete job posting here...

Example:
Senior Software Engineer - OpenAI

OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence benefits all of humanity.

We are seeking a Senior Software Engineer to join our team...

Location: San Francisco, CA
Salary: $180k - $250k + equity
Experience: 4+ years

Requirements:
• 4+ years of software engineering experience
• Strong proficiency in Python and JavaScript
• Experience with machine learning frameworks
• Bachelor's degree in Computer Science or equivalent

Tech Stack: Python, JavaScript, React, PyTorch, PostgreSQL"
                  rows={12}
                  value={jobPostingText}
                  onChange={(e) => setJobPostingText(e.target.value)}
                  className="font-mono text-sm"
                  disabled={isParsingText}
                />
                
                <div className="text-xs text-muted-foreground flex justify-between">
                  <span>{jobPostingText.length} characters</span>
                  <span>💡 Tip: Include company info, requirements, and tech stack for best results</span>
                </div>
                
                {isParsingText && (
                  <div className="space-y-3 p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 text-sm">
                      <LoaderIcon className="h-4 w-4 animate-spin" />
                      AI analyzing job posting...
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <SparklesIcon className="h-3 w-3" />
                        <span>Extracting job title and company...</span>
                      </div>
                      <Skeleton className="h-3 w-3/4" />
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <SparklesIcon className="h-3 w-3" />
                        <span>Identifying requirements and skills...</span>
                      </div>
                      <Skeleton className="h-3 w-1/2" />
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <SparklesIcon className="h-3 w-3" />
                        <span>Organizing tech stack and details...</span>
                      </div>
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleManualSubmit} 
                  disabled={!jobPostingText.trim() || isParsingText}
                  className="w-full"
                >
                  {isParsingText ? (
                    <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <SparklesIcon className="mr-2 h-4 w-4" />
                  )}
                  {isParsingText ? "Analyzing Job Posting..." : "Parse Job Details with AI"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Job Preview</h3>
              <Button variant="outline" onClick={handleBackToForm}>
                Edit Details
              </Button>
            </div>
            
            <JobPreview
              job={getMockParsedJob()}
              onEdit={handleBackToForm}
              onSave={handleJobSave}
              showSaveOptions={true}
              originalText={jobPostingText}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}