"use client"

import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Sparkles, Github, ExternalLink } from "lucide-react"

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

      {/* Downloads Grid - Matrix Layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* n8n Workflows Repository */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-primary/20 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-b">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-green-500/20 p-4">
                <Github className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">500+ Workflows</span>
              </div>
              <CardTitle className="text-xl mb-2">n8n Workflow Collection</CardTitle>
              <CardDescription className="text-sm">
                Curated automation templates for AI, integrations, and workflows
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 flex-1 flex flex-col">
            {/* Categories Preview */}
            <div className="mb-6 flex-1">
              <div className="text-xs text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Categories:</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 bg-muted rounded-full text-xs">🤖 AI & Research</span>
                  <span className="px-2 py-1 bg-muted rounded-full text-xs">📧 Communication</span>
                  <span className="px-2 py-1 bg-muted rounded-full text-xs">📊 Data Storage</span>
                  <span className="px-2 py-1 bg-muted rounded-full text-xs">🌐 Social Media</span>
                  <span className="px-2 py-1 bg-muted rounded-full text-xs">👥 Business Ops</span>
                </div>
              </div>
            </div>

            {/* Repository Link */}
            <div className="mt-auto">
              <Button asChild size="default" className="w-full gap-2">
                <a 
                  href="https://github.com/sandeep27choudhary/n8n-workflow-duhops-world"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Prompt Download */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-b">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-purple-500/20 p-4">
                <Sparkles className="h-10 w-10 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{downloadContent.category}</span>
              </div>
              <CardTitle className="text-xl mb-2">AI Product Architect Prompt</CardTitle>
              <CardDescription className="text-sm">
                Complete prompt for AI-assisted product development and low-code platforms
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 flex-1 flex flex-col">
            {/* Preview of content */}
            <div className="mb-6 flex-1">
              <div className="text-xs text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Includes:</p>
                <ul className="space-y-1 text-xs">
                  <li>✓ Product architecture prompts</li>
                  <li>✓ Low-code/No-code recommendations</li>
                  <li>✓ AI tool integration strategies</li>
                  <li>✓ Execution plans & cost estimates</li>
                </ul>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-auto">
              <Button onClick={handleDownload} size="default" className="w-full gap-2">
                <Download className="h-4 w-4" />
                Download Free
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Agentic Design Patterns */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-primary/20 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-b">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-orange-500/20 p-4">
                <Sparkles className="h-10 w-10 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full font-medium">AI Knowledge Base</span>
              </div>
              <CardTitle className="text-xl mb-2">Agentic Design Patterns</CardTitle>
              <CardDescription className="text-sm">
                Comprehensive guide to RAG, agent frameworks, and AI production patterns
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 flex-1 flex flex-col">
            {/* Preview of content */}
            <div className="mb-6 flex-1">
              <div className="text-xs text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Knowledge Areas:</p>
                <ul className="space-y-1 text-xs">
                  <li>✓ Retrieval-Augmented Generation (RAG)</li>
                  <li>✓ Structured Data Management</li>
                  <li>✓ Advanced RAG Techniques</li>
                  <li>✓ Agent Development Frameworks</li>
                  <li>✓ AI Production Challenges</li>
                </ul>
              </div>
            </div>

            {/* Link Button */}
            <div className="mt-auto">
              <Button asChild size="default" className="w-full gap-2">
                <a 
                  href="https://notebooklm.google.com/notebook/4485a282-32a7-469f-9acd-16cea5ada755"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Access Knowledge Base
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* DevOps Jumpstart Course */}
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-primary/20 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-b">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-blue-500/20 p-4">
                <FileText className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full font-medium">Complete Guide</span>
              </div>
              <CardTitle className="text-xl mb-2">DevOps Jumpstart Course</CardTitle>
              <CardDescription className="text-sm">
                Module-by-module DevOps learning with GitHub, Docker & AWS
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 flex-1 flex flex-col">
            {/* Preview of content */}
            <div className="mb-6 flex-1">
              <div className="text-xs text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Topics Covered:</p>
                <ul className="space-y-1 text-xs">
                  <li>✓ GitHub & version control</li>
                  <li>✓ Docker containerization</li>
                  <li>✓ AWS cloud infrastructure</li>
                  <li>✓ CI/CD pipelines</li>
                  <li>✓ Hands-on projects</li>
                </ul>
              </div>
            </div>

            {/* Link Button */}
            <div className="mt-auto">
              <Button asChild size="default" className="w-full gap-2">
                <a 
                  href="https://docs.google.com/document/d/1kt3CUVPGcKAWb-idevJ7Ll5Y0PR8GPuQqB6_hNJ7NW8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Access Course
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Section */}
      <div className="mt-12">
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

