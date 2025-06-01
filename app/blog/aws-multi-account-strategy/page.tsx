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
            <span>March 2024</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Implementing a Secure AWS Multi-Account Strategy
          </h1>
          <div className="flex flex-wrap gap-2">
            {["AWS", "Security", "Cloud Architecture"].map((tag) => (
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
            Managing multiple AWS accounts has become a standard practice for organizations of all sizes. In this comprehensive guide,
            we'll explore how to implement a secure and efficient multi-account strategy using AWS Organizations, focusing on security
            best practices and resource management.
          </p>

          <h2>Why Multi-Account Architecture?</h2>
          <ul>
            <li>Improved security through account isolation</li>
            <li>Better cost tracking and allocation</li>
            <li>Simplified compliance management</li>
            <li>Enhanced resource organization</li>
          </ul>

          <h2>Key Components</h2>
          <h3>1. AWS Organizations Structure</h3>
          <p>
            Set up a well-structured AWS Organizations hierarchy with:
          </p>
          <ul>
            <li>Management account for centralized control</li>
            <li>Security account for centralized security services</li>
            <li>Log archive account for centralized logging</li>
            <li>Separate accounts for development, staging, and production environments</li>
          </ul>

          <h3>2. Security Controls</h3>
          <p>
            Implement comprehensive security measures:
          </p>
          <ul>
            <li>Service Control Policies (SCPs) to enforce security guardrails</li>
            <li>AWS IAM for fine-grained access control</li>
            <li>AWS CloudTrail for audit logging</li>
            <li>AWS Config for resource compliance</li>
          </ul>

          <h3>3. Network Architecture</h3>
          <p>
            Design a robust network architecture:
          </p>
          <ul>
            <li>Transit Gateway for centralized network management</li>
            <li>VPC peering for specific account connections</li>
            <li>Network ACLs and Security Groups for traffic control</li>
            <li>AWS PrivateLink for secure service access</li>
          </ul>

          <h2>Implementation Steps</h2>
          <h3>1. Initial Setup</h3>
          <pre><code>{`# Create AWS Organization
aws organizations create-organization

# Enable AWS Organization features
aws organizations enable-all-features

# Create member accounts
aws organizations create-account --email account@example.com --account-name "Development"`}</code></pre>

          <h3>2. Security Configuration</h3>
          <pre><code>{`# Example SCP to restrict regions
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DenyAllOutsideApprovedRegions",
            "Effect": "Deny",
            "NotAction": [
                "iam:*",
                "organizations:*",
                "route53:*",
                "budgets:*",
                "support:*"
            ],
            "Resource": "*",
            "Condition": {
                "StringNotEquals": {
                    "aws:RequestedRegion": [
                        "us-east-1",
                        "us-west-2"
                    ]
                }
            }
        }
    ]
}`}</code></pre>

          <h2>Best Practices</h2>
          <ul>
            <li>Implement least privilege access</li>
            <li>Use AWS Control Tower for account governance</li>
            <li>Enable MFA for all IAM users</li>
            <li>Regularly review and update security policies</li>
            <li>Implement automated compliance checks</li>
          </ul>

          <h2>Monitoring and Maintenance</h2>
          <p>
            Establish robust monitoring practices:
          </p>
          <ul>
            <li>Centralized CloudWatch dashboards</li>
            <li>Regular security assessments</li>
            <li>Automated compliance reporting</li>
            <li>Cost optimization reviews</li>
          </ul>

          <h2>Common Challenges and Solutions</h2>
          <h3>Challenge 1: Cross-Account Access</h3>
          <p>
            Solution: Implement AWS SSO and role-based access control with proper permission boundaries.
          </p>

          <h3>Challenge 2: Resource Sharing</h3>
          <p>
            Solution: Use AWS RAM (Resource Access Manager) for sharing resources across accounts.
          </p>

          <h3>Challenge 3: Cost Management</h3>
          <p>
            Solution: Implement AWS Organizations consolidated billing and use Cost Explorer with tags.
          </p>

          <h2>Conclusion</h2>
          <p>
            A well-implemented AWS multi-account strategy provides enhanced security, better resource organization, and improved
            operational efficiency. Regular reviews and updates ensure the strategy remains effective as your organization grows.
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