import React from "react";
import {Slider} from "./Components/Slider";
import './index.css';
import {SliderTwo} from "./Components/SliderTwo";
import {SliderData} from "./Components/SliderTwo/SliderData";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {DrapDrop} from "./Components/DrapDrop";




function App() {

  return (
    <div className={"main"}>
        <Router>
            <Route path='/main'>
                <Link to='/slider'><div className={"block"}>Первый Слайдер</div></Link>
                <Link to='/sliders'><div className={"block"}>Второй Слайдер</div></Link>
                <Link to='/drap'><div className={"block"}>Drap Drop</div></Link>
            </Route>


            <Route path='/slider' component={Slider} />
            <Route path='/sliders'>
                <SliderTwo slides={SliderData}/>
            </Route>

            <Route path='/drap' component={DrapDrop} />


            <Route>
                    <Link to='/main' className={"home"}>H</Link>
            </Route>
        </Router>
    </div>
  );
}

export default App;
