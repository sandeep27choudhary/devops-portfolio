import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchPexelsImage } from "@/lib/pexels"

const projects = [
  {
    id: "aws-multi-account",
    title: "AWS Multi-Account Management",
    description: "Implemented a comprehensive AWS multi-account strategy for secure and efficient product deployments at 2070health",
    image: "https://loremflickr.com/600/400/aws,cloud,security",
    tags: ["AWS Organizations", "IAM", "Security", "Terraform"],
    featured: true,
  },
  {
    id: "kubernetes-deployment",
    title: "Kubernetes Deployment Architecture",
    description: "Designed and implemented containerized application deployment using Kubernetes at Xenonstack",
    image: "https://loremflickr.com/600/400/kubernetes,containers,cloud",
    tags: ["Kubernetes", "Docker", "Microservices", "DevOps"],
    featured: true,
  },
  {
    id: "cicd-automation",
    title: "CI/CD Pipeline Automation",
    description: "Built robust CI/CD pipelines using Jenkins, GitHub, and AWS DevOps services for automated deployments",
    image: "https://loremflickr.com/600/400/devops,automation,pipeline",
    tags: ["Jenkins", "GitHub", "AWS DevOps", "Automation"],
    featured: true,
  },
  {
    id: "cloud-automation",
    title: "Cloud Infrastructure Automation",
    description: "Developed and maintained cloud automation using Serverless, Terraform, and Ansible for infrastructure management",
    image: "https://loremflickr.com/600/400/cloud,infrastructure,automation",
    tags: ["Terraform", "Ansible", "Serverless", "IaC"],
    featured: false,
  },
  {
    id: "monitoring-optimization",
    title: "Application Monitoring & Optimization",
    description: "Implemented comprehensive monitoring solutions for application performance and infrastructure optimization",
    image: "https://loremflickr.com/600/400/monitoring,cloud,performance",
    tags: ["Monitoring", "Performance", "CloudWatch", "Optimization"],
    featured: false,
  },
  {
    id: "team-leadership",
    title: "Team Leadership & Mentorship",
    description: "Led a team of 7 members and provided mentorship to interns while managing technical deliverables",
    image: "https://loremflickr.com/600/400/leadership,team,mentorship",
    tags: ["Leadership", "Mentorship", "Team Management", "DevOps Culture"],
    featured: false,
  },
]

export default async function PortfolioPage() {
  // Fetch Pexels images for each project
  const projectsWithImages = await Promise.all(
    projects.map(async (project) => {
      const pexelsImage = await fetchPexelsImage(project.title)
      return {
        ...project,
        image: pexelsImage || project.image,
      }
    })
  )

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portfolio & Case Studies</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore my recent projects showcasing expertise in cloud infrastructure, DevOps automation, and system
            architecture. Each case study demonstrates practical solutions to real-world challenges.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsWithImages.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105"
                  width={600}
                  height={400}
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
                    <Link href={`/portfolio/${project.id}`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Looking for a DevOps engineer who can help optimize your cloud infrastructure and automate deployments?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Let's Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

