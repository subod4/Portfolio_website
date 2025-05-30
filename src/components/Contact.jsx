import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-cyber-blue hover:text-cyber-pink transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="sr-only">{label}</span>
    <Icon />
  </motion.a>
);

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    // Send email using mailto
    window.location.href = `mailto:subod4.badal@gmail.com?subject=Portfolio Contact: ${data.name}&body=${data.message}%0D%0A%0D%0AFrom: ${data.email}`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4" id="contact">
      <div className="max-w-4xl w-full mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          TRANSMIT.MESSAGE
        </motion.h2>

        <motion.div
          className="bg-cyber-darker/80 p-8 rounded-lg neon-border"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-cyber-blue font-cyber mb-2">IDENTIFIER</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-cyber-dark border-2 border-cyber-blue/50 rounded-md p-3 text-white focus:border-cyber-pink focus:outline-none transition-colors duration-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-cyber-blue font-cyber mb-2">NEURAL.LINK</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-cyber-dark border-2 border-cyber-blue/50 rounded-md p-3 text-white focus:border-cyber-pink focus:outline-none transition-colors duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cyber-blue font-cyber mb-2">TRANSMISSION</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full bg-cyber-dark border-2 border-cyber-blue/50 rounded-md p-3 text-white focus:border-cyber-pink focus:outline-none transition-colors duration-300"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-cyber-blue text-cyber-dark font-cyber py-3 rounded-md hover:bg-cyber-pink transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND TRANSMISSION
            </motion.button>
          </form>

          <div className="mt-8 flex justify-center space-x-6">
            <SocialLink
              href="https://github.com/subod4"
              icon={FaGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/subod4"
              icon={FaLinkedin}
              label="LinkedIn"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;