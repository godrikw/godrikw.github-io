import React from "react"
import classes from "./Logo.module.css"
import classNames from "classnames"

const burgerClasses = [
   "logo_yellow_first",
   "logo_pink",
   "logo_black_first",
   "logo_yellow_next",
   "logo_blue",
   "logo_purple",
   "logo_black_next",
]
/**
 * перебераем массив и вставляем классы
 * */

export const Logo = (props) => {
   return (
      <div className={classes.logo_main}>
         <div className={classes.logo__wrapper}>
            {burgerClasses.map((item, index) => (
               <div
                  key={index}
                  className={classNames(classes[item], classes.logo_radius)}
               />
            ))}
         </div>
         <span style={{ color: props.name }}>SEQUOIA</span>
      </div>
   )
}
