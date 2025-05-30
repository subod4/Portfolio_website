import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/20 via-transparent to-cyber-dark" />
      </div>
      
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-cyber font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-cyber-blue">JOHN</span>
          <span className="text-cyber-pink"> DOE</span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-cyber mb-6 text-cyber-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Aspiring Software Engineer
        </motion.h2>
        
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.p 
          className="text-xl mt-6 text-cyber-blue/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          BUILDING THE FUTURE // ONE LINE OF CODE AT A TIME
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;