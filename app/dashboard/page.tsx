"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StageIndicator } from "@/components/stage-indicator"
import Link from "next/link"
import { FileTextIcon, MailIcon, BriefcaseIcon, MicIcon, TrendingUpIcon, CheckCircleIcon, ClockIcon, TargetIcon, PlusIcon } from "lucide-react"
import { mockDashboardMetrics, mockRecentActivity, mockCompletedInterviews, mockUserProfile } from "@/lib/mockData"
import { JobInputDialog } from "@/components/job-input/JobInputDialog"
import { JobManagement } from "@/components/job-input/JobManagement"
import { DemoBadge } from "@/components/ui/demo-badge"

export default function DashboardPage() {
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false)

  const handleJobSaved = (job: any) => {
    // Mock handling of saved job
    console.log("Job saved:", job)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <StageIndicator stage="Dashboard" title="Overview" />
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Welcome back, {mockUserProfile.name}!</h2>
          <Badge variant="secondary">{mockUserProfile.title}</Badge>
        </div>
      </div>

      {/* Progress Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resumes Created</CardTitle>
            <FileTextIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDashboardMetrics.resumesCreated}</div>
            <p className="text-xs text-muted-foreground">Tailored for AI startup roles</p>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails Generated</CardTitle>
            <MailIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDashboardMetrics.emailsGenerated}</div>
            <p className="text-xs text-muted-foreground">Response rate: {mockDashboardMetrics.responseRate}</p>
            <div className="flex items-center mt-2">
              <TrendingUpIcon className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+12% this week</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Practiced</CardTitle>
            <MicIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDashboardMetrics.interviewsPracticed}</div>
            <p className="text-xs text-muted-foreground">Avg score: {mockDashboardMetrics.averageScore}</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications Active</CardTitle>
            <TargetIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDashboardMetrics.applicationsSubmitted}</div>
            <p className="text-xs text-muted-foreground">{mockDashboardMetrics.interviewsScheduled} interviews scheduled</p>
            <div className="flex gap-1 mt-2">
              <Badge variant="outline" className="text-xs">Full-Stack</Badge>
              <Badge variant="outline" className="text-xs">Backend</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick-Start Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <Button onClick={() => setIsJobDialogOpen(true)} variant="outline" className="border-dashed border-2">
              <PlusIcon className="mr-2 h-4 w-4" /> Add Job
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/apply/resume-builder">
                <FileTextIcon className="mr-2 h-4 w-4" /> Build Resume
              </Link>
            </Button>
            <div className="flex justify-center">
              <DemoBadge size="sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/apply/email-crafter">
                <MailIcon className="mr-2 h-4 w-4" /> Craft Email
              </Link>
            </Button>
            <div className="flex justify-center">
              <DemoBadge size="sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/interview/job-listings">
                <BriefcaseIcon className="mr-2 h-4 w-4" /> Browse Jobs
              </Link>
            </Button>
            <div className="flex justify-center">
              <DemoBadge size="sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/interview/mock-room">
                <MicIcon className="mr-2 h-4 w-4" /> Start Mock Interview
              </Link>
            </Button>
            <div className="flex justify-center">
              <DemoBadge size="sm" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity & Progress Tabs */}
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="interviews">Interview History</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockRecentActivity.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {activity.type === "resume" && <FileTextIcon className="h-4 w-4 text-blue-500" />}
                          {activity.type === "email" && <MailIcon className="h-4 w-4 text-green-500" />}
                          {activity.type === "interview" && <MicIcon className="h-4 w-4 text-purple-500" />}
                          {activity.type === "application" && <BriefcaseIcon className="h-4 w-4 text-orange-500" />}
                          <span>{activity.activity}</span>
                        </div>
                      </TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={activity.status === "Completed" ? "default" : 
                                 activity.status === "Pending" ? "secondary" : "outline"}
                        >
                          {activity.status}
                        </Badge>
                        {activity.score && (
                          <Badge variant="outline" className="ml-2">{activity.score}</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="interviews">
          <Card>
            <CardHeader>
              <CardTitle>Interview Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCompletedInterviews.map((interview) => (
                    <TableRow key={interview.id}>
                      <TableCell className="font-medium">{interview.company}</TableCell>
                      <TableCell>{interview.position}</TableCell>
                      <TableCell>{interview.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={interview.score} className="w-16" />
                          <span className="text-sm font-medium">{interview.score}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="success" className="flex items-center gap-1">
                          <CheckCircleIcon className="h-3 w-3" />
                          {interview.result}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insights">
          <div className="grid gap-4">
            {/* Job Management Section */}
            <JobManagement />
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills in Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">React/Next.js</span>
                      <div className="flex items-center gap-2">
                        <Progress value={90} className="w-24" />
                        <span className="text-xs text-muted-foreground">90%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Node.js/Python</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-24" />
                        <span className="text-xs text-muted-foreground">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI API Integration</span>
                      <div className="flex items-center gap-2">
                        <Progress value={75} className="w-24" />
                        <span className="text-xs text-muted-foreground">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Design</span>
                      <div className="flex items-center gap-2">
                        <Progress value={60} className="w-24" />
                        <span className="text-xs text-muted-foreground">60%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <TargetIcon className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Apply to more Backend roles</p>
                        <p className="text-xs text-muted-foreground">Your backend skills match 85% of requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ClockIcon className="h-4 w-4 text-orange-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Practice system design</p>
                        <p className="text-xs text-muted-foreground">Lower scores in architecture questions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Follow up with DataSense</p>
                        <p className="text-xs text-muted-foreground">Interview went well, send thank you email</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <JobInputDialog 
        open={isJobDialogOpen} 
        onOpenChange={setIsJobDialogOpen}
        onJobSaved={handleJobSaved}
      />
    </div>
  )
}
