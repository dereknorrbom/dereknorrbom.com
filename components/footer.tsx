"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Rss } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Rss className="h-5 w-5" />, href: "#" },
  ]

  return (
    <footer className="py-16 px-5 bg-black/50 relative">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div
          className="footer-logo text-3xl font-bold mb-5 inline-block holographic-text"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          DEV/AI
        </motion.div>

        <p className="footer-text max-w-2xl mx-auto mb-8 text-sm opacity-70">
          Building the future through automation, infrastructure as code, and artificial intelligence solutions.
        </p>

        <div className="social-links flex justify-center gap-5 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="social-link w-10 h-10 rounded-full bg-black/30 border border-white/10 flex items-center justify-center"
              whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom pt-5 border-t border-white/10 text-xs opacity-60">
          <p>&copy; 2025 DevOps/AI Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

