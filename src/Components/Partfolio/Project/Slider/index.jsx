import React, {useState} from 'react';
import styles from './index.module.css'
import './index.css';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import img_1 from './img/img_1.png'
import {Link} from 'react-router-dom'
const SliderData = [
    {
        slideIm: img_1

    },
    {
        slideIm: 'https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg'

    },
    {
        slideIm: 'https://cdn.pixabay.com/photo/2020/05/05/05/09/nbc-5131447_960_720.jpg'
    },
    {
        slideIm: 'https://cdn.pixabay.com/photo/2021/09/15/12/52/animal-6626792_960_720.jpg'
    },
    {
        slideIm: 'https://cdn.pixabay.com/photo/2021/09/25/10/08/road-6654573_960_720.jpg'
    },
]


export const Slider = () => {


    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }



    return (

            <section className={styles.wrapper}>
                <div className={styles.wrapper_block}>
                    <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
                    <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
                    {SliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <div className={styles.wrapper_block_card}>
                                        <img src={slide.slideIm} alt='travel' className={styles.image} />
                                        <div className={styles.wrapper_text_block}>
                                            <span className={styles.title}>Landing Ice-cream</span>
                                            <span className={styles.subTitle}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Donec ut orci eu elit consequat posuere ut sed elit.
                                                Nulla et tristique felis. Morbi quis orci non purus blandit fringilla.
                                                Etiam et mollis eros.
                                                Duis venenatis vulputate lacus, non tristique eros placerat vel.
                                                Nam nec magna lacus. Etiam euismod egestas mauris nec mollis.
                                                Phasellus efficitur et ex vel condimentum.
                                                Cras enim purus, tempor sed massa vel, accumsan bibendum magna.
                                                Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                                            </span>
                                            <Link to={'#'} className={styles.more_link}><span className={styles.more}>More</span></Link>
                                        </div>
                                    </div>

                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

    );
};
