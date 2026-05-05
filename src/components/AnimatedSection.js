
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ id, children }) => {
    return (
        <motion.div
            id={id}
            className="section-wrapper"
            initial={{ opacity: 0, y: 70, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.3
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;