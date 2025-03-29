"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-5 py-4 flex justify-between items-center backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? "border-primary/20" : "border-transparent"
      }`}
    >
      <motion.div
        className="logo relative overflow-hidden px-4 py-2 rounded-md border border-white/10 font-bold text-xl tracking-wider"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="holographic-text">DEV/AI</span>
        <div className="absolute inset-0 bg-holographic opacity-10" />
        <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full shine-effect" />
      </motion.div>

      <nav className="hidden md:block">
        <ul className="flex gap-5">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link
                href={item.href}
                className="px-4 py-2 rounded-md border border-white/10 transition-all hover:border-primary hover:shadow-glow-sm block"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon" className="border-white/10">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-dark/95 border-primary/20 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 rounded-md border border-white/10 transition-all hover:border-primary hover:shadow-glow-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </motion.header>
  )
}

