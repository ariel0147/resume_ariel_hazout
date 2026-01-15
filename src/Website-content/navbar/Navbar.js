import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>

                <Link to="/" onClick={closeMenu}>Ariel Hazout</Link>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                <Link to="/" onClick={closeMenu}>דף הבית</Link>
                <Link to="/about" onClick={closeMenu}>קצת עליי</Link>
                <Link to="/skills" onClick={closeMenu}>שפות תכנות</Link>
                <Link to="/projects" onClick={closeMenu}>פרויקטים</Link>
                <Link to="/info" onClick={closeMenu}>מידע אישי</Link>
                <Link to="/contact" onClick={closeMenu} className={styles.contactBtn}>צור קשר</Link>
            </div>
        </nav>
    );
}

export default Navbar;