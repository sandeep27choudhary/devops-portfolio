import Link from "next/link"
import { ArrowRight, Server, Cloud, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <div className="relative">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Cloud Infrastructure & DevOps Engineer
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Building Scalable, Secure, and Automated Cloud Solutions
            </p>
            <div className="space-x-4 pt-4">
              <Button asChild size="lg">
                <Link href="/portfolio">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AWS Cloud Infrastructure</h3>
              <p className="text-muted-foreground">
                Expert in EKS, ECS, S3, RDS, CloudFront, Route 53, and more AWS services
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Kubernetes & Containerization</h3>
              <p className="text-muted-foreground">
                Specialized in Kubernetes, Helm, Docker, and container orchestration
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-border/40 bg-background p-6 text-center shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">CI/CD Automation</h3>
              <p className="text-muted-foreground">Streamlined workflows with GitHub Actions, Terraform, and IaC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Recent work showcasing my expertise in cloud infrastructure and DevOps
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="CI/CD Pipeline for Next.js"
                  className="object-cover transition-transform group-hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">CI/CD Pipeline for Next.js Apps</h3>
                <p className="mt-2 text-muted-foreground">Automated deployment workflow using GitHub Actions and AWS</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    GitHub Actions
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    AWS
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Next.js
                  </span>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/portfolio/nextjs-cicd">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Terraform Infrastructure"
                  className="object-cover transition-transform group-hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Infrastructure as Code with Terraform</h3>
                <p className="mt-2 text-muted-foreground">
                  Scalable and maintainable infrastructure using Terraform and Terragrunt
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Terraform
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Terragrunt
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    AWS
                  </span>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/portfolio/terraform-iac">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-background shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Kubernetes Deployment"
                  className="object-cover transition-transform group-hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Kubernetes & Helm Deployments</h3>
                <p className="mt-2 text-muted-foreground">
                  Streamlined application deployment with Kubernetes and Helm charts
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Kubernetes
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Helm
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    EKS
                  </span>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/portfolio/kubernetes-helm">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Let's discuss how I can help you build scalable, secure, and automated cloud solutions.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

