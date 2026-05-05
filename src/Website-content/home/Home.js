import React from 'react';
import styles from "./Home.module.css";
import Profile from "../profile/profile";
import { Link } from 'react-scroll'; // הייבוא החדש והנכון
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div className={styles.homeContainer}>
            <div className={styles.textSection}>
                <h1 className={styles.title}>
                    {t('home.hello')} <span className={styles.nameHighlight}>{t('home.name')}</span>
                </h1>
                <h2 className={styles.subTitle}>{t('home.role')}</h2>

                <p className={styles.description}>
                    {t('home.description')}
                </p>

                <div className={styles.buttons}>
                    {/* השינוי כאן: הורדנו את הלוכסן והוספנו את הגלילה החלקה */}
                    <Link
                        to="projects"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        className={styles.btnPrimary}
                        style={{ cursor: 'pointer' }}
                    >
                        {t('home.btn_projects')}
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={600}
                        offset={-70}
                        className={styles.btnSecondary}
                        style={{ cursor: 'pointer' }}
                    >
                        {t('home.btn_contact')}
                    </Link>
                </div>
            </div>

            <div className={styles.imageSection}>
                <Profile />
            </div>
        </div>
    );
}

export default Home;