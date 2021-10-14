import React from 'react';
import styles from './index.module.css'
import img_1 from './img/img_1.png'
import img_2 from './img/img_2.png'
import img_3 from './img/img_3.png'

export const About = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content_left}>
                <div className={styles.content_left_block_one}>
                    <img src={img_1} alt="img"/>
                </div>
                <div className={styles.content_left_block_two}>
                    <img src={img_2} alt="img"/>
                </div>
            </div>
            <div className={styles.content_center}>
                <span className={styles.content_center_title}>About me</span>
                <span className={styles.content_center_subTitle}>Hello again everyone! So, you already know that my name is Gleb.
                    A little about myself: student, 18 y.o., athlete-football player,
                    I love creativity since childhood, I live in Donetsk, Ukraine.
                    Why programming? Everything is elementary -
                    I like it, the profession of the future, thanks to which
                    I can provide myself and fulfill my dream - travel, at the moment
                    I specialize in web design, front-end and back-end development,
                    turnkey websites. Why should you choose me? I approach each order
                    with great responsibility and love, as I want to make a name for
                    myself, exclude plagiarism and negligence, fully study the project,
                    the client and its target audience, work for quality, trying to make
                    an order as quickly and uniquely as possible, taking into account all the
                    edits and wishes.
                    By trusting me, you will get the maximum return for your project, save your nerves and time.
                    If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.</span>
            </div>
            <div className={styles.content_right}>
                <img className={styles.content_right_img} src={img_3} alt="img"/>
            </div>
        </div>
    );
};
