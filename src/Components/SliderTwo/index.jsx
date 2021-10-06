import React, {useState} from 'react';
import styles from './index.module.css'
import './index.css';
import {SliderData} from "./SliderData";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export const SliderTwo = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

return (
    <section className={styles.wrapper}>
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                        <img src={slide.slideIm} alt='travel' className={styles.image} />
                    )}
                </div>
            );
        })}
    </section>
);
};