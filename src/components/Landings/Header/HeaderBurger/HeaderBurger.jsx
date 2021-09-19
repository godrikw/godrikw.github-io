import React, { useState } from "react"
import classes from "./HeaderBurger.module.css"
import { HeaderBurgerMenu } from "./HeaderBurgerMenu"

const HeaderBurger = (props) => {
   const [isMenuOpen, setIsMenuOpen] = useState()

   const openMenu = () => setIsMenuOpen(true)
   const closeMenu = () => setIsMenuOpen(false)

   return (
      <div className={classes.headerBurger}>
         <span>menu</span>
         <a href="#" onClick={openMenu}>
            <div className={classes.headerBurger_line_wrapper}>
               <div
                  style={{ border: props.color }}
                  className={classes.headerBurger_line}
               />
               <div
                  style={{ border: props.color }}
                  className={classes.headerBurger_line}
               />
            </div>
         </a>
         {isMenuOpen && <HeaderBurgerMenu close={closeMenu} />}
      </div>
   )
}

export default HeaderBurger
