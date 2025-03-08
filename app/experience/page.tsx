import { CalendarDays, Building } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h1>
          <p className="text-muted-foreground text-lg">
            My professional journey in cloud infrastructure and DevOps engineering.
          </p>
        </div>

        <div className="timeline-container">
          {/* Current Role */}
          <div className="mb-12 relative">
            <div className="timeline-dot"></div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold">DevOps Engineer</h2>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>2070health, Bengaluru</span>
                  </div>
                </div>
                <div className="flex items-center text-primary">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>Jun 2024 - Present</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Managing multiple AWS accounts and leading DevOps initiatives for product releases. Responsible for architecting solutions and implementing CI/CD pipelines.
                </p>
                <h3 className="font-semibold text-lg">Key Responsibilities:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Managing multiple AWS accounts and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Architecting and implementing DevOps solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Streamlining product release processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Implementing and maintaining CI/CD pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Previous Role */}
          <div className="mb-12 relative">
            <div className="timeline-dot"></div>
            <div className="rounded-lg border border-border/40 bg-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold">Cloud and DevOps Engineer</h2>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Xenonstack, Mohali</span>
                  </div>
                </div>
                <div className="flex items-center text-primary">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>Nov 2021 - Apr 2024</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Led cloud infrastructure and DevOps initiatives, implementing Kubernetes orchestration and developing comprehensive DevOps strategies.
                </p>
                <h3 className="font-semibold text-lg">Key Responsibilities:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Implemented Kubernetes for containerized application deployment and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Developed and maintained cloud automation using Serverless, Terraform, and Ansible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Designed and implemented CI/CD pipelines with Jenkins, GitHub, and AWS DevOps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Monitored and optimized application performance and infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Orchestrated cloud platform deployments with Kubernetes and Docker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Supervised a team of 7 and provided mentorship to interns</span>
                  </li>
                </ul>
                <h3 className="font-semibold text-lg">Key Achievements:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Successfully implemented and maintained reliable DevOps practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Improved application deployment efficiency through automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Led successful cloud migration projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

