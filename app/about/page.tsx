import Link from "next/link"
import { FileDown, Award, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <div className="flex items-center space-x-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
              <img src="/placeholder.svg?height=200&width=200" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Sandeep Choudhary</h2>
              <p className="text-muted-foreground">Cloud Infrastructure & DevOps Engineer</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a Cloud Infrastructure & DevOps Engineer with over 3 years of experience in designing,
            implementing, and managing cloud-based solutions. My expertise spans AWS services, cloud infrastructure,
            and DevOps practices, enabling businesses to achieve scalable and efficient infrastructure.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline">
              <Link href="/resume.pdf" target="_blank">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Core Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="flex items-center text-xl font-bold">
                <Award className="mr-2 h-5 w-5 text-primary" />
                AWS Cloud Infrastructure
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Amazon ECS, EC2, and Lambda</li>
                <li>• S3, RDS, and DynamoDB</li>
                <li>• CloudFront and Route 53</li>
                <li>• IAM and Security Groups</li>
                <li>• CloudWatch and CloudTrail</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <h3 className="flex items-center text-xl font-bold">
                <Award className="mr-2 h-5 w-5 text-primary" />
                DevOps Practices
              </h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• CI/CD pipeline implementation</li>
                <li>• Infrastructure as Code</li>
                <li>• Docker containerization</li>
                <li>• Monitoring and logging</li>
                <li>• Automation and scripting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                <p className="text-muted-foreground">College of Engineering & Technology, Bikaner</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AWS Solutions Architect Associate</h3>
                <p className="text-muted-foreground">Amazon Web Services</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Google Cloud Platform Fundamentals</h3>
                <p className="text-muted-foreground">Google Cloud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Personal Interests</h2>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not immersed in cloud technologies, I enjoy expressing my creativity through sketching and painting.
            Art provides me with a different perspective and helps me maintain a balanced approach to problem-solving
            in my technical work.
          </p>
        </div>

        <div className="pt-6">
          <Button asChild>
            <Link href="/contact">Let's Connect</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

