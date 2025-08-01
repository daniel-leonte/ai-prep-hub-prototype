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
} from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  sender: "user" | "ai"
  text: string
}

export default function MockRoomPage() {
  const searchParams = useSearchParams()
  const jobId = searchParams.get("job") || "1" // Default to job 1 if not specified

  const dummyJobs = {
    "1": "ML Engineer at YC AI Startup",
    "2": "AI Research Scientist (NLP Focus)",
    "3": "Fullstack AI Developer",
  }
  const selectedJobTitle = dummyJobs[jobId as keyof typeof dummyJobs] || "Selected Job Title"

  const [mode, setMode] = useState<"text" | "audio">("text")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text:
        "Welcome to your mock interview for the " +
        selectedJobTitle +
        " role. Let's begin. Tell me about your experience with large language models (LLMs) and their applications.",
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

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: String(messages.length + 2),
          sender: "ai",
          text: "Thank you for that. Can you describe a challenging technical problem you've faced and how you overcame it?",
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
        End Interview (Dummy)
      </Button>

      <Dialog open={isFeedbackModalOpen} onOpenChange={setIsFeedbackModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Interview Feedback</DialogTitle>
            <DialogDescription>Here's a dummy feedback report for your mock interview.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overall Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">85%</p>
                <p className="text-sm text-muted-foreground">Good performance, room for improvement.</p>
              </CardContent>
            </Card>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="strengths">
                <AccordionTrigger className="text-base">
                  <CheckCircleIcon className="mr-2 h-5 w-5 text-green-500" /> Strengths
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Strong technical knowledge in LLMs and ML concepts.</li>
                    <li>Clear and concise explanations of past projects.</li>
                    <li>Good problem-solving approach demonstrated.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="areas-to-improve">
                <AccordionTrigger className="text-base">
                  <XCircleIcon className="mr-2 h-5 w-5 text-red-500" /> Areas to Improve
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Communication could be more structured when explaining complex ideas.</li>
                    <li>Could provide more specific examples for behavioral questions.</li>
                    <li>Time management during problem-solving sections.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="actionable-steps">
                <AccordionTrigger className="text-base">
                  <LightbulbIcon className="mr-2 h-5 w-5 text-yellow-500" /> Actionable Steps
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Practice explaining projects using the STAR method (Situation, Task, Action, Result).</li>
                    <li>Review common behavioral interview questions and prepare specific anecdotes.</li>
                    <li>Work on mock coding challenges under timed conditions.</li>
                    <li>
                      Try these 3 tips:
                      <ol className="list-decimal list-inside ml-4">
                        <li>Record yourself and listen back for clarity.</li>
                        <li>Practice with a friend or mentor.</li>
                        <li>Focus on one improvement area per mock session.</li>
                      </ol>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Button className="w-full" onClick={() => setIsFeedbackModalOpen(false)}>
            <ListChecksIcon className="mr-2 h-4 w-4" /> Review More Feedback (Dummy)
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
