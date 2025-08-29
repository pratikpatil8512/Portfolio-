import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animations";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-black border-t border-cyan-400/20 py-6 text-center text-gray-400"
    >
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#skills" className="hover:text-cyan-400">Skills</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </motion.footer>
  );
}
