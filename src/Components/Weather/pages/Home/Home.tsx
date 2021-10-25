import React from 'react';
import styles from './Home.module.scss'
import '../../styles/index.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";



export const Home = () => {
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
