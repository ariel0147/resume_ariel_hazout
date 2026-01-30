import React from 'react';
import styles from "./Contact.module.css";
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    return (
        <div className={styles.contactContainer}>

            <h2 className={styles.title}>{t('contact.title')}</h2>

            <p className={styles.subtitle}>{t('contact.subtitle')}</p>

            <div className={styles.links}>
                <a href="https://wa.me/972556654410" target="_blank" rel="noopener noreferrer" className={styles.card}>
                    <h3>WhatsApp</h3>
                    <p>055-6654410</p>
                </a>

                <a href="mailto:arial055665@gmail.com" className={styles.card}>
                    <h3>Email</h3>
                    <p>arial055665@gmail.com</p>
                </a>

                <a href="https://github.com/ariel0147" target="_blank" rel="noopener noreferrer" className={styles.card}>
                    <h3>GitHub</h3>
                    <p>Ariel Hazout</p>
                </a>
            </div>
        </div>
    );
}

export default Contact;