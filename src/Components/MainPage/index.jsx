import React from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

export const MainPage = () => {
    return (
        <Router>
            <Route path='*'>
                <div className={styles.wrapper}>


                    <Link to='/slider'><div className={styles.block}>Первый Слайдер</div></Link>
                    <Link to='/sliders'><div className={styles.block}>Второй Слайдер</div></Link>



                </div>
            </Route>

        </Router>
    );
};
