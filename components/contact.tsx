"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionTitle from "@/components/section-title"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="h-5 w-5 text-emerald-400" />,
      title: "Email",
      content: "contact@devaiportfolio.com",
      link: "mailto:contact@devaiportfolio.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-emerald-400" />,
      title: "Location",
      content: "San Francisco, CA",
    },
    {
      icon: <Github className="h-5 w-5 text-emerald-400" />,
      title: "GitHub",
      content: "github.com/devaiportfolio",
      link: "https://github.com/devaiportfolio",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-emerald-400" />,
      title: "LinkedIn",
      content: "linkedin.com/in/devaiportfolio",
      link: "https://linkedin.com/in/devaiportfolio",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Here you would typically send the form data to your backend
    alert("Message sent! (This is a demo)")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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
    <section id="contact" ref={ref} className="py-20 md:py-32 px-5 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Get In Touch</SectionTitle>

        <motion.div
          className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info space-y-5" variants={containerVariants}>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="contact-item flex items-center gap-4 p-5 rounded-xl bg-black/30 border border-white/10"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(128, 0, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="contact-icon w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="contact-text">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm opacity-70 hover:opacity-100 hover:text-emerald-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm opacity-70">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="contact-form p-8 rounded-xl bg-black/30 border border-white/10"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-group">
                <label htmlFor="name" className="block mb-2 text-sm opacity-80">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 focus:border-emerald-500"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block mb-2 text-sm opacity-80">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 focus:border-emerald-500"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="block mb-2 text-sm opacity-80">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 focus:border-emerald-500"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block mb-2 text-sm opacity-80">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 focus:border-emerald-500 min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-emerald-500/50 hover:shadow-[0_0_15px_rgba(0,255,128,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

