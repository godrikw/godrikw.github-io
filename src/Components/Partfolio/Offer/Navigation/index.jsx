import React, {useState} from 'react';
import styles from './index.module.css'
import classnames from "classnames";
import {Link} from 'react-scroll'


export const Navigation = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    return (
       <>
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

                   <Link
                       className={styles.nav_link}
                       activeClass="active"
                       to='test1'
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500}
                   >
                       <li
                          onClick={() => {
                              setIsBurgerActive(false)
                              document.body.style.overflow = 'visible'
                          }}
                           className={styles.nav_link_text}>Home</li>
                   </Link>

                   <Link
                       className={styles.nav_link}
                       activeClass="active"
                       to='test2'
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500}
                   >
                       <li
                           onClick={() => {
                               setIsBurgerActive(false)
                               document.body.style.overflow = 'visible'
                           }}
                           className={styles.nav_link_text}>About me</li>
                   </Link>

                   <Link
                       className={styles.nav_link}
                       activeClass="active"
                       to='test3'
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500}
                   >
                       <li
                           onClick={() => {
                               setIsBurgerActive(false)
                               document.body.style.overflow = 'visible'
                           }}
                           className={styles.nav_link_text}>Portfolio</li>
                   </Link>

                   <Link
                       className={styles.nav_link}
                       activeClass="active"
                       to='test4'
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500}
                   >
                       <li
                           onClick={() => {
                               setIsBurgerActive(false)
                               document.body.style.overflow = 'visible'
                           }}
                           className={styles.nav_link_text}>Contact</li>
                   </Link>
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
       </>
    );
};
