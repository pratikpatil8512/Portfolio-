import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";

const experiences = [
  { title: "Internship @ BigTech", desc: "Worked on scalable backend services.", year: "2022" },
  { title: "Hackathon Winner", desc: "Built a blockchain-based solution.", year: "2021" },
  { title: "Open Source Contributor", desc: "Contributed to multiple GitHub repos.", year: "2020" },
  { title: "Certification", desc: "AWS Certified Developer", year: "2020" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-t from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-cyan-400 mb-16"
        >
          Experience & Achievements
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="border border-purple-400/30 rounded-xl p-6 bg-white/5 text-center 
                         text-gray-300 shadow hover:shadow-purple-400/40 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-purple-300">{exp.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{exp.desc}</p>
              <p className="mt-1 text-cyan-300 text-sm">{exp.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
