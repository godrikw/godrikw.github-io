import React from "react"
import classes from "./index.module.css"

export const BlockName = (props) => {
   return (
      <div className={classes.blockName}>
         <div className={classes.description}>{props.description}</div>
         <div className={classes.title}>{props.title}</div>
      </div>
   )
}
