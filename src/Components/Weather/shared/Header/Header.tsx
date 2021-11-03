import React from 'react';
import styles from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";


export const Header = () => {

    const theme = useTheme()

    const options = [
        { value: 'city-1', label: 'Воронеж' },
        { value: 'city-2', label: 'Санкт-Петербург' },
        { value: 'city-3', label: 'Москва' },
    ]



    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            borer: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
           color: theme.theme === Theme.DARK ? '#fff' : '#000',
        })
    }



    function changeTheme() {

        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }



    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className={styles.title}>React weather</div>
            </div>
            <div className={styles.wrapper}>
                <div
                    className={styles.change_theme}
                    onClick={changeTheme}
                >
                    <GlobalSvgSelector id='change-theme'/>
                </div>

                <Select defaultValue={options[0]} options={options} styles={colorStyles} />
            </div>
        </header>
    );
};
