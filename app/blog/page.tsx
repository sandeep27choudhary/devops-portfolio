import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: "aws-multi-account-strategy",
    title: "Implementing a Secure AWS Multi-Account Strategy",
    description: "A comprehensive guide to setting up and managing multiple AWS accounts using AWS Organizations, focusing on security best practices and efficient resource management.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 2024",
    readTime: "10 min read",
    tags: ["AWS", "Security", "Cloud Architecture"],
    featured: true,
  },
  {
    id: "kubernetes-best-practices",
    title: "Kubernetes Deployment Best Practices for Production",
    description: "Learn about essential Kubernetes deployment strategies, including resource management, security configurations, and monitoring setup for production environments.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 2024",
    readTime: "8 min read",
    tags: ["Kubernetes", "DevOps", "Containers"],
    featured: true,
  },
  {
    id: "cicd-pipeline-optimization",
    title: "Optimizing CI/CD Pipelines with Jenkins and GitHub",
    description: "Deep dive into creating efficient CI/CD pipelines using Jenkins and GitHub, with real-world examples and performance optimization techniques.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 2024",
    readTime: "12 min read",
    tags: ["CI/CD", "Jenkins", "Automation"],
    featured: true,
  },
  {
    id: "terraform-infrastructure",
    title: "Infrastructure as Code with Terraform",
    description: "A practical guide to managing cloud infrastructure using Terraform, including state management, module organization, and automation strategies.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 2023",
    readTime: "15 min read",
    tags: ["Terraform", "IaC", "Cloud"],
  },
  {
    id: "monitoring-cloudwatch",
    title: "Advanced AWS CloudWatch Monitoring Techniques",
    description: "Learn how to implement comprehensive monitoring solutions using CloudWatch, including custom metrics, dashboards, and alerting strategies.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 2023",
    readTime: "10 min read",
    tags: ["Monitoring", "AWS", "CloudWatch"],
  },
  {
    id: "devops-team-building",
    title: "Building and Leading Effective DevOps Teams",
    description: "Insights and strategies for building, managing, and mentoring successful DevOps teams, based on real-world experience.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 2023",
    readTime: "8 min read",
    tags: ["Leadership", "DevOps Culture", "Team Management"],
  },
]

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog & Articles</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Technical insights and experiences from my journey in cloud infrastructure and DevOps engineering.
            Practical guides, best practices, and lessons learned.
          </p>
        </div>

        {/* Featured Post */}
        <div className="rounded-lg border border-border/40 bg-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video overflow-hidden bg-muted">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground">{blogPosts[0].description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <Button asChild variant="outline">
                    <Link href={`/blog/${blogPosts[0].id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover transition-transform group-hover:scale-105"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-lg border border-border/40 bg-card p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold">Subscribe to My Newsletter</h2>
            <p className="text-muted-foreground">
              Get the latest articles and insights about cloud infrastructure, DevOps practices, and technical leadership
              delivered directly to your inbox.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

