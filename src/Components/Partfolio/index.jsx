import React, {useEffect, useState} from 'react';
import {Offer} from "./Offer";
import {MainContent} from "./MainContent";
import {Project} from "./Project";
import {Footer} from "./Footer";
import './index.css'


export const Portfolio = (props) => {

    const [isSpinner, setIsSpinner] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsSpinner(false), 2500)
    }, [])

    return (
        <div >
            {isSpinner && <div className='preloader'>
                <div className="loader">
                    <div className="loader-inner">
                        <div className="loader-line-wrap">
                            <div className="loader-line"/>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"/>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"/>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"/>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"/>
                        </div>
                    </div>
                </div>
            </div>}
            {!isSpinner &&
            <div id={"test1"}>
                <Offer state={props.state} states={props.states}/>
                <MainContent/>
                <Project/>
                <Footer/>
            </div>}


        </div>
    );
};
