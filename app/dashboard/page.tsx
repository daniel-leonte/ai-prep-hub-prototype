import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StageIndicator } from "@/components/stage-indicator"
import Link from "next/link"
import { FileTextIcon, MailIcon, BriefcaseIcon, MicIcon } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <StageIndicator stage="Dashboard" title="Overview" />

      {/* Progress Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resumes Created</CardTitle>
            <FileTextIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Tailored for specific roles</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails Generated</CardTitle>
            <MailIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Personalized outreach</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Practiced</CardTitle>
            <MicIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Simulated mock sessions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Explored</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">AI-generated postings</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick-Start Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button asChild>
            <Link href="/apply/resume-builder">
              <FileTextIcon className="mr-2 h-4 w-4" /> Build Resume
            </Link>
          </Button>
          <Button asChild>
            <Link href="/apply/email-crafter">
              <MailIcon className="mr-2 h-4 w-4" /> Craft Email
            </Link>
          </Button>
          <Button asChild>
            <Link href="/interview/job-listings">
              <BriefcaseIcon className="mr-2 h-4 w-4" /> Browse Jobs
            </Link>
          </Button>
          <Button asChild>
            <Link href="/interview/mock-room">
              <MicIcon className="mr-2 h-4 w-4" /> Start Mock Interview
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity & Progress Tabs */}
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="progress">Progress History</TabsTrigger>
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Tailored resume for AI Engineer role</TableCell>
                    <TableCell>2025-07-30</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Practiced interview for Startup Y (Text Mode)</TableCell>
                    <TableCell>2025-07-29</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Generated email for Founder Z</TableCell>
                    <TableCell>2025-07-28</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Explored ML Engineer job posting</TableCell>
                    <TableCell>2025-07-27</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Progress History</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="stage1" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="stage1">Stage 1 Progress</TabsTrigger>
                  <TabsTrigger value="stage2">Stage 2 Progress</TabsTrigger>
                </TabsList>
                <TabsContent value="stage1">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Application Item</TableHead>
                        <TableHead>Count</TableHead>
                        <TableHead>Last Used</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Resumes Tailored</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>N/A</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Emails Crafted</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>N/A</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="stage2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Interview Item</TableHead>
                        <TableHead>Count</TableHead>
                        <TableHead>Last Practiced</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Jobs Explored</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>N/A</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mock Interviews</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>N/A</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
