import React from 'react';
import styles from './index.module.scss'
import {MainContent} from "./pages/MainContent/MainContent";

export const ToDo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <MainContent/>
            </div>
        </div>
    );
};
