import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ title, description, delay }) => {
  return (
    <motion.div
      className="bg-cyber-darker/80 p-6 rounded-lg neon-border h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px theme("colors.cyber-pink")' }}
    >
      <h3 className="text-xl font-cyber text-cyber-blue mb-4">{title}</h3>
      <p className="text-white/80 font-body">{description}</p>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Airport Operations Simulator",
      description: "Advanced simulation system modeling complex airport operations and logistics."
    },
    {
      title: "AI Exercise Recommender",
      description: "Intelligent workout recommendation system powered by Google's Gemini Pro."
    },
    {
      title: "Hult Prize Project",
      description: "Innovative solution for sustainable urban development, securing 2nd Runner-Up position."
    },
    {
      title: "NOSKATHON Hackathon",
      description: "1st Runner-Up project showcasing creative problem-solving in technology."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" id="projects">
      <div className="max-w-4xl w-full mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          PROJECT.MATRIX
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;