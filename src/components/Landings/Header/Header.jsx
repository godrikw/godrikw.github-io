import React from "react"
import classes from "./Header.module.css"
import cn from "classnames"
import HeaderShow from "./HeaderShow/HeaderShow"
import HeaderItem from "./HeadetItem/HeaderItem"
import HeaderBurger from "./HeaderBurger/HeaderBurger"
import { Logo } from "./Logo/Logo"

const Header = (props) => {
   return (
      <div className={"container"}>
         <div
            className={cn(classes.header, {
               [`${classes["header--dark"]}`]: props.isDark,
            })}
         >
            <Logo />
            <HeaderShow />
            <HeaderItem />
            <HeaderBurger color={props.color} />
         </div>
      </div>
   )
}

export default Header
