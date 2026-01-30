import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
                <Link to="/" onClick={closeMenu}>Ariel Hazout</Link>
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
                <Link to="/" onClick={closeMenu}>{t('navbar.home')}</Link>
                <Link to="/about" onClick={closeMenu}>{t('navbar.about')}</Link>
                <Link to="/skills" onClick={closeMenu}>{t('navbar.skills')}</Link>
                <Link to="/projects" onClick={closeMenu}>{t('navbar.projects')}</Link>
                <Link to="/info" onClick={closeMenu}>{t('navbar.info')}</Link>
                <Link to="/contact" onClick={closeMenu} className={styles.contactBtn}>{t('navbar.contact')}</Link>
            </div>
        </nav>
    );
}

export default Navbar;