import React from "react";
import Profile from "../profile/profile";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>


            <div className={styles.box}>
                <h2>מידע אישי</h2>
                <ul>
                    <li>שם: אריאל חזוט</li>
                    <li>גיל: 24</li>
                    <li>תעודת זהות: 324056670</li>
                    <li>טלפון: 055-6654410</li>
                </ul>
            </div>
            <Profile />
        </div>
    );
}

export default Home;
