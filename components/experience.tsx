"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "@/components/section-title"

interface TimelineItem {
  period: string
  title: string
  company: string
  description: string
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const timelineItems: TimelineItem[] = [
    {
      period: "2023 - Present",
      title: "Senior DevOps/AI Engineer",
      company: "Future Tech Solutions",
      description:
        "Leading the development of MLOps platforms and CI/CD pipelines for AI models. Implementing infrastructure as code for large-scale machine learning workloads using Terraform and Kubernetes.",
    },
    {
      period: "2021 - 2023",
      title: "DevOps Engineer",
      company: "Cloud Innovations Inc.",
      description:
        "Designed and implemented container orchestration systems and microservices architectures. Automated deployment processes with Jenkins, Docker, and Kubernetes, reducing deployment time by 70%.",
    },
    {
      period: "2019 - 2021",
      title: "Machine Learning Engineer",
      company: "AI Labs",
      description:
        "Developed and deployed machine learning models for computer vision and natural language processing applications. Created efficient data pipelines for model training and validation.",
    },
    {
      period: "2017 - 2019",
      title: "Software Engineer",
      company: "Tech Innovators",
      description:
        "Built RESTful APIs and backend services using Python and Go. Collaborated with cross-functional teams to deliver high-quality software solutions for enterprise clients.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 px-5 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Professional Experience</SectionTitle>

        <motion.div
          className="experience-container mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 gap-6">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="experience-card relative"
                custom={index}
              >
                {/* Glowing connector */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-[26px] top-[70px] w-[4px] h-[calc(100%-40px)] bg-gradient-to-b from-emerald-500/50 to-purple-500/50 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-emerald-500 to-purple-500/0"
                      animate={{ 
                        y: ["0%", "100%", "100%"],
                        opacity: [0.7, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  {/* Left column: Period badge and marker */}
                  <div className="flex md:flex-col items-start min-w-[160px]">
                    <motion.div 
                      className="timeline-marker w-14 h-14 rounded-full flex items-center justify-center bg-black/40 border-2 border-emerald-500 shadow-[0_0_15px_rgba(0,255,128,0.3)] z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <span className="text-emerald-400 font-mono text-xs">{item.period.split(' - ')[0]}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="ml-3 md:ml-7 md:mt-4 px-4 py-2 md:py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-purple-500/30 text-xs md:text-sm font-mono"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {item.period}
                    </motion.div>
                  </div>
                  
                  {/* Right column: Content card */}
                  <motion.div 
                    className="experience-content flex-1 p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden relative"
                    whileHover={{ 
                      boxShadow: "0 15px 30px rgba(128, 0, 255, 0.2)",
                      y: -5,
                      borderColor: "rgba(0, 255, 128, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-emerald-500/5 pointer-events-none" />
                    
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
                      {item.title}
                    </h3>
                    <h4 className="text-base text-white/70 mb-4">{item.company}</h4>
                    <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
                    
                    {/* Animated corner accent */}
                    <motion.div 
                      className="absolute top-0 right-0 w-20 h-20 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="absolute top-0 right-0 w-[120%] h-[120%] bg-gradient-to-bl from-emerald-500/20 to-transparent transform rotate-45 translate-x-[50%] translate-y-[-50%]" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

