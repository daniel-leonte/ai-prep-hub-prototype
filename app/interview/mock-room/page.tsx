"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StageIndicator } from "@/components/stage-indicator"
import {
  MessageSquareIcon,
  MicIcon,
  SendIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightbulbIcon,
  ListChecksIcon,
  ClockIcon,
  StarIcon,
  BookOpenIcon,
  CodeIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { mockJobListings, mockCustomJobs, mockInterviewQuestions, mockInterviewFeedback, mockAIStartups, mockCustomCompanies } from "@/lib/mockData"

type Message = {
  id: string
  sender: "user" | "ai"
  text: string
}

export default function MockRoomPage() {
  const searchParams = useSearchParams()
  const jobId = searchParams.get("job") || "1" // Default to job 1 if not specified
  
  // Combine regular jobs with custom jobs
  const allJobs = [...mockJobListings, ...mockCustomJobs]
  const allCompanies = [...mockAIStartups, ...mockCustomCompanies]
  
  const selectedJob = allJobs.find(job => job.id === jobId) || allJobs[0]
  const selectedCompany = allCompanies.find(c => c.id === selectedJob.companyId) || allCompanies[0]
  const selectedJobTitle = selectedJob.title

  const [mode, setMode] = useState<"text" | "audio">("text")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [interviewPhase, setInterviewPhase] = useState<"intro" | "technical" | "behavioral" | "wrap-up">("intro")
  const [showHints, setShowHints] = useState(false)
  
  const getInitialMessage = () => {
    return `Welcome to your mock interview for the ${selectedJobTitle} position at ${selectedCompany.name}! I'm excited to learn about your background and discuss how you'd approach technical challenges in our ${selectedCompany.description.toLowerCase()}.

Let's start with an easy one: Tell me about yourself and what interests you about working at ${selectedCompany.name}.`
  }
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: getInitialMessage(),
    },
  ])
  const [userMessage, setUserMessage] = useState("")
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const newUserMessage: Message = {
        id: String(messages.length + 1),
        sender: "user",
        text: userMessage.trim(),
      }
      setMessages((prev) => [...prev, newUserMessage])
      setUserMessage("")

      // Simulate AI response with contextual questions
      setTimeout(() => {
        let aiText = ""
        const questionTypes = mockInterviewQuestions.technical.concat(mockInterviewQuestions.behavioral)
        
        if (messages.length < 4) {
          // Early questions
          const earlyQuestions = [
            `That's great background! Now, let's dive into something more technical. How would you approach building a ${selectedJob.techStack[0]} application that needs to integrate with AI APIs like OpenAI's GPT models?`,
            `Interesting! Can you walk me through how you would handle rate limiting and cost optimization when working with AI APIs at scale?`,
            `Tell me about a time you had to debug a performance issue in a web application. What was your approach?`
          ]
          aiText = earlyQuestions[messages.length % earlyQuestions.length]
        } else if (messages.length < 8) {
          // System design questions
          aiText = `Let's talk system design. If you were to build a real-time chat system like we use at ${selectedCompany.name}, how would you architect it to handle thousands of concurrent users?`
        } else {
          // Wrap up questions
          aiText = "Great technical discussion! Do you have any questions about our engineering culture at " + selectedCompany.name + " or the technical challenges we're working on?"
        }
        
        const aiResponse: Message = {
          id: String(messages.length + 2),
          sender: "ai",
          text: aiText,
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 1500)
    }
  }

  const handleEndInterview = () => {
    setIsFeedbackModalOpen(true)
  }

  return (
    <div className="space-y-8">
      <StageIndicator stage="Stage 2" title={`Simulated Interview for ${selectedJobTitle}`} />

      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" asChild>
          <Link href="/interview/job-listings">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Job Listings
          </Link>
        </Button>
        <ToggleGroup
          type="single"
          value={mode}
          onValueChange={(value: "text" | "audio") => value && setMode(value)}
          className="flex-shrink-0"
        >
          <ToggleGroupItem value="text" aria-label="Toggle text mode">
            <MessageSquareIcon className="h-4 w-4 mr-2" /> Text Mode
          </ToggleGroupItem>
          <ToggleGroupItem value="audio" aria-label="Toggle audio mode">
            <MicIcon className="h-4 w-4 mr-2" /> Audio Mode
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Card className="h-[60vh] flex flex-col">
        <CardHeader>
          <CardTitle>Interview Simulation</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col overflow-hidden">
          {mode === "text" ? (
            <div className="flex-1 overflow-y-auto p-4 space-y-4 border rounded-md bg-muted/20">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex", msg.sender === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[70%] p-3 rounded-lg",
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground",
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-4 space-y-4 border rounded-md bg-muted/20">
              <MicIcon className="h-16 w-16 text-primary animate-pulse" />
              <p className="text-lg font-semibold text-muted-foreground">Speak Now...</p>
              <div className="w-full h-12 bg-primary/10 rounded-full flex items-center justify-center text-sm text-primary font-medium">
                <div
                  className="w-3/4 h-2 bg-primary rounded-full animate-pulse"
                  style={{
                    transformOrigin: "left",
                    animationDuration: "1.5s",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></div>
                <span className="ml-2">Recording... (Dummy Waveform)</span>
              </div>
              <Textarea
                readOnly
                rows={5}
                placeholder="Dummy Transcript: User: My experience is... AI: Next question..."
                defaultValue="User: My experience with LLMs includes fine-tuning models for specific tasks and deploying them in production environments. I've worked with both open-source models like Llama and proprietary APIs. AI: That's interesting. Can you elaborate on a specific project where you fine-tuned an LLM?"
                className="w-full mt-4"
              />
            </div>
          )}
          <div className="mt-4 flex gap-2">
            <Textarea
              placeholder={
                mode === "text" ? "Type your response..." : "Audio input is active. Transcript will appear here."
              }
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              rows={1}
              className="flex-1 resize-none"
              disabled={mode === "audio"}
            />
            <Button onClick={handleSendMessage} disabled={mode === "audio" || !userMessage.trim()}>
              <SendIcon className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" variant="destructive" onClick={handleEndInterview}>
        End Interview - Press to see feedback (Dummy)
      </Button>

      <Dialog open={isFeedbackModalOpen} onOpenChange={setIsFeedbackModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Interview Feedback for {selectedJobTitle}</DialogTitle>
            <DialogDescription>
              Comprehensive analysis of your performance interviewing for {selectedCompany.name}
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Feedback</TabsTrigger>
              <TabsTrigger value="improvement">Improvement Plan</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-4 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Overall Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold text-primary">{mockInterviewFeedback.overall.score}%</div>
                      <div className="flex-1">
                        <Progress value={mockInterviewFeedback.overall.score} className="mb-2" />
                        <Badge variant="secondary">{mockInterviewFeedback.overall.recommendation}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{mockInterviewFeedback.overall.summary}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Time Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Technical Questions</span>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">12 min</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Behavioral Questions</span>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">8 min</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">System Design</span>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">15 min</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Skill Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Technical Skills</span>
                        <div className="flex items-center gap-2">
                          <Progress value={88} className="w-16" />
                          <span className="text-sm font-medium">88%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Communication</span>
                        <div className="flex items-center gap-2">
                          <Progress value={82} className="w-16" />
                          <span className="text-sm font-medium">82%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Problem Solving</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-16" />
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Culture Fit</span>
                        <div className="flex items-center gap-2">
                          <Progress value={90} className="w-16" />  
                          <span className="text-sm font-medium">90%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interviewer Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">{mockInterviewFeedback.interviewerNotes.overall}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="detailed" className="mt-4">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="strengths">
                  <AccordionTrigger className="text-base">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-green-500" /> Strengths
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {mockInterviewFeedback.strengths.map((strength, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="font-semibold text-green-700">{strength.area}</h4>
                          <p className="text-sm text-muted-foreground">{strength.feedback}</p>
                          <ul className="text-sm space-y-1">
                            {strength.examples.map((example, eidx) => (
                              <li key={eidx} className="flex items-start gap-2">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="areas-to-improve">
                  <AccordionTrigger className="text-base">
                    <XCircleIcon className="mr-2 h-5 w-5 text-orange-500" /> Areas to Improve
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {mockInterviewFeedback.areasToImprove.map((area, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="font-semibold text-orange-700">{area.area}</h4>
                          <p className="text-sm text-muted-foreground">{area.feedback}</p>
                          <div>
                            <p className="text-sm font-medium mb-1">Suggestions:</p>
                            <ul className="text-sm space-y-1">
                              {area.suggestions.map((suggestion, sidx) => (
                                <li key={sidx} className="flex items-start gap-2">
                                  <LightbulbIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span>{suggestion}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="specific-feedback">
                  <AccordionTrigger className="text-base">
                    <StarIcon className="mr-2 h-5 w-5 text-blue-500" /> Round-by-Round Feedback
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Technical Round</h4>
                        <p className="text-sm text-muted-foreground">{mockInterviewFeedback.interviewerNotes.technicalRound}</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">System Design</h4>
                        <p className="text-sm text-muted-foreground">{mockInterviewFeedback.interviewerNotes.systemDesign}</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Behavioral Questions</h4>
                        <p className="text-sm text-muted-foreground">{mockInterviewFeedback.interviewerNotes.behavioral}</p>  
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="improvement" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Steps for Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Immediate Action Items</h4>
                      <div className="space-y-2">
                        {mockInterviewFeedback.nextSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg">
                            <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                              {idx + 1}
                            </div>
                            <p className="text-sm">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">For {selectedCompany.name} Specifically</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Study their tech blog to understand their engineering challenges</li>
                        <li>• Practice explaining how you'd scale systems to handle {selectedCompany.size}+ employees</li>
                        <li>• Prepare questions about their {selectedCompany.aiTech[0]} implementation</li>
                        <li>• Research their recent {selectedCompany.stage} funding and growth plans</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpenIcon className="h-5 w-5" />
                      Learning Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockInterviewFeedback.resources.map((resource, idx) => (
                        <div key={idx} className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm">{resource.title}</p>
                              <p className="text-xs text-muted-foreground">{resource.type}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CodeIcon className="h-5 w-5" />
                      Practice Next
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/interview/job-listings">
                          Practice with Different Role
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/apply/resume-builder">
                          Update Resume Based on Feedback
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <Link href="/apply/email-crafter">
                          Craft Follow-up Email
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Schedule 1:1 Mock Interview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex gap-2 mt-6">
            <Button className="flex-1" onClick={() => setIsFeedbackModalOpen(false)}>
              <ListChecksIcon className="mr-2 h-4 w-4" /> Save Feedback & Continue
            </Button>
            <Button variant="outline">
              Share with Mentor
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
