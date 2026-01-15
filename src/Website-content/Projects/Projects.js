import React from 'react';
import styles from "./Projects.module.css";

const projectsData = [
    {
        id: 1,
        title: "Journey worlds 3",
        description: "משחק בסיגנון מריו וטירריה הרעיון המשחק למצוא ארבע מפתחות ולהגיע לתיבת האוצר ",
        link: "https://github.com/ariel0147/game_666" // קישור לקוד או לאתר החי
    },
    {
        id: 2,
        title: "Simon",
        description: "משחק סימון בבניה עם ארדיאנו",
        link: "https://github.com/ariel0147/samin"
    }
    ,
    {
        id: 3,
        title: "memory game",
        description: "משחק זיכרון סיגנון חיות",
        link: "https://github.com/ariel0147/memory_game"
    },
    {
        id: 4,
        title: "Todo List",
        description: "אפליקציה לניהול משימות המאפשרת הוספה, מחיקה, סינון וניהול מעקב אחר מטלות יומיומיות.",
        link: "https://github.com/ariel0147/todo_list_2"
    },
    {
        id: 5,
        title: "Project Management",
        description: "אפליקציה לניהול פרויקטים,הוספה,מחיקה,עריכה,מערך הצבעות",
        link: "https://github.com/ariel0147/finel_projct"
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
                        <a href={project.link} target="_blank" rel="noopener noreferrer">צפה בפרויקט</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;