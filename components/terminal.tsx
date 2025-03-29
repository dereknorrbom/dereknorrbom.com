"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TerminalIcon, X } from "lucide-react"

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState<{ type: "command" | "response"; content: string }[]>([
    { type: "response", content: "Welcome to the DevOps/AI Terminal. Type 'help' for commands." },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [output])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim()) {
      const newOutput = [...output, { type: "command", content: `$ ${command}` }]

      // Process command
      let response = ""
      const cmd = command.toLowerCase().trim()

      if (cmd === "help") {
        response = `
          Available commands:<br>
          <span className="text-primary">help</span> - Show available commands<br>
          <span className="text-primary">about</span> - Display information about me<br>
          <span className="text-primary">skills</span> - List technical skills<br>
          <span className="text-primary">projects</span> - View my projects<br>
          <span className="text-primary">contact</span> - Show contact information<br>
          <span className="text-primary">clear</span> - Clear the terminal<br>
          <span className="text-primary">exit</span> - Close the terminal
        `
      } else if (cmd === "about") {
        response = `DevOps & AI Engineer with 5+ years of experience in cloud architecture, CI/CD pipelines, and MLOps. Passionate about automation and infrastructure as code.`
      } else if (cmd === "skills") {
        response = `
          <span className="text-primary">DevOps:</span> AWS, Kubernetes, Docker, Terraform, CI/CD<br>
          <span className="text-secondary">AI/ML:</span> PyTorch, TensorFlow, MLOps, Computer Vision, NLP<br>
          <span className="text-tertiary">Programming:</span> Python, Go, JavaScript, Bash, SQL
        `
      } else if (cmd === "projects") {
        response = `
          1. AI-Powered DevOps Pipeline<br>
          2. Kubernetes Operator for ML Models<br>
          3. Infrastructure as Code Generator<br>
          4. Real-time System Anomaly Detection<br>
          5. GitOps Workflow Automation<br>
          6. Multi-Cloud Cost Optimizer<br>
          <br>
          Use <span className="text-primary">projects &lt;number&gt;</span> to view details.
        `
      } else if (cmd.startsWith("projects ")) {
        const projectNum = cmd.split(" ")[1]
        if (projectNum === "1") {
          response = `
            <span className="text-primary">AI-Powered DevOps Pipeline</span><br>
            Developed an intelligent CI/CD pipeline that uses machine learning to predict build failures and optimize deployment strategies.<br>
            <span className="text-tertiary">Technologies:</span> Jenkins, TensorFlow, AWS, Python
          `
        } else if (["2", "3", "4", "5", "6"].includes(projectNum)) {
          response = `Project ${projectNum} details available. Click on 'Details' in the Projects section to learn more.`
        } else {
          response = `Project not found. Use 'projects' to see available projects.`
        }
      } else if (cmd === "contact") {
        response = `
          <span className="text-primary">Email:</span> contact@devaiportfolio.com<br>
          <span className="text-primary">GitHub:</span> github.com/devaiportfolio<br>
          <span className="text-primary">LinkedIn:</span> linkedin.com/in/devaiportfolio
        `
      } else if (cmd === "clear") {
        setOutput([])
        setCommand("")
        return
      } else if (cmd === "exit") {
        setIsOpen(false)
        setCommand("")
        return
      } else {
        response = `Command not found: ${command}. Type 'help' for available commands.`
      }

      newOutput.push({ type: "response", content: response })
      setOutput(newOutput)
      setCommand("")
    }
  }

  return (
    <>
      <motion.button
        className="terminal-toggle fixed bottom-5 right-5 z-50 w-12 h-12 rounded-md bg-black/80 border border-primary flex items-center justify-center shadow-glow-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <TerminalIcon className="h-5 w-5 text-primary" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="terminal fixed bottom-5 right-5 z-40 w-full max-w-md h-[300px] bg-black/80 border border-primary rounded-md shadow-glow p-4 flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="terminal-header flex justify-between items-center pb-3 mb-3 border-b border-primary">
              <div className="terminal-title font-bold text-primary">DevOps/AI Terminal</div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={terminalBodyRef} className="terminal-body flex-1 overflow-y-auto space-y-2 text-sm">
              {output.map((item, index) => (
                <div
                  key={index}
                  className={`terminal-output ${item.type === "command" ? "text-tertiary" : "text-light"}`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ))}
            </div>

            <div className="terminal-input flex items-center mt-3 pt-3 border-t border-white/10">
              <span className="text-tertiary mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-light"
                placeholder="Type a command..."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

