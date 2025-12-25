import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <Link to="/">דף הבית</Link>
                <Link to="/about">קצת עליי</Link>
                <Link to="/skills">שפות תכנות</Link>
                <Link to="/info">מידע אישי</Link>
            </div>
        </nav>
    );
}

export default Navbar;
