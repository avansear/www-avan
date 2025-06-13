"use client"

import * as motion from "motion/react-client"
import { useRef } from "react"

const images = [
    { src: "/PSX_20250427_200249.jpg", alt: "Photo 1" },
    { src: "/oleg-demakov-zEIApnww3fU-unsplash.jpg", alt: "Photo 2" },
    { src: "/Life-is-Strange-Screenshot-013-633996040.jpg", alt: "Photo 3" },
    { src: "/kevin-mueller-yUqTvrvVfrE-unsplash.jpg", alt: "Photo 4" },
    { src: "/Frame 82(1).png", alt: "Photo 5" },
    { src: "/DSC_0392.JPG", alt: "Photo 6" },
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
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) translateY(${Math.random() * 50}px) translateX(${Math.random() * 50}px)`,
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
