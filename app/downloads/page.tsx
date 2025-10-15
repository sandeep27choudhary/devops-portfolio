"use client"

import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Sparkles } from "lucide-react"

const downloadContent = {
  id: "ai-product-architect-prompt",
  title: "AI Product Architect & DevOps Strategist Prompt",
  description: "Complete prompt for generating product requirements and AI-assisted development plans using low-code/no-code platforms",
  category: "AI Prompts",
  date: "2025-01-15",
  content: `You are an expert product architect, DevOps strategist, and AI solution designer. Your job is to create a complete and easy-to-execute plan for building a digital product using low-code, no-code, or AI-assisted platforms.

Context:
A client wants to build a web or mobile application in the [insert domain or business type: e.g., eCommerce, EdTech, Healthcare, SaaS, Booking, Portfolio, etc.] space. The focus is on minimum effort, cost, and maintenance, using AI-generated or drag-and-drop tools instead of traditional coding.

Tasks:
Generate a detailed Requirement Document covering:
• Project Overview
• Goals & Objectives
• Key Features (functional & non-functional)
• Technical Architecture (based on low-code/no-code stack)
• AI Integrations (content, automation, analytics)
• Integration & Hosting options
• Cost Estimation (platform, AI tools, hosting)
• Phased Delivery Plan (timeline & milestones)
• Maintenance and scalability notes
• Future enhancement suggestions

Create ready-to-use AI prompts for tools like:
• Lovable.dev / V0.dev: to auto-generate full-stack apps
• Framer / Webflow: for landing pages and storefronts
• Bubble / Glide / Softr: for app logic and automation
• Zapier / Make / n8n: for backend workflows
• OpenAI / ChatGPT: for AI content (product descriptions, FAQs, etc.)

Provide step-by-step execution plan, including:
• How to set up each platform
• How to connect tools together
• How to customize branding, payment, and domain
• How to launch and maintain with minimal tech overhead

Make it dynamic: The response should automatically adapt to the provided domain or business type, suggesting the best tech stack and tools for that niche.

Tone: Professional, instructive, and easy for a non-technical founder to follow.

Example input:
"Create requirements and tool prompts for a low-code eCommerce app selling handmade products."

Expected output:
• A complete client-ready Requirement Document
• Prompts for AI tools (Lovable.dev, Framer, Bubble, Zapier)
• Step-by-step instructions for setup and launch
• Estimated cost and maintenance guide`,
}

export default function DownloadsPage() {
  const handleDownload = () => {
    // Create a formatted text document
    const content = `${downloadContent.title}
${'='.repeat(downloadContent.title.length)}

Category: ${downloadContent.category}
Date: ${downloadContent.date}

${downloadContent.description}

${'='.repeat(80)}

${downloadContent.content}

${'='.repeat(80)}

Downloaded from: DuhOps World (https://www.duhops.world)
`

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'AI-Product-Architect-Prompt.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <Download className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Downloads</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Free resources, prompts, and tools to accelerate your DevOps and AI journey
        </p>
      </div>

      {/* Downloads Grid */}
      <div className="space-y-6">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-b">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{downloadContent.category}</span>
                  <span className="text-sm text-muted-foreground">• {downloadContent.date}</span>
                </div>
                <CardTitle className="text-2xl mb-2">{downloadContent.title}</CardTitle>
                <CardDescription className="text-base">
                  {downloadContent.description}
                </CardDescription>
              </div>
              <FileText className="h-12 w-12 text-muted-foreground/30" />
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            {/* Preview of content */}
            <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border/40">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Preview
              </h3>
              <div className="text-sm text-muted-foreground space-y-2 max-h-64 overflow-y-auto">
                <p className="font-medium text-foreground">What's included:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Complete AI prompt for product architecture</li>
                  <li>Low-code/No-code platform recommendations</li>
                  <li>AI tool integration strategies (Lovable.dev, V0.dev, Framer, Bubble, etc.)</li>
                  <li>Step-by-step execution plan</li>
                  <li>Cost estimation guidelines</li>
                  <li>Maintenance and scalability notes</li>
                </ul>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Format: <span className="font-medium text-foreground">Text (.txt)</span>
              </div>
              <Button onClick={handleDownload} size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Free
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg">More Resources Coming Soon!</h3>
              <p className="text-muted-foreground">
                Stay tuned for more DevOps templates, AI prompts, and automation scripts.
                Subscribe to our YouTube channel to get notified when new resources are available.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

