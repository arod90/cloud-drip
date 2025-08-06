'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  let timeoutRef = useRef(null)

  return [
    ['How It Works', '/#how-it-works'],
    ['Our Products', '/#secondary-features'],
    ['Reviews', '/#reviews'],
    ['FAQs', '/#faqs'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -mx-2 -my-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors delay-150 hover:text-cyan-300 hover:delay-0"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
