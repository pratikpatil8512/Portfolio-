import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 dark:bg-white/20 border-b border-cyan-500/30 shadow-lg transition">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wider hover:glow">
          MyPortfolio
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-300 dark:text-gray-800">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400 dark:hover:text-purple-600 transition"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full border border-cyan-400/40 
                     hover:shadow-cyan-400/50 transition text-cyan-400 dark:text-yellow-500"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
