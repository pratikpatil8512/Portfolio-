import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-black via-gray-900 to-black pt-24 ..."
    >
      {/* Background grid (behind everything) */}
      <div className="pointer-events-none absolute inset-0 -z-10 
                      bg-[linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px)]
                      bg-[size:40px_40px]" />

      {/* Content column */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        {/* Avatar + neon ring as a single unit */}
        <div className="relative w-56 h-56 flex items-center justify-center">
          {/* Rotating ring */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-cyan-400"
            style={{
              boxShadow:
                "0 0 20px #22d3ee, 0 0 40px #22d3ee, 0 0 60px #22d3ee",
            }}
          />
          {/* Photo (centered inside ring) */}
          <motion.img
            src="/profile.jpg" // put profile.jpg in /public
            alt="Pratik Patil"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-56 h-56 rounded-full object-cover border-4 border-cyan-300 bg-black"
          />
        </div>

        {/* Name (no blur) */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight
                     text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
        >
          Pratik Patil
        </motion.h1>

        {/* Titles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 text-lg md:text-2xl text-gray-300 font-mono min-h-[2rem]"
        >
          <TypeAnimation
            sequence={[
              "Software Developer 🚀",
              2000,
              "Open Source Contributor 🌍",
              2000,
              "UI/UX Enthusiast 🎨",
              2000,
            ]}
            speed={60}
            wrapper="span"
            repeat={Infinity}
            cursor
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300
                       bg-cyan-500/10 hover:bg-cyan-500/20
                       shadow-[0_0_12px_rgba(34,211,238,0.35)] transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-purple-400 text-purple-300
                       bg-purple-500/10 hover:bg-purple-500/20
                       shadow-[0_0_12px_rgba(168,85,247,0.35)] transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-10 text-cyan-300/80"
        >
          <div className="mx-auto w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-transparent animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
