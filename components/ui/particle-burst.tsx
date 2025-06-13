"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  color: string
}

const colors = [
  "#FF6B6B", // coral red
  "#4ECDC4", // turquoise
  "#45B7D1", // sky blue
  "#96CEB4", // sage green
  "#FFEEAD", // cream
  "#D4A5A5", // dusty rose
  "#9B59B6", // purple
  "#3498DB", // blue
]

export default function ParticleBurst() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100, // Random x between -100 and 100
      y: Math.random() * 200 - 100, // Random y between -100 and 100
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)

    // Cleanup particles after animation
    const timeout = setTimeout(() => {
      setParticles([])
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: particle.color,
            left: "50%",
            top: "50%",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
} 