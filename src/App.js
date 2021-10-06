import React from "react";
import {Slider} from "./Components/Slider";
import './index.css';
import {SliderTwo} from "./Components/SliderTwo";
import {SliderData} from "./Components/SliderTwo/SliderData";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Components/MainPage/index.module.css";



function App() {

  return (
    <div className={"main"}>
        <Router>
            <Route path='/main'>
                <Link to='/slider'><div className={styles.block}>Первый Слайдер</div></Link>
                <Link to='/sliders'><div className={styles.block}>Второй Слайдер</div></Link>
            </Route>


            <Route path='/slider' component={Slider} />
            <Route path='/sliders'>
                <SliderTwo slides={SliderData}/>
            </Route>

            <Route>
                    <Link to='/main'><div className={"home"}>H</div></Link>
            </Route>
        </Router>
    </div>
  );
}

export default App;
