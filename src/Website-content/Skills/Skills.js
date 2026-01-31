import React from "react";
import styles from "./Skills.module.css";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaBug } from "react-icons/fa";
import { SiDotnet, SiCplusplus } from "react-icons/si";

function Skills() {
    const { t } = useTranslation();

    const skills = [
        { id: 1, name: "C# / .NET", icon: <SiDotnet />, color: "#512BD4" },
        { id: 2, name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { id: 3, name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
        { id: 4, name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
        { id: 5, name: "React", icon: <FaReact />, color: "#61dafb" },
        { id: 6, name: "C++", icon: <SiCplusplus />, color: "#00599c" },
        { id: 7, name: "SQL", icon: <FaDatabase />, color: "#f29111" },
        { id: 8, name: "PHP", icon: <FaPhp />, color: "#777bb4" },
        { id: 9, name: "QA / Testing", icon: <FaBug />, color: "#4caf50" },
    ];

    return (
        <div className={styles.skillsContainer}>

            <h2 className={styles.title}>{t('skills.title')}</h2>

            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        className={styles.card}
                        style={{ '--hover-color': skill.color }}

                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.icon}>{skill.icon}</div>
                        <h3 className={styles.name}>{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;