import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "./Animations";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center
                 bg-gradient-to-br from-black via-gray-900 to-black
                 dark:from-white dark:via-gray-100 dark:to-white transition-colors relative"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] animate-pulse dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]"></div>

      {/* Profile Picture */}
      <motion.img
        src="../assets/profile.jpg" // Replace with your real image path
        alt="Your Name"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-cyan-400 shadow-lg object-cover mb-6"
      />

      {/* Name */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl font-extrabold
                   text-transparent bg-clip-text
                   bg-gradient-to-r from-cyan-400 to-purple-600
                   dark:from-purple-600 dark:to-pink-500"
      >
        Pratik Patil
      </motion.h1>

      {/* Typing multiple titles */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl md:text-2xl text-gray-400 dark:text-gray-700 min-h-[2rem] font-mono"
      >
        <TypeAnimation
          sequence={[
            "Software Developer",
            2000,
            "Open Source Contributor",
            2000,
            "UI/UX Enthusiast",
            2000,
          ]}
          speed={70}
          wrapper="span"
          repeat={Infinity}
          cursor={true}
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
        className="mt-8 flex space-x-6"
      >
        <a
          href="/resume.pdf"
          className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-500/30 hover:shadow-cyan-400/50 shadow-md transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-purple-500/20 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500/30 hover:shadow-purple-400/50 shadow-md transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
