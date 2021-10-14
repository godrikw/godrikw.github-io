import React from 'react';
import styles from './index.module.css'
import {ReactComponent as Icon} from "../img/Group.svg";
import {FaArrowAltCircleUp} from "react-icons/fa";
import {Link} from 'react-scroll'


export const Footer = () => {
    return (
        <div className={styles.wrapper_main}>
            <div className={styles.wrapper}>
                <div className={styles.left_list_block}>
                    <ul className={styles.list_type}>
                        <a href="#">
                            <li className={styles.list}>Home</li>
                        </a>
                        <a href="#">
                            <li className={styles.list}>About me</li>
                        </a>
                        <a href="#">
                            <li className={styles.list}>Portfolio</li>
                        </a>
                        <a href="#">
                            <li className={styles.list}>Contact</li>
                        </a>
                    </ul>
                </div>

                <div>
                    <ul className={styles.list_type}>
                        <li className={styles.list}>Contact:</li>
                        <li className={styles.list}>Email: notitanic33@gmail.com</li>
                        <li className={styles.list}>Inst: notitanic33</li>
                        <li className={styles.list}>Calls: +7 (900) - 121 - 54 -54</li>
                    </ul>
                </div>

               <div className={styles.wrapper_right}>
                   <div className={styles.wrapper_right_logo}>
                       <div className={styles.logo}>
                           <Icon/>
                           <h2 className={styles.logo_name}>Notitanic</h2>
                       </div>
                      <Link activeClass="active"
                            to='test1'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                      >
                          <div className={styles.button_top}><FaArrowAltCircleUp/></div>
                      </Link>

                   </div>

                   <div className={styles.list}>Copyright © 2021, Notitanic</div>
               </div>
            </div>
        </div>
    );
};
