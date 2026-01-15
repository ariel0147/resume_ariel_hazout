import React from "react";
import styles from "./Skills.module.css";


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiCplusplus } from "react-icons/si";

function Skills() {
    const skills = [
        { id: 1, name: "C# / .NET", icon: <SiDotnet />, color: "#512BD4" },
        { id: 2, name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { id: 3, name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
        { id: 4, name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
        { id: 5, name: "React", icon: <FaReact />, color: "#61dafb" },
        { id: 6, name: "C++", icon: <SiCplusplus />, color: "#00599c" },
        { id: 7, name: "SQL", icon: <FaDatabase />, color: "#f29111" },
        { id: 8, name: "PHP", icon: <FaPhp />, color: "#777bb4" },
    ];

    return (
        <div className={styles.skillsContainer}>
            <h2 className={styles.title}>שפות תכנות וטכנולוגיות</h2>

            <div className={styles.grid}>
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className={styles.card}
                        style={{ '--hover-color': skill.color }}
                    >
                        <div className={styles.icon}>{skill.icon}</div>
                        <h3 className={styles.name}>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;