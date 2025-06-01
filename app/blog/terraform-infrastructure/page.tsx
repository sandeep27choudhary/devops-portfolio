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
            <span>December 2023</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Infrastructure as Code with Terraform
          </h1>
          <div className="flex flex-wrap gap-2">
            {["Terraform", "IaC", "Cloud"].map((tag) => (
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
            Infrastructure as Code (IaC) with Terraform has become the standard for managing cloud infrastructure.
            This guide covers essential concepts, best practices, and real-world examples for managing your infrastructure effectively.
          </p>

          <h2>Project Structure</h2>
          <h3>1. Directory Organization</h3>
          <pre><code>{`project/
├── environments/
│   ├── dev/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── terraform.tfvars
│   └── prod/
│       ├── main.tf
│       ├── variables.tf
│       └── terraform.tfvars
├── modules/
│   ├── vpc/
│   ├── ec2/
│   └── rds/
└── shared/
    └── provider.tf`}</code></pre>

          <h2>Module Development</h2>
          <h3>1. VPC Module Example</h3>
          <pre><code>{`# modules/vpc/main.tf
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  
  name = var.vpc_name
  cidr = var.vpc_cidr
  
  azs             = var.availability_zones
  private_subnets = var.private_subnet_cidrs
  public_subnets  = var.public_subnet_cidrs
  
  enable_nat_gateway = true
  single_nat_gateway = var.environment != "prod"
  
  tags = {
    Environment = var.environment
    Terraform   = "true"
  }
}`}</code></pre>

          <h3>2. Variables Structure</h3>
          <pre><code>{`# modules/vpc/variables.tf
variable "vpc_name" {
  description = "Name of the VPC"
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "environment" {
  description = "Environment name"
  type        = string
}`}</code></pre>

          <h2>State Management</h2>
          <h3>1. Remote State Configuration</h3>
          <pre><code>{`terraform {
  backend "s3" {
    bucket         = "terraform-state-bucket"
    key            = "environment/terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}`}</code></pre>

          <h3>2. State Locking</h3>
          <pre><code>{`resource "aws_dynamodb_table" "terraform_locks" {
  name         = "terraform-locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}`}</code></pre>

          <h2>Resource Management</h2>
          <h3>1. EC2 Instance with Auto Scaling</h3>
          <pre><code>{`module "asg" {
  source = "terraform-aws-modules/autoscaling/aws"

  name = "web-asg"

  min_size                  = 2
  max_size                  = 4
  desired_capacity          = 2
  health_check_type        = "EC2"
  health_check_grace_period = 300

  vpc_zone_identifier = module.vpc.private_subnets
  target_group_arns   = [aws_lb_target_group.web.arn]
  
  launch_template_name        = "web-lt"
  launch_template_description = "Web server launch template"
  update_default_version      = true

  image_id          = data.aws_ami.amazon_linux_2.id
  instance_type     = "t3.micro"
  ebs_optimized     = true
  enable_monitoring = true
}`}</code></pre>

          <h2>Security Best Practices</h2>
          <h3>1. IAM Policies</h3>
          <pre><code>{`resource "aws_iam_role" "ec2_role" {
  name = "ec2_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}`}</code></pre>

          <h3>2. Security Groups</h3>
          <pre><code>{`resource "aws_security_group" "web" {
  name        = "web-sg"
  description = "Security group for web servers"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`}</code></pre>

          <h2>Automation and CI/CD</h2>
          <h3>1. GitHub Actions Workflow</h3>
          <pre><code>{`name: Terraform CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v1
    
    - name: Terraform Init
      run: terraform init
    
    - name: Terraform Plan
      run: terraform plan
    
    - name: Terraform Apply
      if: github.ref == 'refs/heads/main'
      run: terraform apply -auto-approve`}</code></pre>

          <h2>Best Practices Checklist</h2>
          <ul>
            <li>Use consistent naming conventions</li>
            <li>Implement proper state management</li>
            <li>Version control your Terraform code</li>
            <li>Use data sources when possible</li>
            <li>Implement proper tagging strategy</li>
            <li>Use workspaces for environment isolation</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Implementing Infrastructure as Code with Terraform provides a robust and maintainable way to manage cloud resources.
            Following these best practices ensures scalable and reliable infrastructure deployment across your organization.
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