"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { StageIndicator } from "@/components/stage-indicator"
import { MailIcon, SendIcon, UserIcon, LinkIcon, FileTextIcon } from "lucide-react"

export default function EmailCrafterPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailTone, setEmailTone] = useState("Professional")
  const [includeResume, setIncludeResume] = useState(true)

  const dummyEmailContent = `Subject: Application for AI Engineer - [Your Name]

Dear [Founder Name/Hiring Manager],

I am writing to express my enthusiastic interest in the AI Engineer position at [Startup Name], as advertised on [Platform/Link]. Having closely followed [Startup Name]'s innovative work in [mention specific area, e.g., large language models, computer vision], I am particularly impressed by [mention a specific project or achievement].

My background in [mention relevant experience, e.g., developing scalable machine learning models, deploying AI solutions in production] aligns perfectly with the requirements outlined in the job description. In my previous role at [Previous Company], I [mention a key achievement or project relevant to AI/ML, e.g., "developed a predictive analytics system that improved data processing efficiency by X%"].

I am confident that my skills in [mention 2-3 key skills, e.g., Python, TensorFlow, cloud platforms] and my passion for building impactful AI technologies would allow me to contribute significantly to your team. I am eager to learn more about this opportunity and discuss how my experience can benefit [Startup Name].

Thank you for your time and consideration. I have attached my resume for your review.

Sincerely,

[Your Name]
[Your Email]
[Your LinkedIn (Optional)]
`

  const handleGenerateEmail = () => {
    setIsEmailModalOpen(true)
  }

  return (
    <div className="space-y-8">
      <StageIndicator stage="Stage 1" title="Craft Personalized Emails for Your Application" />

      <Card>
        <CardHeader>
          <CardTitle>Email Generation Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="job-description">Paste Job Description</Label>
            <Textarea
              id="job-description"
              placeholder="Paste the full job description here for best results."
              rows={6}
              defaultValue="Responsibilities: Build and deploy AI models, develop scalable machine learning pipelines, collaborate with research teams. Requirements: 2+ years experience in ML, strong Python skills, familiarity with deep learning frameworks (TensorFlow/PyTorch)."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="startup-link">Startup Link or Founder Email</Label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="startup-link"
                placeholder="e.g., https://startup.com or founder@startup.com"
                className="pl-9"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="user-name">Your Name</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="user-name" placeholder="John Doe" className="pl-9" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="user-email">Your Email</Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="user-email" type="email" placeholder="john.doe@example.com" className="pl-9" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email-tone">Email Tone</Label>
              <Select value={emailTone} onValueChange={setEmailTone}>
                <SelectTrigger id="email-tone">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Enthusiastic">Enthusiastic</SelectItem>
                  <SelectItem value="Concise">Concise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 mt-auto pb-2">
              <Checkbox
                id="include-resume"
                checked={includeResume}
                onCheckedChange={(checked) => setIncludeResume(!!checked)}
              />
              <Label htmlFor="include-resume">Include Resume Attachment</Label>
            </div>
          </div>
          <Button onClick={handleGenerateEmail}>
            <SendIcon className="mr-2 h-4 w-4" /> Generate Email
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isEmailModalOpen} onOpenChange={setIsEmailModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Generated Email Preview</DialogTitle>
            <DialogDescription>Here's a dummy personalized email based on your inputs.</DialogDescription>
          </DialogHeader>
          <Card className="border-l-4 border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Subject: Application for AI Engineer</CardTitle>
              <p className="text-sm text-muted-foreground">From: Your Name &lt;your.email@example.com&gt;</p>
              <p className="text-sm text-muted-foreground">
                To: [Founder Name/Hiring Manager] &lt;founder@startup.com&gt;
              </p>
            </CardHeader>
            <CardContent>
              <Textarea readOnly rows={15} defaultValue={dummyEmailContent} className="font-mono text-sm" />
              {includeResume && (
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  <span>Attached: Your_Resume_Tailored.pdf (Dummy)</span>
                </div>
              )}
            </CardContent>
          </Card>
          <Button className="w-full">
            <SendIcon className="mr-2 h-4 w-4" /> Send Email (Dummy Action)
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
