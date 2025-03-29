"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HolographicHero from "@/components/holographic-hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Terminal from "@/components/terminal"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
        <Header />
        <HolographicHero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <Terminal />
      </main>
    </ThemeProvider>
  )
}

