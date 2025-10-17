"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// Knowledge base about the website
const knowledgeBase = {
  owner: {
    name: "Sandeep Choudhary",
    title: "Cloud Infrastructure & DevOps Engineer",
    experience: "3+ years",
    email: "csandeep497@gmail.com",
    linkedin: "https://linkedin.com/in/sandeep-k-choudhary",
    github: "https://github.com/sandeep27choudhary",
    resume: "https://docs.google.com/document/d/e/2PACX-1vTQOkYZW0e9A6UhROME4YKC8pw5G-Gx0y7HHQTdIeR0b_oD-O3mRY5s_cUsHrcmAQpWtC6BIG6qR6nC/pub"
  },
  skills: {
    cloud: ["AWS ECS", "EC2", "Lambda", "S3", "RDS", "DynamoDB", "CloudFront", "Route 53", "IAM", "CloudWatch", "CloudTrail"],
    devops: ["CI/CD pipelines", "GitHub Actions", "Jenkins", "AWS DevOps", "Infrastructure as Code"],
    containerization: ["Kubernetes", "Helm", "Docker", "EKS", "Container Orchestration"],
    tools: ["Terraform", "Terragrunt", "Ansible", "Serverless", "Git"]
  },
  experience: [
    {
      company: "2070health",
      role: "DevOps Engineer",
      location: "Bengaluru",
      period: "Jun 2024 - Present",
      responsibilities: [
        "Managing multiple AWS accounts and infrastructure",
        "Architecting and implementing DevOps solutions",
        "Streamlining product release processes",
        "Implementing and maintaining CI/CD pipelines"
      ]
    },
    {
      company: "Xenonstack",
      role: "Cloud and DevOps Engineer",
      location: "Mohali",
      period: "Nov 2021 - Apr 2024",
      responsibilities: [
        "Implemented Kubernetes for containerized application deployment",
        "Developed cloud automation using Serverless, Terraform, and Ansible",
        "Designed CI/CD pipelines with Jenkins, GitHub, and AWS DevOps",
        "Supervised a team of 7 and provided mentorship to interns"
      ]
    }
  ],
  education: [
    "B.Tech in Computer Science from College of Engineering & Technology, Bikaner",
    "AWS Solutions Architect Associate certification",
    "Google Cloud Platform Fundamentals certification"
  ],
  youtube: {
    channel: "https://www.youtube.com/@duhops",
    channelName: "DuhOps World",
    videos: [
      { title: "Gemini CLI", url: "https://youtu.be/KRNAVpUbnZQ", description: "AI command-line interface tutorial" },
      { title: "AWS Architect AI", url: "https://youtu.be/YJyYyBDcGlg", description: "AI transforming AWS architecture" },
      { title: "NotebookLM Deep Dive", url: "https://youtu.be/wkX5H4Ibj3A", description: "Google's NotebookLM tutorial" },
      { title: "Host n8n using Cloudflare", url: "https://youtu.be/9NMqGAi_yjI", description: "n8n workflow automation hosting" }
    ],
    shortsCount: 10
  },
  blog: [
    { title: "AWS Multi-Account Strategy: Best Practices for Enterprise", url: "/blog/aws-multi-account-strategy" },
    { title: "Kubernetes Best Practices for Production Workloads", url: "/blog/kubernetes-best-practices" },
    { title: "Terraform Infrastructure as Code: A Comprehensive Guide", url: "/blog/terraform-infrastructure" },
    { title: "CI/CD Pipeline Optimization: Speed Up Your Deployments", url: "/blog/cicd-pipeline-optimization" },
    { title: "CloudWatch Monitoring: Best Practices for AWS", url: "/blog/monitoring-cloudwatch" }
  ],
  portfolio: [
    { title: "AWS Multi-Account Management", description: "Comprehensive AWS multi-account strategy for secure deployments" },
    { title: "Kubernetes Deployment Architecture", description: "Containerized application deployment using Kubernetes" },
    { title: "CI/CD Pipeline Automation", description: "Robust CI/CD pipelines using Jenkins, GitHub, and AWS DevOps" },
    { title: "Cloud Infrastructure Automation", description: "Cloud automation using Serverless, Terraform, and Ansible" },
    { title: "Application Monitoring & Optimization", description: "Comprehensive monitoring solutions for performance optimization" }
  ],
  downloads: [
    { title: "n8n Workflow Collection", description: "500+ automation templates for AI, integrations, and workflows", url: "https://github.com/sandeep27choudhary/n8n-workflow-duhops-world" },
    { title: "AI Product Architect Prompt", description: "Complete prompt for AI-assisted product development", url: "/downloads" },
    { title: "Agentic Design Patterns", description: "Comprehensive guide to RAG, agent frameworks, and AI production patterns", url: "https://notebooklm.google.com/notebook/4485a282-32a7-469f-9acd-16cea5ada755" },
    { title: "DevOps Jumpstart Course", description: "Module-by-module DevOps learning with GitHub, Docker & AWS", url: "https://docs.google.com/document/d/1kt3CUVPGcKAWb-idevJ7Ll5Y0PR8GPuQqB6_hNJ7NW8/edit?usp=sharing" }
  ],
  agenticAI: {
    title: "Agentic Design Patterns: Principles and Frameworks",
    url: "https://notebooklm.google.com/notebook/4485a282-32a7-469f-9acd-16cea5ada755",
    knowledgeAreas: [
      "Retrieval-Augmented Generation (RAG) as a Core Technique",
      "RAG relies on Structured Data Management and Search",
      "Advanced and Agentic RAG Techniques", 
      "Ecosystem of Agent Development Frameworks",
      "Foundational AI Concepts and Production Challenges"
    ]
  }
}

// Smart pattern matching for responses
const getResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  // Greetings
  if (message.match(/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening))/)) {
    return `Hello! 👋 I'm Sandeep's AI assistant. I can help you learn about:
• Sandeep's experience and skills
• DevOps and cloud infrastructure projects
• YouTube videos and tutorials
• Blog articles
• How to get in touch

What would you like to know?`
  }

  // About/Who questions
  if (message.match(/who|about|tell me about|introduce/)) {
    return `I'm here to tell you about **Sandeep Choudhary**! 

${knowledgeBase.owner.name} is a ${knowledgeBase.owner.title} with over ${knowledgeBase.owner.experience} of experience in designing, implementing, and managing cloud-based solutions.

**Current Role:**
${knowledgeBase.experience[0].role} at ${knowledgeBase.experience[0].company} (${knowledgeBase.experience[0].period})

**Core Expertise:**
• AWS Cloud Infrastructure (ECS, EC2, Lambda, S3, RDS, CloudFront)
• Kubernetes & Container Orchestration
• CI/CD Pipeline Automation
• Infrastructure as Code (Terraform, Ansible)

Want to know more about his projects, videos, or how to connect?`
  }

  // Skills/expertise questions
  if (message.match(/skill|expertise|technology|tech stack|tools|know/)) {
    return `Sandeep has extensive expertise in:

**☁️ Cloud Services:**
${knowledgeBase.skills.cloud.slice(0, 8).join(", ")}

**🔧 DevOps Tools:**
${knowledgeBase.skills.devops.join(", ")}

**🐳 Containerization:**
${knowledgeBase.skills.containerization.join(", ")}

**⚙️ Infrastructure & Automation:**
${knowledgeBase.skills.tools.join(", ")}

Would you like to know about specific projects using these technologies?`
  }

  // Experience/work questions
  if (message.match(/experience|work|job|career|company|worked|working/)) {
    const currentJob = knowledgeBase.experience[0]
    const previousJob = knowledgeBase.experience[1]
    
    return `**Current Position:**
${currentJob.role} at ${currentJob.company}, ${currentJob.location}
📅 ${currentJob.period}

Key responsibilities:
${currentJob.responsibilities.map(r => `• ${r}`).join("\n")}

**Previous Role:**
${previousJob.role} at ${previousJob.company}, ${previousJob.location}
📅 ${previousJob.period}

Highlights:
• Led a team of 7 members
• Implemented Kubernetes orchestration
• Built CI/CD automation pipelines

Want to know more about specific projects?`
  }

  // Education/certification questions
  if (message.match(/education|degree|certification|certified|qualification|study|studied/)) {
    return `**🎓 Education & Certifications:**

${knowledgeBase.education.map(e => `• ${e}`).join("\n")}

Sandeep continuously invests in learning and staying updated with the latest cloud technologies!`
  }

  // YouTube/video questions
  if (message.match(/youtube|video|tutorial|watch|channel|duhops/)) {
    return `**📺 YouTube Channel: DuhOps World**

Subscribe here: ${knowledgeBase.youtube.channel}

**Featured Videos:**
${knowledgeBase.youtube.videos.map(v => `• **${v.title}** - ${v.description}\n  ${v.url}`).join("\n\n")}

Plus ${knowledgeBase.youtube.shortsCount}+ DevOps Quick Tips as YouTube Shorts!

Visit the [Videos page](/blog/videos) to watch all tutorials.`
  }

  // Blog/articles questions
  if (message.match(/blog|article|write|read|post|content/)) {
    return `**📝 Latest Blog Articles:**

${knowledgeBase.blog.map(b => `• [${b.title}](${b.url})`).join("\n")}

Check out the [Blog page](/blog) for all articles on AWS, Kubernetes, Terraform, and DevOps best practices!`
  }

  // Portfolio/projects questions
  if (message.match(/project|portfolio|work|case study|built/)) {
    return `**💼 Featured Projects:**

${knowledgeBase.portfolio.map(p => `• **${p.title}**\n  ${p.description}`).join("\n\n")}

Visit the [Portfolio page](/portfolio) to see detailed case studies!`
  }

  // Downloads/resources questions
  if (message.match(/download|resource|free|template|workflow|prompt/)) {
    return `**📥 Free Downloads & Resources:**

${knowledgeBase.downloads.map(d => `• **${d.title}**\n  ${d.description}\n  ${d.url}`).join("\n\n")}

Visit the [Downloads page](/downloads) to access all free resources including:
• 500+ n8n automation workflows
• AI product architect prompts
• Agentic design patterns knowledge base
• DevOps learning materials

All resources are completely free! 🎉`
  }

  // AWS related questions
  if (message.match(/aws|amazon|cloud|ec2|s3|lambda|eks|ecs/)) {
    return `Sandeep has extensive **AWS expertise** including:

• **Compute:** ECS, EC2, Lambda
• **Storage:** S3, EBS
• **Database:** RDS, DynamoDB
• **Networking:** CloudFront, Route 53, VPC
• **Security:** IAM, Security Groups, CloudTrail
• **Monitoring:** CloudWatch

He's also **AWS Solutions Architect Associate** certified!

Check out his blog post on [AWS Multi-Account Strategy](/blog/aws-multi-account-strategy) and [CloudWatch Monitoring best practices](/blog/monitoring-cloudwatch).`
  }

  // Kubernetes related questions
  if (message.match(/kubernetes|k8s|helm|container|docker/)) {
    return `Sandeep specializes in **Kubernetes & Containerization**:

• Kubernetes cluster management and orchestration
• Helm charts for application deployment
• Docker containerization
• Amazon EKS (Elastic Kubernetes Service)
• Microservices architecture

He implemented Kubernetes for containerized application deployment at Xenonstack.

Read more in his blog: [Kubernetes Best Practices for Production](/blog/kubernetes-best-practices)`
  }

  // CI/CD related questions
  if (message.match(/cicd|ci\/cd|pipeline|jenkins|github actions|deployment/)) {
    return `Sandeep has strong expertise in **CI/CD automation**:

• GitHub Actions workflows
• Jenkins pipeline development
• AWS DevOps services
• Automated deployment strategies
• Infrastructure as Code integration

He built robust CI/CD pipelines using Jenkins, GitHub, and AWS DevOps services for automated deployments.

Learn more: [CI/CD Pipeline Optimization](/blog/cicd-pipeline-optimization)`
  }

  // Terraform related questions
  if (message.match(/terraform|terragrunt|infrastructure as code|iac/)) {
    return `Sandeep is proficient in **Infrastructure as Code** with:

• Terraform for infrastructure provisioning
• Terragrunt for DRY configurations
• AWS CloudFormation
• Ansible for configuration management
• GitOps practices

He developed cloud automation using Terraform and Ansible at Xenonstack.

Read the comprehensive guide: [Terraform Infrastructure as Code](/blog/terraform-infrastructure)`
  }

  // Agentic AI related questions
  if (message.match(/agentic|rag|retrieval augmented|ai agent|agent framework|ai production|notebooklm/)) {
    return `Sandeep has extensive knowledge in **Agentic AI and RAG**! 🤖

**📚 Agentic Design Patterns Knowledge Base:**
${knowledgeBase.agenticAI.title}

**🔗 Access the comprehensive guide:**
${knowledgeBase.agenticAI.url}

**📖 Knowledge Areas Covered:**
${knowledgeBase.agenticAI.knowledgeAreas.map(area => `• ${area}`).join("\n")}

**💡 What you'll learn:**
• How to implement RAG (Retrieval-Augmented Generation)
• Advanced agent development frameworks
• AI production challenges and solutions
• Structured data management for AI systems
• Best practices for agentic AI architectures

This knowledge base is perfect for developers, architects, and AI practitioners looking to build intelligent, autonomous systems!

You can also find this resource in the [Downloads section](/downloads) along with other AI and DevOps resources.`
  }

  // Contact/hire questions
  if (message.match(/contact|email|hire|reach|connect|get in touch|availability/)) {
    return `**📧 Get in Touch with Sandeep:**

**Email:** ${knowledgeBase.owner.email}
**LinkedIn:** ${knowledgeBase.owner.linkedin}
**GitHub:** ${knowledgeBase.owner.github}

**Availability:** Currently available for consulting and contract work. Typical response time is within 24 hours.

Visit the [Contact page](/contact) to send a message directly!

**Resume:** [View Resume](${knowledgeBase.owner.resume})`
  }

  // Help/what can you do
  if (message.match(/help|what can|how can|assist|support/)) {
    return `I can help you with information about:

**👤 About Sandeep**
• Background and experience
• Skills and expertise
• Education and certifications

**💼 Professional Work**
• Portfolio projects
• Work experience
• Case studies

**📚 Learning Resources**
• YouTube videos and tutorials
• Blog articles
• DevOps tips

**🤖 AI & Technology**
• Agentic AI and RAG techniques
• AI production patterns
• Agent development frameworks

**📥 Free Resources**
• Downloadable templates and workflows
• AI prompts and guides
• Automation scripts

**📞 Contact Information**
• How to get in touch
• Availability
• Social links

Just ask me anything! For example: "Tell me about agentic AI" or "What free resources do you have?"`
  }

  // Location
  if (message.match(/location|where|based|from/)) {
    return `Sandeep is based in **India** and currently works remotely as a DevOps Engineer at 2070health in Bengaluru.

He's open to remote opportunities and consulting projects worldwide! 🌍`
  }

  // Thanks
  if (message.match(/thank|thanks|appreciate/)) {
    return `You're welcome! 😊 

Feel free to ask if you have any other questions about Sandeep's work, skills, or how to get in touch.

You can also:
• Watch tutorials on [YouTube](${knowledgeBase.youtube.channel})
• Read [blog articles](/blog)
• View [portfolio projects](/portfolio)
• [Get in touch](/contact)`
  }

  // Default response
  return `I can help you learn about Sandeep's:
• DevOps & Cloud expertise
• Work experience and projects
• YouTube tutorials on DuhOps World
• Blog articles on AWS, Kubernetes, Terraform
• Agentic AI and RAG knowledge
• Free downloads and resources
• How to get in touch

Try asking: "What are Sandeep's skills?" or "Tell me about agentic AI" or "What free resources do you have?"`
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm Sandeep's AI assistant. I can answer questions about his DevOps expertise, projects, YouTube tutorials, and more. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot thinking and respond
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col w-[380px] h-[600px] max-h-[80vh] bg-background border border-border rounded-lg shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">DevOps Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "bot" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className="text-[10px] opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                {message.sender === "user" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
