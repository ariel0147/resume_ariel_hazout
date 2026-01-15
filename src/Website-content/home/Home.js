import React from 'react';
import styles from "./Home.module.css";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.textSection}>
                <h1 className={styles.title}>
                    שלום, אני <span className={styles.nameHighlight}>אריאל חזוט</span>
                </h1>
                <h2 className={styles.subTitle}>Full Stack Developer</h2>

                <p className={styles.description}>
                    מתכנת צעיר וחדור מטרה, בעל ראייה רחבה ותשוקה אמיתית לעולם ה-Full Stack.
                    <br />
                    אני מביא איתי מוסר עבודה גבוה, אחריות אישית וראש פתוח – תמיד שואף ללמוד טכנולוגיות חדשות, להשקיע ולהתפתח בכל פרויקט מחדש.
                </p>

                <div className={styles.buttons}>
                    <Link to="/projects" className={styles.btnPrimary}>לפרויקטים שלי</Link>
                    <Link to="/contact" className={styles.btnSecondary}>בואו נדבר</Link>
                </div>
            </div>

            <div className={styles.imageSection}>
                <Profile />
            </div>
        </div>
    );
}

export default Home;