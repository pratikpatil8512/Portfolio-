import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";

export default function About() {
  const timeline = [
    { year: "2021 - Present", title: "Software Developer", desc: "Building futuristic applications with modern tech." },
    { year: "2020", title: "Internship @ TechCorp", desc: "Worked on enterprise backend systems." },
    { year: "2018 - 2021", title: "B.Tech Computer Science", desc: "Graduated with 9.0 GPA" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl text-center font-bold text-cyan-400 mb-12"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-3xl mx-auto text-center leading-relaxed"
        >
          I am a passionate <span className="text-cyan-400 font-semibold">Software Developer</span> 
          who loves creating immersive user experiences and pushing the boundaries of web technology 
          with <span className="text-purple-400">cutting-edge frameworks</span> and open-source contributions.
        </motion.p>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 border-l-2 border-cyan-400/40 ml-8 space-y-12"
        >
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative pl-8"
            >
              <span className="absolute -left-3 w-6 h-6 rounded-full bg-cyan-400 shadow-cyan-400 shadow-md"></span>
              <h3 className="text-xl font-bold text-cyan-300">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
