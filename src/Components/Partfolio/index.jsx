import React from 'react';
import {Offer} from "./Offer";
import {MainContent} from "./MainContent";
import {Project} from "./Project";
import {Footer} from "./Footer";

export const Portfolio = (props) => {
    return (
        <div >
            <div id={"test1"}>
                <Offer state={props.state} states={props.states}/>
                <MainContent/>
                <Project/>
                <Footer/>
            </div>


        </div>
    );
};
