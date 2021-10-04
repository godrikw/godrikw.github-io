import React, {useState} from 'react';
import styles from './index.module.css'
import classnames from 'classnames';
import {Slide} from "./Slide";
const sliderData = [
    {
        style: {backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_960_720.jpg)'},
        text: 'car'
    },
    {
        style: {backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/09/15/01/41/demon-6625444_960_720.jpg)'},
        text: 'human'
    },
    {
        style: {backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149_960_720.jpg)'},
        text: 'coffee'
    },
    {
        style: {backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/09/20/16/47/pumpkins-6641314_960_720.jpg)'},
        text: 'pumpkins'
    },
    {
        style: {backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/08/20/22/05/flowers-6561379_960_720.jpg)'},
        text: 'flowers'
    },
]



export const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(2)

    return (
        <div className={styles.container}>
            {sliderData.map(function (slideData, index) {
                return (
                   <Slide
                       isActive={activeSlide == index}
                       onClick={() => {setActiveSlide(index)}}
                       style={slideData.style}
                       text={slideData.text}
                   />
                )
            })}

        </div>
    );
};
