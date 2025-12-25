import React from "react";
import styles from "./Info.module.css";

function Info() {
    return (
        <div className={styles.info}>
            <h2>מידע אישי</h2>
            <ul>
                <li>שם: אריאל חזוט</li>
                <li>גיל: 24</li>
                <li>תעודת זהות: 324056670</li>
                <li>טלפון: 055-6654410</li>
            </ul>
        </div>
    );
}

export default Info;
