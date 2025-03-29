"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import SectionTitle from "@/components/section-title"
import ProjectModal from "@/components/project-modal"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  links: {
    details?: boolean
    demo?: string
    github?: string
    caseStudy?: string
    tutorial?: string
    dashboard?: string
  }
  modalContent?: {
    subtitle: string
    overview: string
    features: string[]
    technologies: string
    challenges: string
    results: string
  }
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects: Project[] = [
    {
      id: "project1",
      title: "AI-Powered DevOps Pipeline",
      description:
        "Developed an intelligent CI/CD pipeline that uses machine learning to predict build failures and optimize deployment strategies.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Jenkins", "TensorFlow", "AWS", "Python"],
      links: {
        details: true,
        demo: "#",
      },
      modalContent: {
        subtitle: "Intelligent CI/CD with Predictive Analytics",
        overview:
          "Developed an innovative CI/CD pipeline that leverages machine learning to predict build failures and optimize deployment strategies. This system analyzes historical build data, code changes, and system metrics to identify potential issues before they occur.",
        features: [
          "Predictive build failure detection with 85% accuracy",
          "Intelligent resource allocation based on workload patterns",
          "Automatic test prioritization to catch issues earlier",
          "Smart deployment scheduling to minimize system impact",
          "Real-time performance monitoring and anomaly detection",
        ],
        technologies: "Jenkins, TensorFlow, AWS EC2, S3, Lambda, Python, Docker, Kubernetes, Prometheus, Grafana",
        challenges:
          "One of the biggest challenges was collecting and preprocessing heterogeneous data from multiple sources in the CI/CD pipeline. We implemented a custom data pipeline that normalized and enriched the data, making it suitable for machine learning models.",
        results:
          "The AI-powered pipeline reduced build failures by 62%, decreased deployment time by 45%, and improved resource utilization by 30%. This resulted in significant cost savings and faster time-to-market for new features.",
      },
    },
    {
      id: "project2",
      title: "Kubernetes Operator for ML Models",
      description:
        "Created a custom Kubernetes operator that automates the deployment, scaling, and monitoring of machine learning models in production.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Kubernetes", "Go", "MLflow", "Prometheus"],
      links: {
        details: true,
        github: "#",
      },
    },
    {
      id: "project3",
      title: "Infrastructure as Code Generator",
      description:
        "Built an AI-powered tool that generates Terraform code based on natural language descriptions of desired infrastructure.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["GPT-4", "Terraform", "Python", "AWS CDK"],
      links: {
        details: true,
        demo: "#",
      },
    },
    {
      id: "project4",
      title: "Real-time System Anomaly Detection",
      description:
        "Implemented a real-time anomaly detection system for cloud infrastructure that identifies unusual patterns in system metrics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Kafka", "Spark", "PyTorch", "Grafana"],
      links: {
        details: true,
        caseStudy: "#",
      },
    },
    {
      id: "project5",
      title: "GitOps Workflow Automation",
      description:
        "Developed a complete GitOps workflow that automates infrastructure changes through Git repositories with proper approval processes.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ArgoCD", "GitHub Actions", "Kubernetes", "Flux"],
      links: {
        details: true,
        tutorial: "#",
      },
    },
    {
      id: "project6",
      title: "Multi-Cloud Cost Optimizer",
      description:
        "Created a tool that analyzes multi-cloud spending patterns and recommends cost optimization strategies using AI-driven forecasting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["AWS", "GCP", "Azure", "Prophet"],
      links: {
        details: true,
        dashboard: "#",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 px-5 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Featured Projects</SectionTitle>

        <motion.div
          className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card flex flex-col h-[400px] rounded-xl overflow-hidden bg-black/30 border border-white/10 relative"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(128, 0, 255, 0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-emerald-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="project-image h-[200px] overflow-hidden relative">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              </div>

              <div className="project-content flex flex-col flex-1 p-5">
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">{project.title}</h3>
                <p className="text-sm opacity-80 mb-4 flex-1">{project.description}</p>

                <div className="project-tech flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag text-xs py-1 px-3 rounded-full bg-black/50 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links flex gap-3">
                  {project.links.details && (
                    <button
                      onClick={() => setActiveProject(project)}
                      className="project-link px-3 py-2 rounded text-sm border border-emerald-500/30 bg-black/20 hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(0,255,128,0.3)] transition-all"
                    >
                      Details
                    </button>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link px-3 py-2 rounded text-sm border border-purple-500/30 bg-black/20 hover:border-purple-500 hover:shadow-[0_0_10px_rgba(128,0,255,0.3)] transition-all flex items-center gap-1"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link px-3 py-2 rounded text-sm border border-white/10 bg-black/20 hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(0,255,128,0.3)] transition-all flex items-center gap-1"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </div>
    </section>
  )
}

