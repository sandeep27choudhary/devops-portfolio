import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { fetchPexelsImage } from "@/lib/pexels"

export const metadata: Metadata = {
  title: "DevOps Blog | Cloud Architecture, Infrastructure, and Best Practices",
  description: "Explore articles on AWS, Kubernetes, Terraform, and DevOps best practices. Learn about cloud architecture, infrastructure as code, and continuous integration.",
}

const featuredPosts = [
  {
    title: "AWS Multi-Account Strategy: Best Practices for Enterprise",
    description: "Learn how to implement a secure and efficient multi-account strategy in AWS for enterprise organizations.",
    image: "https://loremflickr.com/600/400/aws,cloud,security",
    category: "AWS",
    readTime: "10 min read",
    href: "/blog/aws-multi-account-strategy",
  },
  {
    title: "Kubernetes Best Practices for Production Workloads",
    description: "Essential best practices for running Kubernetes in production, from security to scaling.",
    image: "https://loremflickr.com/600/400/kubernetes,cloud,production",
    category: "Kubernetes",
    readTime: "8 min read",
    href: "/blog/kubernetes-best-practices",
  },
  {
    title: "Terraform Infrastructure as Code: A Comprehensive Guide",
    description: "Master infrastructure as code with Terraform, from basic concepts to advanced patterns.",
    image: "https://loremflickr.com/600/400/terraform,infrastructure,code",
    category: "Terraform",
    readTime: "12 min read",
    href: "/blog/terraform-infrastructure",
  },
  {
    title: "CICD Pipeline Optimization: Speed Up Your Deployments",
    description: "Learn how to optimize your CI/CD pipeline for faster and more reliable deployments.",
    image: "https://loremflickr.com/600/400/devops,cicd,pipeline",
    category: "DevOps",
    readTime: "9 min read",
    href: "/blog/cicd-pipeline-optimization",
  },
  {
    title: "CloudWatch Monitoring: Best Practices for AWS",
    description: "Comprehensive guide to monitoring your AWS infrastructure using CloudWatch.",
    image: "https://loremflickr.com/600/400/aws,cloudwatch,monitoring",
    category: "AWS",
    readTime: "7 min read",
    href: "/blog/monitoring-cloudwatch",
  },
]

export default async function BlogPage() {
  // Fetch Pexels images for each featured post
  const postsWithImages = await Promise.all(
    featuredPosts.map(async (post) => {
      const pexelsImage = await fetchPexelsImage(post.title)
      return {
        ...post,
        image: pexelsImage || post.image,
      }
    })
  )

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight">
          DevOps & Cloud Engineering Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore articles on cloud architecture, infrastructure as code, and DevOps best practices.
          Learn from real-world experiences and stay updated with the latest trends.
        </p>
      </div>

      {/* Featured Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {postsWithImages.map((post) => (
          <Link key={post.href} href={post.href}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 hover:bg-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 8, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter for the latest articles and insights.
        </p>
        <Button size="lg">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  )
}

