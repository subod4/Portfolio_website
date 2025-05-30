import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen bg-cyber-dark overflow-hidden">
      <Navbar />
      <div className="cyber-grid fixed inset-0 opacity-20" />
      <div className="scanline fixed inset-0 pointer-events-none" />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;