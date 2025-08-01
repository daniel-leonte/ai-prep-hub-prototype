"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StageIndicator } from "@/components/stage-indicator"
import { SearchIcon, BriefcaseIcon, MapPinIcon, Building2Icon, ArrowRightIcon, DollarSignIcon, ClockIcon, UsersIcon, CheckCircleIcon, PlusIcon } from "lucide-react"
import { mockJobListings, mockCustomJobs, mockAIStartups, mockCustomCompanies } from "@/lib/mockData"
import { CustomJobBadge } from "@/components/job-input/CustomJobBadge"
import { JobInputDialog } from "@/components/job-input/JobInputDialog"

export default function JobListingsPage() {
  const [isJobDetailsModalOpen, setIsJobDetailsModalOpen] = useState(false)
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  
  // Combine regular jobs with custom jobs
  const allJobs = [...mockJobListings, ...mockCustomJobs]
  const allCompanies = [...mockAIStartups, ...mockCustomCompanies]
  
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || 
                          (selectedFilter === "fullstack" && job.title.toLowerCase().includes("full")) ||
                          (selectedFilter === "backend" && job.title.toLowerCase().includes("backend")) ||
                          (selectedFilter === "frontend" && job.title.toLowerCase().includes("frontend")) ||
                          (selectedFilter === "platform" && (job.title.toLowerCase().includes("platform") || job.title.toLowerCase().includes("devops")))
    return matchesSearch && matchesFilter
  })


  const handleViewDetails = (job: any) => {
    setSelectedJob(job)
    setIsJobDetailsModalOpen(true)
  }
  
  const handleJobSaved = (job: any) => {
    // Mock handling of saved job
    console.log("Job saved:", job)
  }
  
  const selectedCompany = selectedJob ? allCompanies.find(c => c.id === selectedJob.companyId) || allCompanies[0] : allCompanies[0]

  return (
    <div className="space-y-8">
      <StageIndicator stage="Stage 2" title="Browse AI-Generated Job Postings for Practice" />

      {/* Add Your Own Job Call-to-Action */}
      <Card className="border-dashed border-2 border-primary/50 bg-primary/5">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Don't see your target job?</h3>
            <p className="text-muted-foreground">Add any job posting from LinkedIn, Indeed, or company websites to practice with real opportunities.</p>
          </div>
          <Button onClick={() => setIsJobDialogOpen(true)} size="lg" className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            Add Your Own Job
          </Button>
        </CardContent>
      </Card>

      {/* Search/Filter Form */}
      <Card>
        <CardHeader>
          <CardTitle>Browse AI Startup Engineering Roles</CardTitle>
          <CardDescription>Real-world software engineering positions at YC-backed AI companies</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="grid gap-2">
            <Label htmlFor="search">Search Jobs</Label>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="search" 
                placeholder="Search by role or company" 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="filter">Role Type</Label>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger id="filter">
                <SelectValue placeholder="All roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="fullstack">Full-Stack</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="platform">Platform/DevOps</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm text-muted-foreground">Results</Label>
            <div className="flex items-center h-10">
              <Badge variant="secondary" className="text-sm">
                {filteredJobs.length} positions found
              </Badge>
            </div>
          </div>
          <div className="flex items-end">
            <Button className="w-full" onClick={() => {setSearchTerm(""); setSelectedFilter("all");}}>
              <BriefcaseIcon className="mr-2 h-4 w-4" /> Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* List of Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => {
          const company = allCompanies.find(c => c.id === job.companyId) || allCompanies[0]
          return (
            <Card key={job.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                      {job.isCustom && <CustomJobBadge size="sm" />}
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <span className="text-base">{company.logo}</span>
                      <Building2Icon className="h-4 w-4" /> 
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">{company.stage}</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPinIcon className="h-4 w-4" /> 
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <DollarSignIcon className="h-4 w-4" /> 
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ClockIcon className="h-4 w-4" /> 
                    Posted {job.posted}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <UsersIcon className="h-4 w-4" /> 
                    {job.applicants} applicants
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">{job.snippet}</p>
                <div className="flex flex-wrap gap-1">
                  {job.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {job.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs">+{job.techStack.length - 4}</Badge>
                  )}
                </div>
              </CardContent>
              <div className="p-6 pt-0 space-y-2">
                <Button className="w-full" onClick={() => handleViewDetails(job)}>
                  View Details & Apply
                </Button>
                <div className="text-xs text-center text-muted-foreground">
                  {job.experience} • {job.type}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Dialog open={isJobDetailsModalOpen} onOpenChange={setIsJobDetailsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div>
                <DialogTitle className="text-xl">{selectedJob?.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="text-base">{selectedCompany?.logo}</span>
                    <Building2Icon className="h-4 w-4" /> 
                    {selectedJob?.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    {selectedJob?.location}
                  </div>
                  <Badge variant="outline">{selectedCompany?.stage}</Badge>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          
          <Tabs defaultValue="description" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Job Details</TabsTrigger>
              <TabsTrigger value="company">Company Info</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="interview">Interview Prep</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Position Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Salary</p>
                      <p className="font-medium">{selectedJob?.salary}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Experience</p>
                      <p className="font-medium">{selectedJob?.experience}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium">{selectedJob?.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Posted</p>
                      <p className="font-medium">{selectedJob?.posted}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities</h4>
                    <ul className="space-y-1">
                      {selectedJob?.responsibilities?.map((resp: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="company" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About {selectedCompany?.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{selectedCompany?.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Founded</p>
                      <p className="font-medium">{selectedCompany?.founded}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Team Size</p>
                      <p className="font-medium">{selectedCompany?.size} employees</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-medium">{selectedCompany?.location}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Website</p>
                      <p className="font-medium">{selectedCompany?.website}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedCompany?.techStack.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-2">AI Technologies</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedCompany?.aiTech.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="requirements" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What We're Looking For</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Required Skills</h4>
                    <ul className="space-y-1">
                      {selectedJob?.requirements?.map((req: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedJob?.niceToHave && (
                    <div>
                      <h4 className="font-semibold mb-2">Nice to Have</h4>
                      <ul className="space-y-1">
                        {selectedJob.niceToHave.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-muted-foreground mt-0.5">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack Match</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedJob?.techStack.map((tech: string) => (
                        <Badge key={tech} variant="default" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {Math.floor(Math.random() * 20) + 80}% match with your skills
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="interview" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interview Preparation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What to Expect</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Technical Screen</Badge>
                        <span className="text-muted-foreground">45 min coding + system design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Team Interview</Badge>
                        <span className="text-muted-foreground">Cultural fit + project discussion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Final Round</Badge>
                        <span className="text-muted-foreground">Founder/CTO conversation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Topics to Review</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Badge variant="secondary">React/Next.js patterns</Badge>
                      <Badge variant="secondary">API design</Badge>
                      <Badge variant="secondary">Database optimization</Badge>
                      <Badge variant="secondary">AI integration best practices</Badge>
                      <Badge variant="secondary">System scalability</Badge>
                      <Badge variant="secondary">Cost optimization</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Pro Tips for {selectedCompany?.name}</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Show genuine interest in {selectedCompany?.description.toLowerCase()}</li>
                      <li>• Prepare questions about their {selectedCompany?.aiTech[0]} implementation</li>
                      <li>• Discuss scaling challenges relevant to {selectedCompany?.stage} stage</li>
                      <li>• Have examples ready of {selectedJob?.techStack.slice(0, 2).join(' and ')} projects</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex gap-2 mt-6">
            <Button asChild className="flex-1">
              <Link href={`/interview/mock-room?job=${selectedJob?.id}`}>
                <ArrowRightIcon className="mr-2 h-4 w-4" /> Practice Interview
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/apply/resume-builder">
                Tailor Resume
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
