import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink, GitBranch, GitCommit, GitPullRequest } from "lucide-react"

export const metadata: Metadata = {
  title: "Next.js CICD Implementation | Portfolio",
  description: "A detailed showcase of the Continuous Integration and Continuous Deployment pipeline implemented for a Next.js application.",
}

export default function NextjsCICDPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Next.js CICD Implementation</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive showcase of implementing Continuous Integration and Continuous Deployment
          for a modern Next.js application using industry best practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              Modern Next.js application with automated deployment pipeline
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">GitHub Actions</Badge>
              <Badge variant="secondary">Vercel</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              This project demonstrates a production-ready CICD pipeline for a Next.js application,
              including automated testing, linting, and deployment processes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              Implementation highlights and technical details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                Automated branch protection and PR reviews
              </li>
              <li className="flex items-center gap-2">
                <GitCommit className="h-4 w-4" />
                Pre-commit hooks and code quality checks
              </li>
              <li className="flex items-center gap-2">
                <GitPullRequest className="h-4 w-4" />
                Automated testing and deployment on PR merge
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Details</CardTitle>
          <CardDescription>
            Technical breakdown of the CICD pipeline
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Continuous Integration</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Automated testing on every push and pull request</li>
              <li>TypeScript type checking and compilation</li>
              <li>ESLint and Prettier code formatting</li>
              <li>Dependency security scanning</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Continuous Deployment</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Automated deployment to Vercel on main branch</li>
              <li>Preview deployments for pull requests</li>
              <li>Environment variable management</li>
              <li>Build optimization and caching</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button asChild>
          <Link href="https://github.com/sandeep27choudhary/devops-portfolio" target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View Source Code
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/" target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </div>
    </div>
  )
} 