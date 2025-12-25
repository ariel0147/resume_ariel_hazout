import React from 'react';
import styles from "./app_about.module.css";
import Title from "../title/title";

function App_about() {
    return (
        <div className={styles.app_about}>
            <Title />

            <div className={styles.text}>
                <h3>קצת עליי:</h3>
                <p>
                    אני אריאל חזוט, בן 24, לאחר הצבא וסטודנט הנדסאי תוכנה שנה ב', לומד במכללת כנרת.<br/>
                    בחרתי במקצוע זה כי תמיד אהבתי את דרך החשיבה שמאפשרת לי להוציא את הדמיון שלי אל תוך תוכנה או רעיונות שאני חושב עליהם,<br/>
                    ולממש אותם. בעיניי, הדרך הטובה ביותר לעשות זאת היא באמצעות תוכנה — וזה הכיוון שהעולם מתקדם אליו.
                </p>
            </div>
        </div>
    );
}

export default App_about;
