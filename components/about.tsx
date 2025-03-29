"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import SectionTitle from "@/components/section-title"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "15+", label: "CI/CD Pipelines" },
    { value: "8+", label: "ML Models Deployed" },
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
    <section id="about" ref={ref} className="py-20 md:py-32 px-5 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          className="about-content flex flex-col md:flex-row items-center gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-image relative flex-1" variants={itemVariants}>
            <div className="absolute top-5 left-5 w-full h-full bg-gradient-to-br from-purple-500/30 to-emerald-500/30 opacity-70 filter blur-xl rounded-xl" />
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile"
              width={400}
              height={400}
              className="relative z-10 rounded-xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div className="about-text flex-1" variants={itemVariants}>
            <motion.p className="mb-5 text-lg leading-relaxed" variants={itemVariants}>
              Hello! I'm a DevOps and AI Engineer with a passion for automating infrastructure and building intelligent
              systems. With over 5 years of experience in cloud architecture, CI/CD pipelines, and machine learning
              operations, I help organizations streamline their development processes and implement cutting-edge AI
              solutions.
            </motion.p>
            <motion.p className="mb-5 text-lg leading-relaxed" variants={itemVariants}>
              My approach combines best practices from both software engineering and operations, with a focus on
              creating scalable, maintainable, and secure systems. I believe in the power of automation and data-driven
              decision-making to solve complex business problems.
            </motion.p>

            <motion.div className="data-stat grid grid-cols-1 md:grid-cols-3 gap-6 mt-10" variants={containerVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item relative overflow-hidden p-6 rounded-xl bg-black/30 border border-white/10 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(128, 0, 255, 0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10" />
                  <motion.h3
                    className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-400"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-sm opacity-70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

