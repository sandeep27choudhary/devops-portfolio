import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "DuhOps World Videos | DevOps Tutorials & Demos",
  description: "Watch video tutorials and demonstrations on DevOps, AWS, Kubernetes, and cloud infrastructure.",
}

const videos = [
  {
    id: "KRNAVpUbnZQ",
    url: "https://youtu.be/KRNAVpUbnZQ?si=JMgQvCu7PRacu5LP",
    title: "Gemini CLI",
    description: "Explore the powerful Gemini command-line interface and learn how to leverage AI from your terminal",
    category: "AI Tools",
  },
  {
    id: "YJyYyBDcGlg",
    url: "https://youtu.be/YJyYyBDcGlg?si=2Z7fbLooA-AMHO7O",
    title: "AWS Architect AI",
    description: "Discover how AI is transforming AWS architecture and cloud infrastructure design",
    category: "AWS",
  },
  {
    id: "wkX5H4Ibj3A",
    url: "https://youtu.be/wkX5H4Ibj3A?si=4th0QdUznK6KwJ4t",
    title: "NotebookLM Deep Dive",
    description: "A comprehensive deep dive into Google's NotebookLM and its powerful AI-powered note-taking capabilities",
    category: "AI Tools",
  },
  {
    id: "9NMqGAi_yjI",
    url: "https://youtu.be/9NMqGAi_yjI?si=WyF7ss9o4q8_f9QF",
    title: "Host n8n using Cloudflare",
    description: "Step-by-step guide to hosting n8n workflow automation platform using Cloudflare infrastructure",
    category: "Cloudflare",
  },
]

const shorts = [
  {
    id: "W9X6ITg_A1Y",
    url: "https://www.youtube.com/shorts/W9X6ITg_A1Y",
    title: "DevOps Quick Tip #1",
    category: "Shorts",
  },
  {
    id: "9jL0XWdG0vw",
    url: "https://www.youtube.com/shorts/9jL0XWdG0vw",
    title: "DevOps Quick Tip #2",
    category: "Shorts",
  },
  {
    id: "Jv1YQxpeQOs",
    url: "https://www.youtube.com/shorts/Jv1YQxpeQOs",
    title: "DevOps Quick Tip #3",
    category: "Shorts",
  },
  {
    id: "Rvbp4pm7x4M",
    url: "https://www.youtube.com/shorts/Rvbp4pm7x4M",
    title: "DevOps Quick Tip #4",
    category: "Shorts",
  },
  {
    id: "bZs0NJCvJR4",
    url: "https://www.youtube.com/shorts/bZs0NJCvJR4",
    title: "DevOps Quick Tip #5",
    category: "Shorts",
  },
  {
    id: "5LFSihKm3pA",
    url: "https://www.youtube.com/shorts/5LFSihKm3pA",
    title: "DevOps Quick Tip #6",
    category: "Shorts",
  },
  {
    id: "3nbsabaVbYk",
    url: "https://www.youtube.com/shorts/3nbsabaVbYk",
    title: "DevOps Quick Tip #7",
    category: "Shorts",
  },
  {
    id: "sxzliJhZpFI",
    url: "https://www.youtube.com/shorts/sxzliJhZpFI",
    title: "DevOps Quick Tip #8",
    category: "Shorts",
  },
  {
    id: "bYg02X8WDO8",
    url: "https://www.youtube.com/shorts/bYg02X8WDO8",
    title: "DevOps Quick Tip #9",
    category: "Shorts",
  },
  {
    id: "UB9azX-ypXk",
    url: "https://www.youtube.com/shorts/UB9azX-ypXk",
    title: "DevOps Quick Tip #10",
    category: "Shorts",
  },
]

export default function VideosPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <Play className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">
            Video Tutorials
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch hands-on tutorials and demonstrations covering DevOps, AWS, Kubernetes, and cloud infrastructure.
          Subscribe to stay updated with the latest content!
        </p>
      </div>

      {/* Full Videos Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Full Tutorials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative aspect-video w-full bg-muted">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{video.category}</Badge>
                </div>
                <CardTitle>{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Play className="h-4 w-4" />
                  Watch on YouTube
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Shorts Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Quick Tips - YouTube Shorts</h2>
        <p className="text-muted-foreground mb-8">
          Bite-sized DevOps tips and tricks in under 60 seconds!
        </p>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {shorts.map((short) => (
            <Card key={short.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative aspect-[9/16] w-full bg-muted">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${short.id}`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardHeader className="p-4">
                <Badge variant="secondary" className="w-fit mb-2">{short.category}</Badge>
                <CardTitle className="text-sm">{short.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center p-8 bg-primary/5 rounded-lg border border-primary/10">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to DuhOps World</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't miss out on new tutorials and DevOps insights. Subscribe to our YouTube channel
          for regular updates on cloud infrastructure, automation, and best practices.
        </p>
        <a
          href="https://www.youtube.com/@duhops"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
        >
          <Play className="h-5 w-5" />
          Subscribe on YouTube
        </a>
      </div>
    </div>
  )
}

