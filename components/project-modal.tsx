"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface Project {
  id: string
  title: string
  image: string
  modalContent?: {
    subtitle: string
    overview: string
    features: string[]
    technologies: string
    challenges: string
    results: string
  }
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark/95 rounded-xl p-8 border border-primary shadow-glow relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:border-primary hover:shadow-glow-sm transition-all"
          >
            <X size={16} />
          </button>

          <div className="modal-header mb-6">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-base opacity-70">{project.modalContent?.subtitle}</p>
          </div>

          <div className="modal-body">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full rounded-lg mb-6"
            />

            {project.modalContent && (
              <div className="project-details space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                  <p className="text-base leading-relaxed">{project.modalContent.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.modalContent.features.map((feature, index) => (
                      <li key={index} className="text-base">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <p className="text-base">{project.modalContent.technologies}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenges & Solutions</h3>
                  <p className="text-base leading-relaxed">{project.modalContent.challenges}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Results</h3>
                  <p className="text-base leading-relaxed">{project.modalContent.results}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

