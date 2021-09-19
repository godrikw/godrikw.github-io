import React from "react"
import classes from "./index.module.css"

import cn from "classnames"

export const LinkDetails = (props) => {
   return (
      <div
         style={{
            color: props.name,
            borderBottom: props.names,
            width: props.width,
            margin: props.margin,
         }}
         className={classes.link}
      >
         {props.path}
         <div className={classes.link_text}>{props.title}</div>
      </div>
   )
}
