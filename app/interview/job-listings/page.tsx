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
import { StageIndicator } from "@/components/stage-indicator"
import { SearchIcon, BriefcaseIcon, MapPinIcon, Building2Icon, ArrowRightIcon } from "lucide-react"

export default function JobListingsPage() {
  const [isJobDetailsModalOpen, setIsJobDetailsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const dummyJobs = [
    {
      id: "1",
      title: "ML Engineer at YC AI Startup",
      company: "Generated Startup X",
      location: "Remote",
      snippet: "Develop and deploy machine learning models for cutting-edge AI products...",
      fullDescription: `
**Responsibilities:**
- Design, develop, and deploy machine learning models and algorithms.
- Build and maintain scalable data pipelines for AI applications.
- Collaborate with research scientists and product teams to integrate AI solutions.
- Optimize existing models for performance and efficiency.
- Stay up-to-date with the latest advancements in AI/ML.

**Requirements:**
- 2+ years of experience in machine learning engineering.
- Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch).
- Experience with cloud platforms (AWS, GCP, Azure) and MLOps practices.
- Solid understanding of data structures, algorithms, and software design.
- Bachelor's or Master's degree in Computer Science, AI, or related field.

**About Generated Startup X:**
We are a fast-growing YC-backed AI startup building the next generation of intelligent systems for [specific industry, e.g., healthcare, finance]. Our mission is to [dummy mission statement]. We foster a culture of innovation, collaboration, and continuous learning.
      `,
    },
    {
      id: "2",
      title: "AI Research Scientist (NLP Focus)",
      company: "InnovateAI Labs",
      location: "San Francisco, CA",
      snippet: "Conduct research in natural language processing, develop novel NLP models...",
      fullDescription: `
**Responsibilities:**
- Conduct cutting-edge research in natural language processing (NLP) and related AI fields.
- Develop and implement novel NLP models and algorithms.
- Publish research findings in top-tier conferences and journals.
- Collaborate with engineering teams to transition research prototypes into production.
- Mentor junior researchers and contribute to the scientific community.

**Requirements:**
- Ph.D. in Computer Science, AI, Linguistics, or a related field with a focus on NLP.
- Strong publication record in major NLP/AI conferences (e.g., ACL, EMNLP, NeurIPS).
- Expertise in deep learning frameworks (e.g., PyTorch, TensorFlow) and Python.
- Experience with large-scale language models and generative AI.
- Excellent communication and collaboration skills.

**About InnovateAI Labs:**
InnovateAI Labs is a YC-backed startup pushing the boundaries of AI research, particularly in natural language understanding and generation. We are a team of passionate researchers and engineers dedicated to solving complex real-world problems with AI.
      `,
    },
    {
      id: "3",
      title: "Fullstack AI Developer",
      company: "Synergy AI",
      location: "New York, NY (Hybrid)",
      snippet: "Build end-to-end AI-powered applications, from backend services to frontend UIs...",
      fullDescription: `
**Responsibilities:**
- Develop and maintain full-stack applications with integrated AI capabilities.
- Design and implement robust APIs for AI model serving.
- Build responsive and intuitive user interfaces using modern frontend frameworks.
- Work closely with AI/ML engineers to deploy and integrate models.
- Ensure application scalability, security, and performance.

**Requirements:**
- 3+ years of experience in full-stack development.
- Proficiency in a backend language (e.g., Node.js, Python) and a frontend framework (e.g., React, Next.js).
- Experience integrating with AI/ML models or APIs.
- Familiarity with database systems (SQL/NoSQL) and cloud services.
- Strong problem-solving skills and ability to work across the stack.

**About Synergy AI:**
Synergy AI is a YC-backed startup focused on creating intelligent software solutions that enhance productivity and decision-making for businesses. We believe in a holistic approach to AI development, combining robust engineering with cutting-edge machine learning.
      `,
    },
  ]

  const handleViewDetails = (job: any) => {
    setSelectedJob(job)
    setIsJobDetailsModalOpen(true)
  }

  return (
    <div className="space-y-8">
      <StageIndicator stage="Stage 2" title="Browse AI-Generated Job Postings for Practice" />

      {/* Search/Filter Form */}
      <Card>
        <CardHeader>
          <CardTitle>Find Practice Jobs</CardTitle>
          <CardDescription>Generate dummy job postings to simulate real-world roles.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="role" placeholder="e.g., AI Engineer, ML Scientist" className="pl-9" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="skills">Skills / Startup Type</Label>
            <Select>
              <SelectTrigger id="skills">
                <SelectValue placeholder="Select filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="llm">LLM / Generative AI</SelectItem>
                <SelectItem value="cv">Computer Vision</SelectItem>
                <SelectItem value="nlp">Natural Language Processing</SelectItem>
                <SelectItem value="fintech">AI in Fintech</SelectItem>
                <SelectItem value="healthtech">AI in Healthtech</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full">
              <BriefcaseIcon className="mr-2 h-4 w-4" /> Generate Jobs (Dummy)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* List of Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyJobs.map((job) => (
          <Card key={job.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{job.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Building2Icon className="h-4 w-4" /> {job.company}
              </CardDescription>
              <CardDescription className="flex items-center gap-1">
                <MapPinIcon className="h-4 w-4" /> {job.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground line-clamp-3">{job.snippet}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full" onClick={() => handleViewDetails(job)}>
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isJobDetailsModalOpen} onOpenChange={setIsJobDetailsModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedJob?.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-1">
              <Building2Icon className="h-4 w-4" /> {selectedJob?.company} &bull; <MapPinIcon className="h-4 w-4" />{" "}
              {selectedJob?.location}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="job-description-full">Full Job Description</Label>
            <Textarea
              id="job-description-full"
              readOnly
              rows={15}
              defaultValue={selectedJob?.fullDescription}
              className="font-mono text-sm"
            />
          </div>
          <Button asChild className="w-full">
            <Link href={`/interview/mock-room?job=${selectedJob?.id}`}>
              <ArrowRightIcon className="mr-2 h-4 w-4" /> Start Mock Interview
            </Link>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
