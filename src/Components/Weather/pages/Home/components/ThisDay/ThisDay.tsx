import React from 'react';
import styles from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";


export const ThisDay = () => {
    return (
        <div className={styles.this__day}>
            <div className={styles.top__block}>
                <div className={styles.top__block_wrapper}>
                    <div className={styles.this__temp}>20</div>
                    <div className={styles.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id='sun' />
            </div>
            <div className={styles.bottom__block}>
                <div className={styles.this__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={styles.this__city}>
                    Город: <span>Воронеж</span>
                </div>
            </div>
        </div>
    );
};
