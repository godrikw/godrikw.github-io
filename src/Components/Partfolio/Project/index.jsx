import React from 'react';
import styles from './index.module.css'
import {Slider} from "./Slider";

export const Project = () => {
    return (
        <div className={styles.wrapper_main}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Portfolio</div>
                <Slider/>
            </div>
        </div>
    );
};
