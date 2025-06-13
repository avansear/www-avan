"use client"

import * as motion from "motion/react-client"
import { useRef } from "react"

const images = [
    { src: "/DSC_0392.JPG", alt: "Avan 4" },
    { src: "/DSC_0392.JPG", alt: "Avan 5" },
    { src: "/DSC_0392.JPG", alt: "Avan 6" },
    { src: "/DSC_0392.JPG", alt: "Avan 7" },
    { src: "/DSC_0392.JPG", alt: "Avan 8" },
    { src: "/DSC_0392.JPG", alt: "Avan 9" },
]

export default function DraggableImages() {
    const constraintsRef = useRef<HTMLDivElement>(null)

    return (
        <motion.div ref={constraintsRef} style={constraints}>
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    style={{
                        ...box,
                        backgroundImage: `url('${image.src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "absolute",
                        top: `${Math.random() * 80}%`,
                        left: `${Math.random() * 80}%`,
                    }}
                />
            ))}
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

const constraints = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "var(--hue-1-transparent)",
    borderRadius: 10,
}

const box = {
    width: 200,
    height: 200,
    borderRadius: 10,
}
