"use client"

import Image from "next/image";
import Navbar from "../components/ui/navbar";
import { Button } from "@/components/ui/button";
import DraggableImages from "@/components/ui/draggable-images";
import PhotoGrid from "@/components/ui/photo-grid";
import { Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBurst from "@/components/ui/particle-burst";

export default function Home() {
  const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isFirstSectionVisible) {
          setShowParticles(true);
          setTimeout(() => setShowParticles(false), 1000);
        }
        setIsFirstSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const firstSection = document.getElementById("first-section");
    if (firstSection) {
      observer.observe(firstSection);
    }

    return () => {
      if (firstSection) {
        observer.unobserve(firstSection);
      }
    };
  }, [isFirstSectionVisible]);

  return (
    <>
      <AnimatePresence>
        {isFirstSectionVisible && (
          <motion.div 
            className="z-50 fixed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ 
              scale: 0.5, 
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            <DraggableImages />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showParticles && <ParticleBurst />}
      </AnimatePresence>
      
      <Navbar />
      <div className="flex flex-col">
        <section id="first-section" className="h-screen flex flex-col items-center justify-center gap-8 p-8">
          <h1 className="text-9xl font-bold">Welcome I'm avan ;)</h1>
          <h2 className="text-2xl">I'm a designer but I love doing other stuff too</h2>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
          <h1 className="text-6xl">Likeee photography</h1>
          <h2 className="text-2xl">I love taking photos of people and places</h2>
          <PhotoGrid />
        </section>

        <footer className="h-screen flex flex-col items-center justify-center gap-8 p-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-6xl">and that's pretty much it :))</h1>
              <h2 className="text-2xl">Check out more stuff or reach out on socials</h2>
            </div>
            <div className="flex flex-row gap-8 items-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-2xl"
                href="https://instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-24 h-24" />
                Instagram
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-2xl"
                href="https://linkedin.com/in/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-24 h-24" />
                LinkedIn
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-2xl"
                href="https://instagram.com/your_other_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-24 h-24" />
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
