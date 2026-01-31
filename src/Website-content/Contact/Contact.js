import React from 'react';
import styles from "./Contact.module.css";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function Contact() {
    const { t } = useTranslation();


    const cardAnimation = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <div className={styles.contactContainer}>


            <motion.h2
                className={styles.title}
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: 0.1 }}
            >
                {t('contact.title')}
            </motion.h2>

            <motion.p
                className={styles.subtitle}
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: 0.2 }}
            >
                {t('contact.subtitle')}
            </motion.p>

            <div className={styles.links}>

                <motion.a
                    href="https://wa.me/972556654410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.3 }}
                >
                    <h3>WhatsApp</h3>
                    <p>055-6654410</p>
                </motion.a>


                <motion.a
                    href="mailto:arial055665@gmail.com"
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.4 }}
                >
                    <h3>Email</h3>
                    <p>arial055665@gmail.com</p>
                </motion.a>


                <motion.a
                    href="https://github.com/ariel0147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                    {...cardAnimation}
                    transition={{ ...cardAnimation.transition, delay: 0.5 }}
                >
                    <h3>GitHub</h3>
                    <p>Ariel Hazout</p>
                </motion.a>
            </div>
        </div>
    );
}

export default Contact;