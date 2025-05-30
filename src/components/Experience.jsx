import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AchievementCard = ({ title, description, delay }) => (
  <motion.div
    className="bg-cyber-darker/80 p-6 rounded-lg neon-border relative overflow-hidden"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute top-0 left-0 w-2 h-full bg-cyber-pink" />
    <h3 className="text-xl font-cyber text-cyber-blue mb-2">{title}</h3>
    <p className="text-white/80 font-body">{description}</p>
  </motion.div>
);

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "Hult Prize Competition",
      description: "Secured 2nd Runner-Up position in the in-campus round, developing innovative solutions for sustainable urban development."
    },
    {
      title: "NOSKATHON Lite Hackathon",
      description: "Achieved 1st Runner-Up position, demonstrating exceptional problem-solving skills and technical innovation."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" id="experience">
      <div className="max-w-4xl w-full mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          ACHIEVEMENT.LOG
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              title={achievement.title}
              description={achievement.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;