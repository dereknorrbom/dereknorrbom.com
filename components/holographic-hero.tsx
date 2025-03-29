"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HolographicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -50])
  
  // Pre-generate particle positions and animations for consistent behavior
  const particleAnimations = useRef(
    Array.from({ length: 80 }).map(() => {
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const targetX1 = Math.random() * 100;
      const targetY1 = Math.random() * 100;
      const targetX2 = Math.random() * 100;
      const targetY2 = Math.random() * 100;
      const particleSize = Math.random() * 6 + 2;
      const duration = 15 + Math.random() * 10;
      const initialOpacity = Math.random() * 0.5 + 0.3;
      const midOpacity = Math.random() * 0.7 + 0.3;
      
      return {
        initialX,
        initialY,
        targetX1,
        targetY1,
        targetX2,
        targetY2,
        particleSize,
        duration,
        initialOpacity,
        midOpacity,
      };
    })
  ).current;

  // Typing animation for subtitle
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Crafting the future through automation, infrastructure as code, and cutting-edge AI solutions."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0" />

      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="grid-background w-full h-full" />
      </div>

      {/* Holographic Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex items-center justify-center" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
          {/* Central Sphere */}
          <motion.div
            className="w-[300px] h-[300px] central-sphere"
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

          {/* Orbital Rings */}
          <motion.div
            className="absolute ring ring-1"
            animate={{ rotateZ: [0, 360] }}
            transition={{ 
              duration: 30, 
              repeat: Number.POSITIVE_INFINITY, 
              ease: "linear",
              repeatType: "loop" 
            }}
          />
          <motion.div
            className="absolute ring ring-2"
            animate={{ rotateZ: [0, -360] }}
            transition={{ 
              duration: 20, 
              repeat: Number.POSITIVE_INFINITY, 
              ease: "linear",
              repeatType: "loop" 
            }}
          />
          <motion.div
            className="absolute ring ring-3"
            animate={{ rotateZ: [0, 360] }}
            transition={{ 
              duration: 15, 
              repeat: Number.POSITIVE_INFINITY, 
              ease: "linear",
              repeatType: "loop" 
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        <div className="particles-container">
          {particleAnimations.map((particle, i) => (
            <motion.div
              key={i}
              className={cn(
                "particle",
                i % 3 === 0 ? "particle-emerald" : i % 3 === 1 ? "particle-purple" : "particle-cyan",
              )}
              initial={{
                x: `${particle.initialX}vw`,
                y: `${particle.initialY}vh`,
                opacity: particle.initialOpacity,
                scale: 1,
              }}
              animate={{
                x: [`${particle.initialX}vw`, `${particle.targetX1}vw`, `${particle.targetX2}vw`],
                y: [`${particle.initialY}vh`, `${particle.targetY1}vh`, `${particle.targetY2}vh`],
                opacity: [particle.initialOpacity, particle.midOpacity, particle.initialOpacity],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{
                width: `${particle.particleSize}px`,
                height: `${particle.particleSize}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{
          y,
          opacity,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-sm font-mono backdrop-blur-sm"
        >
          DevOps & AI Engineer
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="block glitch-text"
            data-text="Building"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building
          </motion.span>
          <motion.span
            className="block mt-2 holographic-text-purple"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Digital Futures
          </motion.span>
          <motion.span
            className="block mt-2 text-gradient-green-purple"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            With Code & AI
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto h-16 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {displayedText}
          <motion.span
            className="inline-block w-2 h-5 bg-emerald-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button
            asChild
            className="relative overflow-hidden group bg-emerald-900/30 border border-emerald-500/50 hover:bg-emerald-800/40 transition-all duration-300 text-white backdrop-blur-sm"
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
            className="relative overflow-hidden group border-purple-500/50 hover:border-purple-400/80 transition-all duration-300 text-white backdrop-blur-sm"
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
        className="absolute bottom-10 left-0 right-0 mx-auto w-max flex flex-col items-center"
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

