import React from "react";
import { motion } from "framer-motion";
import { zoomIn, staggerContainer } from "./Animations";
import { FaReact, FaJava, FaDatabase, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiPostgresql, SiJavascript } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <FaDatabase />, name: "SQL/DBMS" },
  { icon: <FaGithub />, name: "GitHub" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomIn}
          className="text-center text-4xl font-bold text-purple-400 mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-items-center"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={zoomIn}
              className="flex flex-col items-center justify-center text-cyan-400 
                         text-4xl p-6 bg-white/5 border border-cyan-400/30 rounded-xl shadow hover:shadow-cyan-400/40 
                         hover:scale-110 transition"
            >
              {skill.icon}
              <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
