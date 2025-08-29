import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";

const projects = [
  {
    title: "Project One",
    desc: "Futuristic web app with AI integrations.",
    tech: "React, Tailwind, Node.js",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    desc: "Blockchain-based dApp.",
    tech: "Solidity, Hardhat, Next.js",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">Projects</h2>
      <div className="relative w-1 bg-gradient-to-b from-cyan-400 via-purple-600 to-pink-500 mx-auto"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-20 max-w-3xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`relative rounded-xl p-6 bg-white/5 border border-cyan-500/30 shadow-md hover:shadow-cyan-400/50 transition ${
              index % 2 === 0 ? "ml-10" : "mr-10 text-right"
            }`}
          >
            <h3 className="text-2xl font-semibold text-cyan-300">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.desc}</p>
            <p className="text-sm text-purple-300 mt-1">{project.tech}</p>
            <div className="mt-4 flex space-x-4 justify-end">
              <a href={project.github} className="text-cyan-400 hover:text-cyan-200">GitHub</a>
              <a href={project.demo} className="text-purple-400 hover:text-purple-200">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
