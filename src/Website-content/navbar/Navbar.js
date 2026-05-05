import React, { useState } from 'react';
import { Link } from "react-scroll"; // שונה מ-react-router-dom ל-react-scroll
import styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const changeLanguage = () => {
        const newLang = i18n.language === 'he' ? 'en' : 'he';
        i18n.changeLanguage(newLang);
        document.body.dir = newLang === 'he' ? 'rtl' : 'ltr';
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                {/* שינוי גם ללוגו כדי שיגלול לתחילת הדף */}
                <Link to="home" smooth={true} duration={600} style={{ cursor: 'pointer' }} onClick={closeMenu}>
                    Ariel Hazout
                </Link>
            </div>

            <button
                onClick={changeLanguage}
                className={styles.langBtn}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    marginLeft: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <FaGlobe />
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {i18n.language === 'he' ? 'EN' : 'HE'}
                </span>
            </button>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                {/* עדכון כל הקישורים לגלילה חלקה עם שמירת ניתובים ב-URL */}
                <Link to="home" smooth={true} duration={600} spy={true} hashSpy={true} offset={-70} onClick={closeMenu} style={{ cursor: 'pointer' }}>{t('navbar.home')}</Link>
                <Link to="about" smooth={true} duration={600} spy={true} hashSpy={true} offset={-70} onClick={closeMenu} style={{ cursor: 'pointer' }}>{t('navbar.about')}</Link>
                <Link to="skills" smooth={true} duration={600} spy={true} hashSpy={true} offset={-70} onClick={closeMenu} style={{ cursor: 'pointer' }}>{t('navbar.skills')}</Link>
                <Link to="projects" smooth={true} duration={600} spy={true} hashSpy={true} offset={-70} onClick={closeMenu} style={{ cursor: 'pointer' }}>{t('navbar.projects')}</Link>
                <Link to="info" smooth={true} duration={600} spy={true} hashSpy={true} offset={-70} onClick={closeMenu} style={{ cursor: 'pointer' }}>{t('navbar.info')}</Link>
                <Link to="contact" smooth={true} duration={600} spy={true} hashSpy={true} offset={-70} onClick={closeMenu} className={styles.contactBtn} style={{ cursor: 'pointer' }}>{t('navbar.contact')}</Link>
            </div>
        </nav>
    );
}

export default Navbar;