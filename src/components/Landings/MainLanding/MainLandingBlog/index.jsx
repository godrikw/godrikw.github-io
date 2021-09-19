import React from "react"
import classes from "./index.module.css"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import { LinkDetails } from "../LinkDetails"
import Icon1 from "./img/img(1).png"
import Icon2 from "./img/img(2).png"
import Icon3 from "./img/img(3).png"
import Icon4 from "./img/img(4).png"

export const MainLandingBlog = () => {
   return (
      <div className={"container"}>
         <div className={classes.blog__wrapper}>
            <MyLine />
            <BlockName title={"Блог"} description={"Статьи"} />
            <div className={classes.blog_link}>
               <LinkDetails path={"➥"} title={"На страницу блога"} />
            </div>
            <div className={classes.blog__block_wrapper}>
               <div className={classes.blog__block}>
                  <img
                     className={classes.blog__block_img}
                     src={Icon1}
                     alt="ww"
                  />
                  <span className={classes.blog__block_subtitle}>
                     Андрей Иванов | 2020 09 01
                  </span>
                  <span className={classes.blog__block_title}>
                     После 2 лет работы Muuto запустила новую цифровую
                     платформу, которая приветствует потребителей партнеров
                     сразвитым опытом.
                  </span>
               </div>
               <div className={classes.blog__block}>
                  <img
                     className={classes.blog__block_img}
                     src={Icon2}
                     alt="ww"
                  />
                  <span className={classes.blog__block_subtitle}>
                     Андрей Иванов | 2020 09 01
                  </span>
                  <span className={classes.blog__block_title}>
                     После 2 лет работы Muuto запустила новую цифровую
                     платформу, которая приветствует потребителей партнеров
                     сразвитым опытом.
                  </span>
               </div>
               <div className={classes.blog__block}>
                  <img
                     className={classes.blog__block_img}
                     src={Icon3}
                     alt="ww"
                  />
                  <span className={classes.blog__block_subtitle}>
                     Андрей Иванов | 2020 09 01
                  </span>
                  <span className={classes.blog__block_title}>
                     После 2 лет работы Muuto запустила новую цифровую
                     платформу, которая приветствует потребителей партнеров
                     сразвитым опытом.
                  </span>
               </div>
               <div className={classes.blog__block}>
                  <img
                     className={classes.blog__block_img}
                     src={Icon4}
                     alt="ww"
                  />
                  <span className={classes.blog__block_subtitle}>
                     Андрей Иванов | 2020 09 01
                  </span>
                  <span className={classes.blog__block_title}>
                     После 2 лет работы Muuto запустила новую цифровую
                     платформу, которая приветствует потребителей партнеров
                     сразвитым опытом.
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}
