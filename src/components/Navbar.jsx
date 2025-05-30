import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-cyber-dark/80 border-b border-cyber-accent/40 fixed w-full top-0 left-0 z-50 shadow-cyber">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="font-extrabold text-xl text-cyber-accent tracking-widest drop-shadow-cyber-glow">
          Subodh Badal
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-cyber-accent hover:text-cyber-pink focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`transition-all duration-200 md:flex space-x-8 ${open ? "block absolute left-0 top-16 w-full bg-cyber-dark/95 border-t border-cyber-accent/20 shadow-cyber" : "hidden md:flex"}`}>
          <li>
            <a href="#home" className="navlink">Home</a>
          </li>
          <li>
            <a href="#about" className="navlink">About</a>
          </li>
          <li>
            <a href="#projects" className="navlink">Projects</a>
          </li>
          <li>
            <a href="#skills" className="navlink">Skills</a>
          </li>
          <li>
            <a href="#experience" className="navlink">Experience</a>
          </li>
          <li>
            <a href="#contact" className="navlink">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;