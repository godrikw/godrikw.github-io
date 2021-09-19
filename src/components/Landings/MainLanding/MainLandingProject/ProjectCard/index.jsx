import React, { Fragment } from "react"
import classes from "./index.module.css"

export const ProjectCard = ({ elements }) => {
   return (
      <div className={classes.projectCard_wrapper}>
         {elements.map((item, index) => (
            <Fragment>
               <div className={classes.projectCard_main} key={index}>
                  <div className={classes.projectCard_main_right}>
                     <div>
                        <div className={classes.projectCard_main_right_title}>
                           {item.title}
                        </div>
                        <div
                           className={
                              classes.projectCard_main_right_description
                           }
                        >
                           {item.description}
                        </div>
                     </div>
                     <div>
                        <div className={classes.projectCard_main_right_link}>
                           Смотреть проект
                        </div>
                     </div>
                  </div>
                  <div className={classes.projectCard_main_left}>
                     <img src={item.path} alt="project" />
                  </div>
               </div>
            </Fragment>
         ))}
      </div>
   )
}
