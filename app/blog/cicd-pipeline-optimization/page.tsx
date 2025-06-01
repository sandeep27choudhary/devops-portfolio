import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPost() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>January 2024</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Optimizing CI/CD Pipelines with Jenkins and GitHub
          </h1>
          <div className="flex flex-wrap gap-2">
            {["CI/CD", "Jenkins", "Automation"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-gray max-w-none">
          <h2>Introduction</h2>
          <p>
            Efficient CI/CD pipelines are crucial for modern software development. This guide explores how to optimize
            your pipelines using Jenkins and GitHub, incorporating best practices and performance optimization techniques.
          </p>

          <h2>Pipeline Architecture</h2>
          <h3>1. Jenkins Pipeline Structure</h3>
          <pre><code>{`pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-registry'
        IMAGE_NAME = 'your-app'
        IMAGE_TAG = 'latest'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'npm run test:unit'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'npm run test:integration'
                    }
                }
            }
        }
        
        stage('Docker Build & Push') {
            steps {
                script {
                    docker.build("\${DOCKER_REGISTRY}/\${IMAGE_NAME}:\${IMAGE_TAG}")
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("\${DOCKER_REGISTRY}/\${IMAGE_NAME}:\${IMAGE_TAG}").push()
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}`}</code></pre>

          <h2>Pipeline Optimization Techniques</h2>
          <h3>1. Parallel Execution</h3>
          <p>
            Implement parallel stages for:
          </p>
          <ul>
            <li>Multiple test suites</li>
            <li>Independent build processes</li>
            <li>Static code analysis</li>
            <li>Security scans</li>
          </ul>

          <h3>2. Caching Strategies</h3>
          <pre><code>{`pipeline {
    agent {
        docker {
            image 'node:16'
            args '-v $HOME/.npm:/root/.npm'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
            }
        }
    }
}`}</code></pre>

          <h2>GitHub Integration</h2>
          <h3>1. Webhook Configuration</h3>
          <p>
            Set up GitHub webhooks to trigger Jenkins builds:
          </p>
          <ul>
            <li>Push events</li>
            <li>Pull request events</li>
            <li>Tag creation events</li>
          </ul>

          <h3>2. Branch Protection Rules</h3>
          <pre><code>{`{
  "protection": {
    "required_status_checks": {
      "strict": true,
      "contexts": [
        "continuous-integration/jenkins/pr-merge"
      ]
    },
    "enforce_admins": true,
    "required_pull_request_reviews": {
      "dismissal_restrictions": {},
      "dismiss_stale_reviews": true,
      "require_code_owner_reviews": true
    }
  }
}`}</code></pre>

          <h2>Security Best Practices</h2>
          <h3>1. Credential Management</h3>
          <ul>
            <li>Use Jenkins Credential Provider</li>
            <li>Implement secret rotation</li>
            <li>Audit credential usage</li>
          </ul>

          <h3>2. Pipeline Security</h3>
          <pre><code>{`pipeline {
    agent any
    
    options {
        timeout(time: 1, unit: 'HOURS')
        disableConcurrentBuilds()
    }
    
    stages {
        stage('Security Scan') {
            steps {
                sh 'npm audit'
                sh 'docker scan \${IMAGE_NAME}:\${IMAGE_TAG}'
            }
        }
    }
}`}</code></pre>

          <h2>Monitoring and Metrics</h2>
          <h3>1. Pipeline Metrics</h3>
          <p>
            Track key metrics:
          </p>
          <ul>
            <li>Build duration</li>
            <li>Success/failure rates</li>
            <li>Test coverage</li>
            <li>Deployment frequency</li>
          </ul>

          <h3>2. Performance Monitoring</h3>
          <pre><code>{`pipeline {
    agent any
    
    options {
        timestamps()
        ansiColor('xterm')
    }
    
    stages {
        stage('Performance Tests') {
            steps {
                sh 'jmeter -n -t performance-test.jmx'
            }
            post {
                always {
                    perfReport 'jmeter-report/**/*.jtl'
                }
            }
        }
    }
}`}</code></pre>

          <h2>Best Practices Checklist</h2>
          <ul>
            <li>Implement proper error handling</li>
            <li>Use pipeline templates</li>
            <li>Maintain pipeline as code</li>
            <li>Regular pipeline maintenance</li>
            <li>Implement proper logging</li>
            <li>Set up notifications</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Optimizing CI/CD pipelines is an ongoing process that requires regular monitoring and updates.
            By following these best practices and implementing proper optimization techniques, you can create
            efficient and reliable deployment pipelines that enhance your development workflow.
          </p>
        </div>

        {/* Author Bio */}
        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-muted h-12 w-12 overflow-hidden">
              <img src="https://loremflickr.com/80/80/person,portrait,tech" alt="Author" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold">Sandeep Choudhary</h3>
              <p className="text-sm text-muted-foreground">
                DevOps Engineer with expertise in AWS, Kubernetes, and cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 