import React from 'react';
import styles from "./Info.module.css";
import { useTranslation } from 'react-i18next';
import { FaUser, FaGraduationCap, FaBriefcase, FaMedal } from 'react-icons/fa';
import { motion } from "framer-motion"; // ייבוא הספרייה

function Info() {
    const { t } = useTranslation();


    const cardAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <div className={styles.infoContainer}>
            <h2 className={styles.mainTitle}>{t('info.title')}</h2>

            <div className={styles.gridContainer}>


                <motion.div
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.1 }}
                >
                    <div className={styles.iconWrapper}><FaUser /></div>
                    <h3>{t('info.personal_details')}</h3>
                    <ul>
                        <li><strong>{t('info.name_label')}</strong> {t('home.name')}</li>
                        <li><strong>{t('info.age_label')}</strong> 24</li>
                        <li><strong>{t('info.address_label')}</strong> {t('info.address_val')}</li>
                    </ul>
                </motion.div>



                <motion.div
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.2 }}
                >
                    <div className={styles.iconWrapper}><FaGraduationCap /></div>
                    <h3>{t('info.education_title')}</h3>
                    <ul>
                        <li>{t('info.edu_1')}</li>
                        <li>{t('info.edu_2')}</li>
                        <li>{t('info.edu_3')}</li>
                    </ul>
                </motion.div>



                <motion.div
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.3 }}
                >
                    <div className={styles.iconWrapper}><FaMedal /></div>
                    <h3>{t('info.military_title')}</h3>
                    <p>{t('info.military_desc')}</p>
                </motion.div>



                <motion.div
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.4 }}
                >
                    <div className={styles.iconWrapper}><FaBriefcase /></div>
                    <h3>{t('info.employment_title')}</h3>
                    <ul>
                        <li>{t('info.job_current')}</li>
                        <li>{t('info.job_maman')}</li>
                        <li>{t('info.job_garage')}</li>
                        <li>{t('info.job_restaurant')}</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

export default Info;