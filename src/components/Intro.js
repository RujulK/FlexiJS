import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = () => {
  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-container">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm <span className="highlight">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a passionate developer creating amazing web experiences.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Intro;
