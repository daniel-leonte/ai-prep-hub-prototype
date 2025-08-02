"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { StageIndicator } from "@/components/stage-indicator"
import { LinkIcon, FileTextIcon, DownloadIcon, CheckCircleIcon, SparklesIcon, PlusIcon } from "lucide-react"
import { mockResumes, mockJobListings, mockCustomJobs } from "@/lib/mockData"
import { CustomJobBadge } from "@/components/job-input/CustomJobBadge"
import { JobInputDialog } from "@/components/job-input/JobInputDialog"

export default function ResumeBuilderPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState("fullstack")
  const [selectedJob, setSelectedJob] = useState(mockJobListings[0])
  
  // Combine regular jobs with custom jobs
  const allJobs = [...mockJobListings, ...mockCustomJobs]

  const handleTailorResume = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsPreviewModalOpen(true)
    }, 2000) // Simulate loading
  }

  const handleJobSaved = (job: any) => {
    // Mock handling of saved job - in real app would update the jobs list
    console.log("Job saved:", job)
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
            <p className="text-sm text-muted-foreground">Using demo resume from Alex Chen</p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="job-select">Select Target Job</Label>
            <div className="flex gap-2">
              <Select value={selectedJob.id} onValueChange={(value) => setSelectedJob(allJobs.find(j => j.id === value) || allJobs[0])}>
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
                            <span>{job.title} at {job.company}</span>
                            <CustomJobBadge size="sm" />
                          </div>
                        </SelectItem>
                      ))}
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Sample Jobs</div>
                    </>
                  )}
                  {mockJobListings.slice(0, 5).map((job) => (
                    <SelectItem key={job.id} value={job.id}>
                      {job.title} at {job.company}
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
              <CardTitle className="text-base">{selectedJob.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{selectedJob.company} • {selectedJob.location}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">{selectedJob.snippet}</p>
                <div className="flex flex-wrap gap-1">
                  {selectedJob.techStack.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-2">
            <Label htmlFor="role-type">Resume Focus</Label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select role type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullstack">Full-Stack Developer</SelectItem>
                <SelectItem value="backend">Backend Engineer</SelectItem>
                <SelectItem value="frontend">Frontend Engineer</SelectItem>
              </SelectContent>
            </Select>
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
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI-Tailored Resume for {selectedJob.title}</DialogTitle>
            <DialogDescription>
              Resume optimized for {selectedJob.company} based on job requirements and your experience
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
              <TabsTrigger value="comparison">Before/After</TabsTrigger>
              <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
              <TabsTrigger value="tips">Tips & Next Steps</TabsTrigger>
            </TabsList>
            
            <TabsContent value="comparison" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Original Resume</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold">{mockResumes.original.name}</h4>
                      <p className="text-muted-foreground">{mockResumes.original.title}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Summary</h5>
                      <p className="text-muted-foreground">{mockResumes.original.summary}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Experience</h5>
                      {mockResumes.original.experience.map((exp, idx) => (
                        <div key={idx} className="mb-3">
                          <p className="font-medium">{exp.title} at {exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.duration}</p>
                          <ul className="list-disc list-inside text-muted-foreground mt-1">
                            {exp.bullets.map((bullet, bidx) => (
                              <li key={bidx} className="text-xs">{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Skills</h5>
                      <p className="text-muted-foreground">{mockResumes.original.skills.join(", ")}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Tailored Version
                      <Badge variant="default" className="text-xs">
                        <SparklesIcon className="h-3 w-3 mr-1" />
                        AI Enhanced
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold">{mockResumes.tailored[selectedRole as keyof typeof mockResumes.tailored].name}</h4>
                      <p className="text-primary font-medium">{mockResumes.tailored[selectedRole as keyof typeof mockResumes.tailored].title}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Summary</h5>
                      <p className="text-foreground">{mockResumes.tailored[selectedRole as keyof typeof mockResumes.tailored].summary}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Experience</h5>
                      {mockResumes.tailored[selectedRole as keyof typeof mockResumes.tailored].experience.map((exp, idx) => (
                        <div key={idx} className="mb-3">
                          <p className="font-medium text-primary">{exp.title} at {exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.duration}</p>
                          <ul className="list-disc list-inside mt-1">
                            {exp.bullets.map((bullet, bidx) => (
                              <li key={bidx} className="text-xs">{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Skills</h5>
                      <div className="flex flex-wrap gap-1">
                        {mockResumes.tailored[selectedRole as keyof typeof mockResumes.tailored].skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Resume Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                      Key Improvements Made
                    </h5>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Updated title from "Software Developer" to "{mockResumes.tailored[selectedRole as keyof typeof mockResumes.tailored].title}" to match job posting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Added quantifiable metrics (40% engagement increase, 10K+ requests/day)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Highlighted AI integration experience with specific technologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Emphasized {selectedJob.techStack.slice(0, 3).join(", ")} skills matching job requirements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold">Keyword Match Score</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Technical Skills Match</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-32" />
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Experience Relevance</span>
                        <div className="flex items-center gap-2">
                          <Progress value={78} className="w-32" />
                          <span className="text-sm font-medium">78%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">AI/ML Keywords</span>
                        <div className="flex items-center gap-2">
                          <Progress value={92} className="w-32" />
                          <span className="text-sm font-medium">92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Overall Match:</strong> Your tailored resume has an 85% match with the {selectedJob.title} 
                      position at {selectedJob.company}. This is considered an excellent match that should pass ATS filters 
                      and catch the hiring manager's attention.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Steps & Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold">Before Applying:</h5>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Review the company's recent blog posts or news to personalize your application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Check if any of your connections work at {selectedJob.company} on LinkedIn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Prepare a GitHub repo showcasing relevant AI integration projects</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold">Interview Preparation:</h5>
                    <p className="text-sm text-muted-foreground">Based on this role, you should prepare for:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Badge variant="outline">System Design with AI</Badge>
                      <Badge variant="outline">API Integration</Badge>
                      <Badge variant="outline">Scaling Challenges</Badge>
                      <Badge variant="outline">Cost Optimization</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Pro Tip:</strong> Use our Email Crafter next to write a compelling cover letter that 
                      references specific {selectedJob.company} projects and shows your genuine interest in their mission.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex gap-2 mt-4">
            <Button className="flex-1">
              <DownloadIcon className="mr-2 h-4 w-4" /> Download Tailored Resume
            </Button>
            <Button variant="outline" asChild>
              <Link href="/apply/email-crafter">
                Craft Email <SparklesIcon className="ml-2 h-4 w-4" />
              </Link>
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
