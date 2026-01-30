import React from 'react';
import styles from "./Website_body.module.css";
import { useTranslation } from 'react-i18next';

function WebsiteBody(props) {
    const { t } = useTranslation();

    return (
        <div className={styles.WebsiteBody}>
            <h3>{t('about_page.story_title')}</h3>

            <div className={styles.aboutText}>
                <p>
                    {t('about_page.p1')}
                </p>

                <p>
                    {t('about_page.p2')}
                </p>

                <p>
                    {t('about_page.p3')}
                </p>
            </div>
        </div>
    );
}

export default WebsiteBody;