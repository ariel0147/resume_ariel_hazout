import React, { useState } from 'react';
import styles from "./Projects.module.css";
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaTimes } from 'react-icons/fa';
import { SiArduino, SiCplusplus } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

import simonVideo from './simun.mp4';
import game666Video from './game666.mp4';

function Projects(props) {
    const { t } = useTranslation();
    const [selectedVideo, setSelectedVideo] = useState(null);


    const projectsData = [
        {
            id: 1,
            title: "Journey Worlds 3",
            description: t('projects.p1_desc'),
            link: "https://github.com/ariel0147/game_666",
            video: game666Video,
            techIcons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <SiArduino />]
        },
        {
            id: 2,
            title: "Simon",
            description: t('projects.p2_desc'),
            link: "https://github.com/ariel0147/samin",
            video: simonVideo,
            disableSound: true,
            techIcons: [<SiCplusplus />, <SiArduino />]
        },
        {
            id: 3,
            title: "Memory Game",
            description: t('projects.p3_desc'),
            link: "https://github.com/ariel0147/memory_game",
            liveLink: "https://ariel0147.github.io/memory_game/",
            techIcons: [<FaJs />, <FaHtml5 />, <FaCss3 />]
        },
        {
            id: 4,
            title: "Todo List",
            description: t('projects.p4_desc'),
            link: "https://github.com/ariel0147/todo_list_2",
            techIcons: [<FaNodeJs />, <FaJs />, <FaHtml5 />, <FaCss3 />]
        },
        {
            id: 5,
            title: "Project Management",
            description: t('projects.p5_desc'),
            link: "https://github.com/ariel0147/finel_projct",
            techIcons: [<FaNodeJs />, <FaJs />, <FaHtml5 />, <FaCss3 />]
        }
    ];

    const openModal = (project) => {
        setSelectedVideo(project);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    const handleVolumeChange = (e) => {
        if (selectedVideo && selectedVideo.disableSound) {
            e.target.muted = true;
            e.target.volume = 0;
        }
    };

    return (
        <div className={styles.Project}>
            <h2>{t('projects.title')}</h2>

            <div className={styles.projectsContainer}>
                {projectsData.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className={styles.techStack}>
                            {project.techIcons && project.techIcons.map((icon, index) => (
                                <span key={index} className={styles.techIcon}>
                                    {icon}
                                </span>
                            ))}
                        </div>

                        <div className={styles.buttonsContainer}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{t('projects.btn_code')}</a>

                            {project.video && (
                                <button
                                    className={styles.videoButton}
                                    onClick={() => openModal(project)}
                                >
                                    {t('projects.btn_video')}
                                </button>
                            )}

                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{t('projects.btn_play')}</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            <FaTimes />
                        </button>
                        <video
                            src={selectedVideo.video}
                            controls
                            autoPlay
                            muted={selectedVideo.disableSound}
                            onVolumeChange={handleVolumeChange}
                            className={styles.videoPlayer}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;