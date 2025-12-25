import React from 'react';
import styles from "./profile.module.css";
import arielImg from "./ariel.jpg";

function Profile() {
    return (
        <div className={styles.profile}>
            <img className={styles.img} src={arielImg} alt="profile"/>
        </div>
    );
}

export default Profile;
