"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex justify-center w-full mb-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold relative pb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] rounded-full bg-gradient-to-r from-purple-500 via-emerald-400 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.h2>
    </div>
  )
}

