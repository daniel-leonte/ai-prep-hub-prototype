"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  MapPinIcon, 
  DollarSignIcon, 
  ClockIcon, 
  UsersIcon,
  Building2Icon,
  EditIcon,
  CheckCircleIcon
} from "lucide-react"
import { CustomJobBadge } from "./CustomJobBadge"

interface JobPreviewProps {
  job: {
    title: string
    company: string
    location: string
    salary: string
    posted: string
    applicants: string
    snippet: string
    techStack: string[]
    requirements: string[]
    logo?: string
  }
  onEdit?: () => void
  onSave?: (options: { forResume: boolean; forEmail: boolean; forInterview: boolean }) => void
  showSaveOptions?: boolean
  originalText?: string
}

export function JobPreview({ job, onEdit, onSave, showSaveOptions = true, originalText }: JobPreviewProps) {
  const handleSave = () => {
    if (onSave) {
      onSave({
        forResume: true,
        forEmail: true, 
        forInterview: true
      })
    }
  }

  return (
    <div className="space-y-4">
      {/* Before/After Comparison - only show if originalText is provided */}
      {originalText && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              AI Parsing Complete
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Original Text</h4>
                <div className="p-3 bg-muted/50 rounded-lg max-h-48 overflow-y-auto">
                  <pre className="text-xs font-mono whitespace-pre-wrap text-muted-foreground">
                    {originalText.substring(0, 500)}
                    {originalText.length > 500 && "..."}
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-green-700">Extracted Data</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Title:</span>
                    <span className="text-green-700">{job.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Company:</span>
                    <span className="text-green-700">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Location:</span>
                    <span className="text-green-700">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Salary:</span>
                    <span className="text-green-700">{job.salary}</span>
                  </div>
                  <div>
                    <span className="font-medium">Tech Stack:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {job.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Job Overview Card */}
      <Card className="border-l-4 border-primary">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <CustomJobBadge />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-base">{job.logo || "🏢"}</span>
                <Building2Icon className="h-4 w-4" />
                <span>{job.company}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onEdit}>
              <EditIcon className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-muted-foreground" />
              <span>Posted {job.posted}</span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
              <span>{job.applicants} applicants</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">{job.snippet}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-1">
              {job.techStack.slice(0, 6).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {job.techStack.length > 6 && (
                <Badge variant="outline" className="text-xs">
                  +{job.techStack.length - 6}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Options */}
      {showSaveOptions && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Save for Platform Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Resume Builder</Label>
                  <p className="text-xs text-muted-foreground">Use for tailored resume creation</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Email Crafter</Label>
                  <p className="text-xs text-muted-foreground">Generate personalized outreach emails</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Interview Practice</Label>
                  <p className="text-xs text-muted-foreground">Practice with job-specific questions</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <Button className="w-full" onClick={handleSave}>
              <CheckCircleIcon className="mr-2 h-4 w-4" />
              Save Job to Platform
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}