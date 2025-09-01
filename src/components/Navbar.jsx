import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-cyan-500/30 shadow-lg transition">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wider hover:text-purple-400 transition">
          MyPortfolio
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-200">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="cursor-pointer hover:text-cyan-400 transition"
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/30 shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-200">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((section) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-lg hover:text-cyan-400 transition"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
