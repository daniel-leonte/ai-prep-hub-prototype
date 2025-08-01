"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { StageIndicator } from "@/components/stage-indicator"
import { LinkIcon, FileTextIcon, DownloadIcon } from "lucide-react"

export default function ResumeBuilderPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)

  const handleTailorResume = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsPreviewModalOpen(true)
    }, 2000) // Simulate loading
  }

  return (
    <div className="space-y-8">
      <StageIndicator stage="Stage 1" title="Craft Your Tailored Resume for the Job" />

      <Card>
        <CardHeader>
          <CardTitle>Resume Tailoring Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="resume-upload">Upload Current Resume (PDF)</Label>
            <Input id="resume-upload" type="file" accept=".pdf" />
            <p className="text-sm text-muted-foreground">Max file size: 5MB</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="job-link">Paste Job URL</Label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="job-link" placeholder="e.g., https://linkedin.com/jobs/123" className="pl-9" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="job-details">Additional Job Details (Optional)</Label>
            <Textarea
              id="job-details"
              placeholder="e.g., Key skills mentioned, company culture, specific projects they value."
              rows={4}
            />
          </div>
          <Button onClick={handleTailorResume} disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⚙️</span> Tailoring Resume...
              </>
            ) : (
              <>
                <FileTextIcon className="mr-2 h-4 w-4" /> Tailor Resume
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      )}

      <Dialog open={isPreviewModalOpen} onOpenChange={setIsPreviewModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Tailored Resume Preview</DialogTitle>
            <DialogDescription>Here's a dummy preview of your customized resume.</DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Original Resume (Dummy)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  readOnly
                  rows={10}
                  defaultValue={`
[Your Name]
[Your Contact Info]

Summary:
Experienced software engineer.

Experience:
- Developed web applications.
- Worked with databases.

Skills:
JavaScript, Python, SQL.
                `}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tailored Version (Dummy)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  readOnly
                  rows={10}
                  defaultValue={`
[Your Name]
[Your Contact Info]

Summary:
Highly skilled AI/ML Engineer with a strong background in developing scalable machine learning solutions.

Experience:
- Led development of AI-powered features for [Previous Company], improving model accuracy by X%.
- Implemented deep learning models for natural language processing.

Skills:
Python (TensorFlow, PyTorch), Machine Learning, Deep Learning, NLP, Data Science, Cloud Platforms (AWS/GCP).
Emphasized ML experience for this AI role, highlighting relevant projects and technologies.
                `}
                />
              </CardContent>
            </Card>
          </div>
          <Button className="w-full">
            <DownloadIcon className="mr-2 h-4 w-4" /> Download Tailored Resume (Dummy)
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
