"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import Image from "next/image"

const photos = [
    { src: "/PSX_20250427_200249.jpg", alt: "Photo 1" },
    { src: "/oleg-demakov-zEIApnww3fU-unsplash.jpg", alt: "Photo 2" },
    { src: "/Life-is-Strange-Screenshot-013-633996040.jpg", alt: "Photo 3" },
    { src: "/kevin-mueller-yUqTvrvVfrE-unsplash.jpg", alt: "Photo 4" },
    { src: "/Frame 82(1).png", alt: "Photo 5" },
    { src: "/DSC_0392.JPG", alt: "Photo 6" },
]

export default function PhotoGrid() {
    const [order, setOrder] = useState(photos)
    const [selectedId, setSelectedId] = useState<string | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle([...order])), 3000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <>
            <motion.ul style={container}>
                {order.map((photo) => (
                    <motion.li
                        key={photo.alt}
                        layoutId={photo.alt}
                        onClick={() => setSelectedId(photo.alt)}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                        }}
                        style={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                        />
                    </motion.li>
                ))}
            </motion.ul>

            {selectedId && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={overlay}
                    onClick={() => setSelectedId(null)}
                >
                    <motion.div
                        layoutId={selectedId}
                        style={modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={photos.find(p => p.alt === selectedId)?.src || ""}
                            alt={selectedId}
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: typeof photos) {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: "0 auto",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    width: "100%",
    maxWidth: "1200px",
}

const item: React.CSSProperties = {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
}

const overlay: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
}

const modal: React.CSSProperties = {
    position: "relative",
    width: "90vw",
    height: "90vh",
    borderRadius: "10px",
    overflow: "hidden",
} 