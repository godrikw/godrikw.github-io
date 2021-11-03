import React from 'react';
import {Home} from "./pages/Home/Home";
import {Route, Switch} from "react-router-dom";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./shared/Header/Header";
import styles from './index.module.scss'
import {Popup} from "./shared/Popup/Popup";
import {ThemeProvider} from "./provider/ThemeProvider";
import {Provider} from "react-redux";
import {store} from "./store/store";




export const Weather = () => {

    return (
        <Provider store={store}>
            <ThemeProvider>
                <div className={styles.global}>
                    {/*<Popup/>*/}
                    <div className={styles.container}>

                        <Header/>
                        <Switch>
                            <Route path='/weather' exact component={Home}/>
                            <Route path='/weather/monthStatistics' exact component={MonthStatistics}/>
                        </Switch>

                    </div>
                </div>
            </ThemeProvider>
        </Provider>

    );
};
