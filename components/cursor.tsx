"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setHidden(false)

      const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mousedown", onMouseDown)
        document.addEventListener("mouseup", onMouseUp)
        document.addEventListener("mouseenter", onMouseEnter)
        document.addEventListener("mouseleave", onMouseLeave)
      }

      const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mousedown", onMouseDown)
        document.removeEventListener("mouseup", onMouseUp)
        document.removeEventListener("mouseenter", onMouseEnter)
        document.removeEventListener("mouseleave", onMouseLeave)
      }

      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })

        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
        const isLink =
          hoveredElement instanceof HTMLAnchorElement ||
          hoveredElement instanceof HTMLButtonElement ||
          hoveredElement?.closest("a") ||
          hoveredElement?.closest("button")

        setLinkHovered(!!isLink)
      }

      const onMouseDown = () => {
        setClicked(true)
      }

      const onMouseUp = () => {
        setClicked(false)
      }

      const onMouseEnter = () => {
        setHidden(false)
      }

      const onMouseLeave = () => {
        setHidden(true)
      }

      addEventListeners()
      return () => removeEventListeners()
    }
  }, [])

  if (hidden) return null

  return (
    <>
      <motion.div
        className="cursor cursor-dot fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, mass: 0.2 }}
        style={{
          backgroundColor: "var(--primary)",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
        }}
      />
      <motion.div
        className="cursor cursor-outline fixed pointer-events-none z-[9999]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, mass: 0.5 }}
        style={{
          border: "2px solid var(--primary)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    </>
  )
}

