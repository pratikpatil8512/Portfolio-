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
  {
    title: "Project Three",
    desc: "Crime prediction AI system with live maps.",
    tech: "Python, Pandas, Google Maps API",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-20"
      >
        Projects
      </motion.h2>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-32 bottom-10 w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-600 to-pink-500 shadow-lg shadow-cyan-400/50"></div>

      {/* Projects */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-5xl mx-auto space-y-20"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Glowing Dot on Timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 border-4 border-black shadow-lg shadow-cyan-500 animate-pulse"></div>

            {/* Project Card */}
            <div
              className={`w-[45%] p-6 rounded-xl bg-white/5 border border-cyan-500/30 backdrop-blur-md shadow-lg hover:shadow-cyan-400/50 transition-all duration-500
              ${index % 2 === 0 ? "text-left" : "text-right"}`}
            >
              <h3 className="text-2xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.desc}</p>
              <p className="text-sm text-purple-300 mt-1">{project.tech}</p>

              <div
                className={`mt-4 flex space-x-4 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <a
                  href={project.github}
                  className="px-3 py-1 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="px-3 py-1 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
