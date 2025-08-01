import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FileTextIcon, MailIcon, BriefcaseIcon, MicIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-background to-muted rounded-lg shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Prepare for AI Startup Jobs with YC Backing
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          AI Prep Hub empowers engineers by simplifying job preparation for early-stage AI startups. Craft tailored
          resumes, generate personalized emails, and practice interviews with AI-generated job postings.
        </p>
        <Button size="lg" asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </section>

      {/* Two-Section Layout */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <FileTextIcon className="h-5 w-5 text-primary" />
              Stage 1: Applying to AI Startups
            </CardTitle>
            <CardDescription>Craft tailored resumes and personalized emails to stand out.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <FileTextIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Resume Builder</h3>
                <p className="text-sm text-muted-foreground">Customize your resume for specific AI roles.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <MailIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email Crafter</h3>
                <p className="text-sm text-muted-foreground">Generate human-like emails based on job details.</p>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/apply/resume-builder">Start Applying</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <MicIcon className="h-5 w-5 text-primary" />
              Stage 2: Preparing for Interviews
            </CardTitle>
            <CardDescription>Browse AI-generated job postings and practice mock interviews.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Job Listings</h3>
                <p className="text-sm text-muted-foreground">Explore AI-generated job postings mimicking real roles.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                <MicIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Mock Room</h3>
                <p className="text-sm text-muted-foreground">Simulate interviews with flexible input/output modes.</p>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/interview/job-listings">Start Interview Prep</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-12 bg-muted rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your AI Career?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join AI Prep Hub today and simplify your job preparation journey.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button type="submit">Sign Up (Dummy)</Button>
        </div>
      </section>
    </div>
  )
}
