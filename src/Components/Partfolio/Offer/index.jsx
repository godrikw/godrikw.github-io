import React, {useState} from 'react';
import styles from './index.module.css'
import {Link} from "react-router-dom";
import {ReactComponent as Icon} from "../img/Group.svg";
import {routes} from "../../../routes";
import classnames from "classnames";

export const Offer = (props) => {

    const [isBurgerActive, setIsBurgerActive] = useState(false)

    return (
        <div className={styles.offer}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper_logo}>
                    <Link className={styles.logo} onClick={() => props.state(!props.states)} to={routes.root} >
                        <Icon/>
                        <h2 className={styles.logo_name}>Notitanic</h2>
                    </Link>

                    <div className={styles.burger} onClick={() => {
                        setIsBurgerActive(true)
                        document.body.style.overflow = 'hidden'
                    }}>
                        <div className={styles.burger_line}/>
                        <div className={styles.burger_line}/>
                        <div className={styles.burger_line}/>
                    </div>

                    <div className={classnames(!isBurgerActive ? styles.nav_wrapper: '', styles.navPosition)} >
                            <ul className={styles.nav}>
                                <a href="#" className={styles.nav_link}>
                                    <li className={styles.nav_link_text}>Home</li>
                                </a>
                                <a href="#" className={styles.nav_link}>
                                    <li className={styles.nav_link_text}>About me</li>
                                </a>
                                <a href="#" className={styles.nav_link}>
                                    <li className={styles.nav_link_text}>Portfolio</li>
                                </a>
                                <a href="#" className={styles.nav_link}>
                                    <li className={styles.nav_link_text}>Contact</li>
                                </a>
                            </ul>

                            <div
                                className={isBurgerActive ? styles.close : ''}
                                style={!isBurgerActive ? {display:'none'} : {display: 'block'}}
                                onClick={() => {
                                    setIsBurgerActive(false)
                                    document.body.style.overflow = 'visible'
                                }}
                            >
                                X
                            </div>
                    </div>
                </div>

                <div className={styles.offer_main}>
                    <div className={styles.offer_content}>
                        <span className={styles.hi}>Hello</span>
                        <span className={styles.name}>I’m Peresvet</span>
                        <span className={styles.name}>Sobolev</span>
                        <p className={styles.description}>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                        <div className={styles.button}>Contact me</div>
                    </div>
                </div>

            </div>

        </div>
    );
};
