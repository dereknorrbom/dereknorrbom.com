"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "@/components/section-title"

interface Skill {
  name: string
  percentage: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories: SkillCategory[] = [
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", percentage: 90 },
        { name: "Kubernetes", percentage: 85 },
        { name: "Docker", percentage: 95 },
        { name: "Terraform", percentage: 85 },
        { name: "CI/CD Pipelines", percentage: 90 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", percentage: 80 },
        { name: "TensorFlow", percentage: 85 },
        { name: "MLOps", percentage: 90 },
        { name: "Computer Vision", percentage: 75 },
        { name: "NLP", percentage: 80 },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", percentage: 95 },
        { name: "Go", percentage: 80 },
        { name: "JavaScript", percentage: 85 },
        { name: "Bash/Shell", percentage: 90 },
        { name: "SQL", percentage: 85 },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 px-5 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Technical Skills</SectionTitle>

        <motion.div
          className="skills-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category relative overflow-hidden rounded-xl p-8 bg-black/30 border border-white/10"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(128, 0, 255, 0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-emerald-400 to-purple-500" />
              <h3 className="text-xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-400">{category.title}</h3>
              <ul className="skill-list space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-emerald-400">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar h-2 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                      <motion.div
                        className="skill-progress h-full rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

