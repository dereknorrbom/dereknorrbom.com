"use client"

import { useEffect, useRef } from "react"
import { motion, useTransform, useMotionValue, useSpring, type MotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeroProps {
  scrollOpacity: MotionValue<number>
}

export default function Hero({ scrollOpacity }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const container = containerRef.current
      if (!container) return

      const { left, top, width, height } = container.getBoundingClientRect()
      const x = clientX - left
      const y = clientY - top

      mouseX.set(x - width / 2)
      mouseY.set(y - height / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(mouseYSpring, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-5, 5])

  return (
    <section
      ref={containerRef}
      className="hero relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #0a0a1a 0%, #000010 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid-background w-full h-full"></div>
      </div>

      {/* Central sphere and orbital rings container */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {/* Central glowing sphere */}
        <motion.div
          className="central-sphere absolute"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* 3D Orbital rings */}
        <motion.div
          className="orbital-ring-container absolute"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          <motion.div
            className="ring ring-1"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="ring ring-2"
            animate={{ rotateZ: -360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="ring ring-3"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Content positioned over the 3D elements */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-4"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        <motion.div
          className="inline-block mb-6 px-4 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-mono"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          DevOps & AI Engineer
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="block glitch-text" data-text="Building">
            Building
          </span>
          <span className="block mt-2 holographic-text-purple">Digital Futures</span>
          <span className="block mt-2 text-gradient-green-purple">With Code & AI</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting the future through automation, infrastructure as code, and cutting-edge artificial intelligence
          solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            asChild
            className="relative overflow-hidden group bg-emerald-900/30 border border-emerald-500/50 hover:bg-emerald-800/40 transition-all duration-300 text-white"
            size="lg"
          >
            <a href="#projects">
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="relative overflow-hidden group border-purple-500/50 hover:border-purple-400/80 transition-all duration-300 text-white"
            size="lg"
          >
            <a href="#contact">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated code lines at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 overflow-hidden">
        <div className="code-lines">
          <div className="code-line text-emerald-400">const future = await buildTomorrow(innovation, technology);</div>
          <div className="code-line text-purple-400">if (challenges) return solveWithAI(challenges);</div>
          <div className="code-line text-cyan-400">export default function DevOpsEngineer() {}</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <span className="text-sm text-emerald-400/80 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-emerald-500/50 flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-emerald-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

