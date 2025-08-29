import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-cyan-900/20"></div>

      <div className="container mx-auto px-6 relative">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-cyan-400 mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white/5 border border-cyan-400/30 p-8 rounded-2xl space-y-6"
        >
          <motion.input
            variants={fadeInUp}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
          />
          <motion.input
            variants={fadeInUp}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
          />
          <motion.textarea
            variants={fadeInUp}
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-black/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
          />
          <motion.button
            variants={fadeInUp}
            className="w-full px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-500/30 hover:shadow-cyan-400/50 shadow-md transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="text-center mt-12 space-x-6">
          <a href="mailto:youremail@example.com" className="text-purple-400 hover:text-purple-200">youremail@example.com</a>
          <div className="mt-6 flex justify-center gap-6 text-2xl">
            <a href="#" className="text-cyan-400 hover:text-cyan-200"><FaGithub /></a>
            <a href="#" className="text-purple-400 hover:text-purple-200"><FaLinkedin /></a>
            <a href="#" className="text-pink-400 hover:text-pink-200"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
