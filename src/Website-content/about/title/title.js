import React from 'react';
import styles from "./title.module.css";
import { useTranslation } from 'react-i18next';

function Title() {
    const { t } = useTranslation();

    return (
        <div className={styles.title}>
            <h1>{t('about_page.title')}</h1>
        </div>
    );
}

export default Title;