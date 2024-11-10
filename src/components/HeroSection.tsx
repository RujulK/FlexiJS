import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm [Your Name]
            </motion.h1>
            <motion.p
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
            >
                I'm a full-stack developer passionate about creating interactive and dynamic web experiences.
            </motion.p>
        </section>
    );
};

export default HeroSection;