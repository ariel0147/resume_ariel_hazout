import React from 'react';
import styles from "./app_about.module.css";
import Title from "../title/title";
// 1. הוספנו את שורת הייבוא של הקומפוננטה החדשה
import WebsiteBody from "../Website-body/Website_body";

function App_about() {
    return (
        <div className={styles.app_about}>
            <Title />


            <WebsiteBody />
        </div>
    );
}

export default App_about;