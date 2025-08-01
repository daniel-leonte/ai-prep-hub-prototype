"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"
import { 
  MoreHorizontalIcon, 
  EditIcon, 
  TrashIcon, 
  ExternalLinkIcon,
  Building2Icon,
  MapPinIcon,
  CalendarIcon
} from "lucide-react"
import { CustomJobBadge } from "./CustomJobBadge"
import { mockCustomJobs } from "@/lib/mockData"

interface JobManagementProps {
  className?: string
}

export function JobManagement({ className }: JobManagementProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [jobToDelete, setJobToDelete] = useState<any>(null)

  const handleEdit = (job: any) => {
    // Mock edit functionality
    console.log("Edit job:", job)
  }

  const handleDelete = (job: any) => {
    setJobToDelete(job)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // Mock delete functionality
    console.log("Delete job:", jobToDelete)
    setDeleteDialogOpen(false)
    setJobToDelete(null)
  }

  const handleViewOriginal = (job: any) => {
    // Mock view original posting
    console.log("View original:", job)
  }

  return (
    <div className={className}>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Your Custom Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          {mockCustomJobs.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-sm">No custom jobs added yet.</p>
              <p className="text-xs mt-1">Use the "Add Job" button to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {mockCustomJobs.map((job) => (
                <div key={job.id} className="flex items-start justify-between p-3 border rounded-lg hover:bg-muted/50">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm">{job.title}</h4>
                      <CustomJobBadge size="sm" />
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2Icon className="h-3 w-3" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-3 w-3" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>Added {job.addedDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {job.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {job.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 ml-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleEdit(job)}
                      className="h-8 px-2"
                    >
                      <EditIcon className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleViewOriginal(job)}
                      className="h-8 px-2"
                    >
                      <ExternalLinkIcon className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDelete(job)}
                      className="h-8 px-2 text-destructive hover:text-destructive"
                    >
                      <TrashIcon className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Custom Job</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{jobToDelete?.title}" at {jobToDelete?.company}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete Job
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}