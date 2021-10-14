import React from 'react';
import styles from './index.module.css'

export const CardSkills = ({item}) => {
    return (
        <div className={styles.main_wrapper}>
            {item.map((value, index) => {
                return (
                    <div
                        className={styles.wrapper}
                        key={index}>
                        <div className={styles.img}>{<value.img/>}</div>
                       <div className={styles.description}> {value.description}</div>
                    </div>

                )
            })}
        </div>
    );
};
