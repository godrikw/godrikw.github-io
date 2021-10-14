import React, {useState} from "react";
import {Slider} from "./Components/Slider";
import './index.css';
import {SliderTwo} from "./Components/SliderTwo";
import {SliderData} from "./Components/SliderTwo/SliderData";
import {Link, Route} from "react-router-dom";
import {DragDrop} from "./Components/DrapDrop";
import {Portfolio} from "./Components/Partfolio";
import classnames from "classnames";
import {routes} from "./routes";


function App() {
    const [isNavigationButtonHidden, setIsNavigationButtonHidden] = useState(false)



    return (
        <div>
            <Route exact path={[
                routes.root,
                routes.features.slider_1,
                routes.features.slider_2,
                routes.features.drag
            ]}>
                <Link to={routes.root} className={"home"}>H</Link>
            </Route>

            <Route exact path={routes.root}>
                <div className={classnames('main')}>
                    <div className={'block_wrapper'}>

                        <Link to={routes.features.slider_1}>
                            <div className={"block"}>Первый Слайдер</div>
                        </Link>
                        <Link to={routes.features.slider_2}>
                            <div className={"block"}>Второй Слайдер</div>
                        </Link>
                        <Link to={routes.features.drag}>
                            <div className={"block"}>Drag Drop</div>
                        </Link>
                        <Link to={routes.features.portfolio} onClick={() => setIsNavigationButtonHidden(!isNavigationButtonHidden)}>
                            <div className={"block"}>Portfolio</div>
                        </Link>
                    </div>
                </div>
            </Route>

            <Route path={routes.features.slider_1} component={Slider}/>
            <Route path={routes.features.slider_2}>
                <SliderTwo slides={SliderData}/>
            </Route>

            <Route path={routes.features.drag} component={DragDrop}/>

            <Route path={routes.features.portfolio}>
                <Portfolio state={setIsNavigationButtonHidden} states={isNavigationButtonHidden}/>
            </Route>
        </div>
    );
}

export default App;
