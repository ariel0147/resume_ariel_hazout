import React from 'react';
import styles from "./Projects.module.css";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiArduino, SiCplusplus } from 'react-icons/si';

const projectsData = [
    {
        id: 1,
        title: "Journey Worlds 3",
        description: "משחק פלטפורמה הרפתקני בסגנון רטרו המשלב השראות ממריו וטרריה. השחקן נדרש לחקור עולמות, לאסוף ארבעה מפתחות עתיקים ולפתוח את תיבת האוצר האגדית.",
        link: "https://github.com/ariel0147/game_666",
        techIcons: [<FaHtml5 />, <FaCss3 />, <FaJs />]
    },
    {
        id: 2,
        title: "Simon",
        description: "גרסה פיזית ואינטראקטיבית למשחק הזיכרון הקלאסי 'סיימון', המבוססת על בקר Arduino. הפרויקט משלב תכנות חומרה (Embedded) עם בניית מעגלים אלקטרוניים.",
        link: "https://github.com/ariel0147/samin",
        techIcons: [<SiCplusplus />, <SiArduino />]
    },
    {
        id: 3,
        title: "Memory Game",
        description: "משחק זיכרון קלאסי וצבעוני בנושא בעלי חיים. פותח בדגש על לוגיקת משחק, עיצוב רספונסיבי וחוויית משתמש מהנה לכל הגילאים.",
        link: "https://github.com/ariel0147/memory_game",
        liveLink: "https://ariel0147.github.io/memory_game/",
        techIcons: [<FaJs />, <FaHtml5 />, <FaCss3 />]
    },
    {
        id: 4,
        title: "Todo List",

        description: "מערכת חכמה לניהול משימות יומיומיות. האפליקציה מאפשרת מעקב יעיל, סינון לפי סטטוס ביצוע, עריכה דינמית וממשק משתמש נקי ונוח.",
        link: "https://github.com/ariel0147/todo_list_2",
        techIcons: [<FaNodeJs />, <FaJs />, <FaHtml5 />, <FaCss3 />]
    },
    {
        id: 5,
        title: "Project Management",

        description: "פלטפורמה מקיפה לניהול פרויקטים וצוותים. כוללת פיצ'רים של יצירת פרויקטים, מעקב סטטוסים, ומערכת הצבעות דמוקרטית לקבלת החלטות.",
        link: "https://github.com/ariel0147/finel_projct",
        techIcons: [<FaNodeJs />, <FaJs />, <FaHtml5 />, <FaCss3 />]
    }
];

function Projects(props) {
    return (
        <div className={styles.Project}>
            <h2>הפרויקטים שלי</h2>

            <div className={styles.projectsContainer}>

                {projectsData.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>


                        <div className={styles.techStack}>
                            {project.techIcons && project.techIcons.map((icon, index) => (
                                <span key={index} className={styles.techIcon}>
                                    {icon}
                                </span>
                            ))}
                        </div>

                        <div className={styles.buttonsContainer}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">צפה בקוד</a>

                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">שחק עכשיו</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;