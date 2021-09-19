import React from "react"
import classes from "./HeaderShow.module.css"

const HeaderShow = () => {
   return (
      <div className={classes.headerShowWrapper}>
         <span>&#9658;</span>
         <span className={classes.headerShow}>showreel</span>
      </div>
   )
}

export default HeaderShow
