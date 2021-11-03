import React, {useEffect} from 'react';
import styles from './Home.module.scss'
import '../../styles/index.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../store/selectors";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";


export const Home = () => {
    const dispatch = useCustomDispatch();
    useEffect(() => {
        dispatch(fetchCurrentWeather('Воронеж'));
    }, [])

    return (
       <div>
           <div className={styles.wrapper}>
               <ThisDay/>
               <ThisDayInfo/>
           </div>
           <Days/>
       </div>
    );
};
