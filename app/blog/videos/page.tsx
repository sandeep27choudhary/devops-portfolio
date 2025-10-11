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

      {/* Videos Grid */}
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

      {/* Call to Action */}
      <div className="mt-16 text-center p-8 bg-primary/5 rounded-lg border border-primary/10">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to DuhOps World</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't miss out on new tutorials and DevOps insights. Subscribe to our YouTube channel
          for regular updates on cloud infrastructure, automation, and best practices.
        </p>
        <a
          href="https://youtube.com/@duhopsworld"
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

