import React from 'react';
import styles from './Days.module.scss'
import {Day} from "./Days";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";

interface Props {
    days: Day
}

export const Card = ({ days }: Props) => {
    const {day, day_info, icon_id, temp_day, temp_night, info} = days
    return (
        <div className={styles.card}>
            <div className={styles.day}>{day}</div>
            <div className={styles.day_info}>{day_info}</div>
            <div className={styles.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={styles.temp_day}>{temp_day}</div>
            <div className={styles.temp_night}>{temp_night}</div>
            <div className={styles.info}>{info}</div>
        </div>
    );
};