// src/components/AnimatedSection.js
import { motion } from 'framer-motion';

const AnimatedSection = ({ id, children }) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 50 }} // מתחיל שקוף וקצת למטה
            whileInView={{ opacity: 1, y: 0 }} // כשנכנס למסך עולה ומופיע
            viewport={{ once: true, amount: 0.2 }} // האנימציה תקרה פעם אחת כש-20% מהרכיב במסך
            transition={{ duration: 0.8, ease: "easeOut" }} // משך האנימציה
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;