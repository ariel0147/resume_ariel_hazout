import React from "react";
import styles from "./Skills.module.css";

function Skills() {
    return (
        <div className={styles.skills}>
            <h2>שפות תכנות</h2>

            <ul>
                <li>C#</li>
                <li>JavaScript, HTML, CSS</li>
                <li>React</li>
                <li>C++</li>
                <li>SQL</li>
                <li>PHP</li>
            </ul>
        </div>
    );
}

export default Skills;
