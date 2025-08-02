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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StageIndicator } from "@/components/stage-indicator"
import { MailIcon, SendIcon, UserIcon, LinkIcon, FileTextIcon, BuildingIcon, RocketIcon, CopyIcon, SparklesIcon, CheckCircleIcon, PlusIcon } from "lucide-react"
import { mockEmailTemplates, mockJobListings, mockCustomJobs, mockAIStartups, mockCustomCompanies, mockUserProfile } from "@/lib/mockData"
import { CustomJobBadge } from "@/components/job-input/CustomJobBadge"
import { JobInputDialog } from "@/components/job-input/JobInputDialog"

export default function EmailCrafterPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false)
  const [emailTone, setEmailTone] = useState("professional")
  const [includeResume, setIncludeResume] = useState(true)
  const [selectedJob, setSelectedJob] = useState(mockJobListings[0])
  const [selectedCompany, setSelectedCompany] = useState(mockAIStartups[0])
  
  // Combine regular jobs with custom jobs
  const allJobs = [...mockJobListings, ...mockCustomJobs]
  const allCompanies = [...mockAIStartups, ...mockCustomCompanies]

  const generateEmailContent = () => {
    const template = mockEmailTemplates[emailTone as keyof typeof mockEmailTemplates]
    const company = allCompanies.find(c => c.id === selectedCompany.id) || allCompanies[0]
    
    return template.body
      .replace(/{position}/g, selectedJob.title)
      .replace(/{userName}/g, mockUserProfile.name)
      .replace(/{userEmail}/g, mockUserProfile.email)
      .replace(/{company}/g, company.name)
      .replace(/{hiringManager}/g, "Hiring Team")
      .replace(/{aiArea}/g, company.description.toLowerCase())
      .replace(/{specificAchievement}/g, `your recent Series ${company.stage} funding and rapid growth to ${company.size} employees`)
      .replace(/{relevantProject}/g, "AI-powered features that increased user engagement by 40%")
      .replace(/{previousCompany}/g, mockUserProfile.currentCompany)
      .replace(/{keyAchievement}/g, "integrated OpenAI APIs to automate customer support, reducing response time by 60%")
      .replace(/{techStack}/g, selectedJob.techStack.slice(0, 3).join(", "))
      .replace(/{companyMission}/g, company.description.toLowerCase())
      .replace(/{relevantExperience}/g, "building scalable web applications with AI integration")
      .replace(/{userLinkedIn}/g, `LinkedIn: linkedin.com/in/${mockUserProfile.linkedin}`)
      .replace(/{founderName}/g, "Founder")
      .replace(/{milestone}/g, "YC acceptance")
      .replace(/{problem}/g, company.description.split(" ").slice(-5).join(" "))
      .replace(/{achievement}/g, "built a real-time chat system handling 10K+ concurrent users")
      .replace(/{sharedInterest}/g, "scaling AI applications")
      .replace(/{blogPost}/g, "scaling to 1M users")
      .replace(/{insight}/g, "infrastructure costs")
      .replace(/{similarProject}/g, "AI-powered dashboard")
      .replace(/{timeframe}/g, "the YC batch announcement")
      .replace(/{recentAchievement}/g, "shipped an AI feature that improved user retention by 35%")
      .replace(/{companyGoal}/g, "scale to the next million users")
      .replace(/{userPortfolio}/g, "alexchen.dev")
      .replace(/{specificProject}/g, company.description.split(",")[0])
      .replace(/{specificTech}/g, selectedJob.techStack[0])
      .replace(/{metric}/g, "1M+ requests/day")
      .replace(/{technicalChallenge}/g, "real-time processing at scale")
      .replace(/{relevantRepo}/g, "distributed-queue-system")
      .replace(/{technicalArea}/g, "async processing")
      .replace(/{userGithub}/g, `github.com/${mockUserProfile.github}`)
  }

  const handleGenerateEmail = () => {
    setIsEmailModalOpen(true)
  }

  const handleJobSaved = (job: any) => {
    // Mock handling of saved job
    console.log("Job saved:", job)
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
            <Label htmlFor="job-select">Select Target Position</Label>
            <div className="flex gap-2">
              <Select value={selectedJob.id} onValueChange={(value) => {
                const job = allJobs.find(j => j.id === value)
                if (job) {
                  setSelectedJob(job)
                  const company = allCompanies.find(c => c.id === job.companyId)
                  if (company) setSelectedCompany(company)
                }
              }}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Choose a job posting" />
                </SelectTrigger>
                <SelectContent>
                  {mockCustomJobs.length > 0 && (
                    <>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Custom Jobs</div>
                      {mockCustomJobs.map((job) => (
                        <SelectItem key={job.id} value={job.id}>
                          <div className="flex items-center gap-2">
                            <span>{job.title}</span>
                            <span className="text-muted-foreground">at {job.company}</span>
                            <CustomJobBadge size="sm" />
                          </div>
                        </SelectItem>
                      ))}
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Sample Jobs</div>
                    </>
                  )}
                  {mockJobListings.slice(0, 8).map((job) => (
                    <SelectItem key={job.id} value={job.id}>
                      <div className="flex items-center gap-2">
                        <span>{job.title}</span>
                        <span className="text-muted-foreground">at {job.company}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setIsJobDialogOpen(true)}
                className="border-dashed"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Card className="bg-muted/50">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    {selectedCompany.logo} {selectedCompany.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{selectedCompany.description}</p>
                </div>
                <Badge variant="outline">{selectedCompany.stage}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{selectedJob.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Team Size</p>
                  <p className="font-medium">{selectedCompany.size} people</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Tech Stack</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedCompany.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">AI Focus</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedCompany.aiTech.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-dashed">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-normal">Your Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Name</p>
                <p className="font-medium">{mockUserProfile.name}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{mockUserProfile.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Current Role</p>
                <p className="font-medium">{mockUserProfile.title} at {mockUserProfile.currentCompany}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Experience</p>
                <p className="font-medium">{mockUserProfile.experience}</p>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email-tone">Email Tone</Label>
              <Select value={emailTone} onValueChange={setEmailTone}>
                <SelectTrigger id="email-tone">
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional & Formal</SelectItem>
                  <SelectItem value="enthusiastic">Enthusiastic & Engaging</SelectItem>
                  <SelectItem value="technical">Technical & Detailed</SelectItem>
                  <SelectItem value="networking">Networking & Casual</SelectItem>
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
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI-Generated Email for {selectedJob.title}</DialogTitle>
            <DialogDescription>
              Personalized outreach to {selectedCompany.name} showcasing your relevant experience
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
              <TabsTrigger value="preview">Email Preview</TabsTrigger>
              <TabsTrigger value="variations">Alternative Versions</TabsTrigger>
              <TabsTrigger value="tips">Sending Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="preview" className="mt-4">
              <Card className="border-l-4 border-primary">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">
                        Subject: {mockEmailTemplates[emailTone as keyof typeof mockEmailTemplates].subject
                          .replace(/{position}/g, selectedJob.title)
                          .replace(/{userName}/g, mockUserProfile.name)}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        From: {mockUserProfile.name} &lt;{mockUserProfile.email}&gt;
                      </p>
                      <p className="text-sm text-muted-foreground">
                        To: Hiring Team &lt;careers@{selectedCompany.website}&gt;
                      </p>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <SparklesIcon className="h-3 w-3" />
                      {emailTone === "professional" && "Professional"}
                      {emailTone === "enthusiastic" && "Enthusiastic"}
                      {emailTone === "technical" && "Technical"}
                      {emailTone === "networking" && "Networking"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap font-sans text-sm">{generateEmailContent()}</pre>
                  </div>
                  {includeResume && (
                    <div className="mt-4 flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                      <div className="flex items-center text-sm">
                        <FileTextIcon className="mr-2 h-4 w-4 text-blue-500" />
                        <span>Alex_Chen_Resume_{selectedJob.title.replace(/ /g, "_")}.pdf</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">2.3 MB</Badge>
                    </div>
                  )}
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <RocketIcon className="h-4 w-4" />
                    <span>Email optimized for {selectedCompany.name}'s culture and values</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="variations" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Opening Line Variations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <p className="text-sm">"I just came across {selectedCompany.name}'s {selectedJob.title} role and was immediately drawn to your mission of {selectedCompany.description.split(' ').slice(0, 8).join(' ')}..."</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <p className="text-sm">"As someone who's been building AI-powered applications for {mockUserProfile.experience}, I'm excited about {selectedCompany.name}'s approach to..."</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <p className="text-sm">"Your recent {selectedCompany.stage} funding and growth to {selectedCompany.size} employees caught my attention, especially..."</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Achievement Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline" className="mr-2">Shipped AI feature with 40% engagement boost</Badge>
                  <Badge variant="outline" className="mr-2">Reduced API costs by $10K/month</Badge>
                  <Badge variant="outline" className="mr-2">Built system handling 1M+ daily requests</Badge>
                  <Badge variant="outline" className="mr-2">Led migration improving performance 35%</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Email Best Practices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Send within business hours</p>
                        <p className="text-xs text-muted-foreground">Tuesday-Thursday, 10 AM - 12 PM local time has highest open rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Follow up if no response</p>
                        <p className="text-xs text-muted-foreground">Send a brief follow-up after 5-7 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Connect on LinkedIn</p>
                        <p className="text-xs text-muted-foreground">Send connection request 1-2 days after email</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">For {selectedCompany.name} specifically:</p>
                    <ul className="text-sm space-y-1">
                      <li>• They value technical depth - your {emailTone} tone is perfect</li>
                      <li>• Mention their {selectedCompany.aiTech[0]} usage if relevant</li>
                      <li>• {selectedCompany.stage} stage companies appreciate growth mindset</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex gap-2 mt-4">
            <Button className="flex-1">
              <SendIcon className="mr-2 h-4 w-4" /> Send Email
            </Button>
            <Button variant="outline" onClick={() => navigator.clipboard.writeText(generateEmailContent())}>
              <CopyIcon className="mr-2 h-4 w-4" /> Copy to Clipboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <JobInputDialog 
        open={isJobDialogOpen} 
        onOpenChange={setIsJobDialogOpen}
        onJobSaved={handleJobSaved}
      />
    </div>
  )
}
