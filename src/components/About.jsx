import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" id="about">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-8 text-center"
          variants={itemVariants}
        >
          SYSTEM.IDENTITY
        </motion.h2>

        <motion.div 
          className="bg-cyber-darker/80 p-6 md:p-8 rounded-lg neon-border"
          variants={itemVariants}
        >
          <p className="text-xl md:text-2xl font-body text-cyber-blue/90 mb-6 leading-relaxed">
            {">> INITIALIZING NEURAL INTERFACE..."}
          </p>
          
          <p className="text-lg md:text-xl font-body text-white/80 mb-6 leading-relaxed">
            I'm a Computer Engineering student with an insatiable curiosity for the digital frontier. 
            My passion lies in unraveling the complexities of low-level programming, exploring the 
            depths of cybersecurity, and pushing the boundaries of machine learning.
          </p>

          <p className="text-lg md:text-xl font-body text-white/80 leading-relaxed">
            Like a cyberdeck operator navigating through neural networks, I dive deep into both the 
            hardware and software realms, seeking to understand and innovate at every layer of the 
            digital stack.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;