import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBadge = ({ name, delay }) => (
  <motion.div
    className="bg-cyber-darker/80 px-4 py-2 rounded-md neon-border"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.05, boxShadow: '0 0 20px theme("colors.cyber-blue")' }}
  >
    <span className="text-lg font-cyber text-cyber-blue">{name}</span>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    Languages: ['JavaScript', 'Python', 'C/C++', 'Brainfuck'],
    Interests: ['Cybersecurity', 'AI/ML', 'Low-level Programming'],
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" id="skills">
      <div className="max-w-4xl w-full mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          SKILL.MATRIX
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div key={category} className="space-y-4">
              <motion.h3
                className="text-2xl font-cyber text-cyber-pink mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                {`>> ${category}`}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((skill, index) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    delay={categoryIndex * 0.2 + index * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;