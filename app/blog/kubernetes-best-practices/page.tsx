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
            <span>February 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Kubernetes Deployment Best Practices for Production
          </h1>
          <div className="flex flex-wrap gap-2">
            {["Kubernetes", "DevOps", "Containers"].map((tag) => (
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
            Deploying applications in Kubernetes requires careful planning and adherence to best practices to ensure
            reliability, security, and efficient resource utilization. This guide covers essential strategies for
            production-grade Kubernetes deployments.
          </p>

          <h2>Resource Management</h2>
          <h3>1. Resource Requests and Limits</h3>
          <pre><code>{`apiVersion: v1
kind: Pod
metadata:
  name: frontend
spec:
  containers:
  - name: app
    image: app:1.0.0
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`}</code></pre>
          <p>
            Always define resource requests and limits to:
          </p>
          <ul>
            <li>Ensure proper scheduling decisions</li>
            <li>Prevent resource contention</li>
            <li>Control resource consumption</li>
            <li>Enable efficient autoscaling</li>
          </ul>

          <h3>2. Pod Disruption Budgets</h3>
          <pre><code>{`apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: app-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: frontend`}</code></pre>

          <h2>Security Configurations</h2>
          <h3>1. Pod Security Context</h3>
          <pre><code>{`apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
  containers:
  - name: app
    image: app:1.0.0`}</code></pre>

          <h3>2. Network Policies</h3>
          <pre><code>{`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-allow
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend`}</code></pre>

          <h2>High Availability Strategies</h2>
          <h3>1. Pod Anti-Affinity</h3>
          <pre><code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-server
spec:
  template:
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - web-server
            topologyKey: "kubernetes.io/hostname"`}</code></pre>

          <h3>2. Horizontal Pod Autoscaling</h3>
          <pre><code>{`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80`}</code></pre>

          <h2>Monitoring and Logging</h2>
          <h3>1. Prometheus Metrics</h3>
          <p>
            Implement proper monitoring using:
          </p>
          <ul>
            <li>Prometheus for metrics collection</li>
            <li>Grafana for visualization</li>
            <li>AlertManager for alerting</li>
          </ul>

          <h3>2. Centralized Logging</h3>
          <p>
            Set up comprehensive logging with:
          </p>
          <ul>
            <li>Elasticsearch for log storage</li>
            <li>Fluentd for log collection</li>
            <li>Kibana for log visualization</li>
          </ul>

          <h2>Deployment Strategies</h2>
          <h3>1. Rolling Updates</h3>
          <pre><code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0`}</code></pre>

          <h3>2. Health Checks</h3>
          <pre><code>{`apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: app:1.0.0
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 3
      periodSeconds: 3
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5`}</code></pre>

          <h2>Best Practices Checklist</h2>
          <ul>
            <li>Use namespaces for resource isolation</li>
            <li>Implement proper RBAC policies</li>
            <li>Set up monitoring and alerting</li>
            <li>Configure resource quotas</li>
            <li>Use secrets for sensitive data</li>
            <li>Implement proper backup strategies</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Following these Kubernetes deployment best practices ensures a robust, secure, and maintainable
            production environment. Regular reviews and updates of these practices help maintain the health
            of your Kubernetes clusters.
          </p>
        </div>

        {/* Author Bio */}
        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-muted h-12 w-12 overflow-hidden">
              <img src="/placeholder.svg" alt="Author" className="h-full w-full object-cover" />
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