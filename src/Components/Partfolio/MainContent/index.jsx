import React from 'react';
import styles from './index.module.css'
import {CardSkills} from "./CardSkills";
import {ReactComponent as Icon1} from "./img/Vector_1.svg";
import {ReactComponent as Icon2} from "./img/UI.svg";
import {ReactComponent as Icon3} from "./img/vector_3.svg";
import {ReactComponent as Icon4} from "./img/vector_4.svg";
import {ReactComponent as Icon5} from "./img/vector_5.svg";
import {ReactComponent as Icon6} from "./img/vector_6.svg";
import {ReactComponent as Icon7} from "./img/vector_7.svg";
import {About} from "./About";

const ContentData = [
    {
        img: Icon1,
        description: 'Product Design'
    },
    {
        img: Icon2,
        description: 'Product Design'
    },
    {
        img: Icon3,
        description: 'Product Design'
    },
    {
        img: Icon4,
        description: 'Product Design'
    },
    {
        img: Icon5,
        description: 'Product Design'
    },
    {
        img: Icon6,
        description: 'Product Design'
    },
    {
        img: Icon7,
        description: 'Product Design'
    },
]
export const MainContent = () => {
    return (
        <div className={styles.wrapper}>
            <CardSkills item={ContentData}/>
            <About/>
        </div>
    );
};
