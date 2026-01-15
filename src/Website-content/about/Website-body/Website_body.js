import React from 'react';
import styles from "./Website_body.module.css";
function WebsiteBody(props) {
    return (
        <div className={styles.WebsiteBody}>
            <h3>מידע אישי:</h3 >
            <p>
                <li>שם: אריאל חזוט</li>
                <li>גיל:24</li>
                <li>מספר טלפון:0556654410</li>
            </p>
            <h3>קצת עלי:</h3>
            <p>
                אני אריאל חזוט, בן 24, לאחר הצבא וסטודנט הנדסאי תוכנה שנה ב', לומד במכללת כנרת.<br/>
                בחרתי במקצוע זה כי תמיד אהבתי את דרך החשיבה שמאפשרת לי להוציא את הדמיון שלי אל תוך תוכנה או רעיונות שאני
                חושב עליהם,<br/>
                ולממש אותם. בעיניי, הדרך הטובה ביותר לעשות זאת היא באמצעות תוכנה — וזה הכיוון שהעולם מתקדם אליו.
            </p>
            <h3> שפות תיכנות:</h3>
            <p>
                <li>c#</li>
                <li>JavaScript,HTML,CSS</li>
                <li>React</li>
                <li>C++</li>
                <li>SQL</li>
                <li>PHP</li>
            </p>

        </div>
    );
}

export default WebsiteBody;