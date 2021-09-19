import React from "react"
import classes from "./index.module.css"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import { ReactComponent as Icon } from "./Line.svg"
import icon1 from "./Slider/img/icon(1).png"
import icon2 from "./Slider/img/icon(2).png"
import icon3 from "./Slider/img/icon(3).png"
import icon4 from "./Slider/img/icon(4).png"
import icon5 from "./Slider/img/icon(5).png"
import icon6 from "./Slider/img/icon(6).png"
import icon7 from "./Slider/img/icon(7).png"

import { Slider } from "./Slider"

const sliderData = [
   {
      icon: icon1,
   },
   {
      icon: icon2,
   },
   {
      icon: icon3,
   },
   {
      icon: icon4,
   },
   {
      icon: icon5,
   },
   {
      icon: icon6,
   },
   {
      icon: icon7,
   },
]

export const MainLandingAchievement = () => {
   return (
      <div className={"container"}>
         <div className={classes.mainLandingAchievement_wrapper}>
            <MyLine />
            <BlockName
               description={"Цифры / Показатели"}
               title={"НАШИ ДОСТИЖЕНИЯ"}
            />
            <div className={classes.achievement__upLink_wrapper}>
               <div className={classes.achievement__upLink_wrapper_next}>
                  <div>
                     C 2018 года мы реализовали более 15 проектов. Это цифра
                     может показаться не существенной, но мы не гонимся за
                     количеством. Каждый наш проект индивидуален и каждым и из
                     них мы можем гордится.
                  </div>
               </div>
            </div>

            <div className={classes.achievement__facts_wrapper}>
               <div>
                  <div className={classes.achievement__facts_wrapper_icon}>
                     <Icon />
                  </div>

                  <div className={classes.achievement__facts_block_wrapper}>
                     <div className={classes.achievement__facts_block}>
                        <span
                           className={classes.achievement__facts_block_title}
                        >
                           3 года
                        </span>
                        <span
                           className={classes.achievement__facts_block_subTitle}
                        >
                           Решаем задачи для бизнеса по всему миру
                        </span>
                     </div>
                     <div className={classes.achievement__facts_block}>
                        <span
                           className={classes.achievement__facts_block_title}
                        >
                           >15
                        </span>
                        <span
                           className={classes.achievement__facts_block_subTitle}
                        >
                           Успешно реализованных проектов
                        </span>
                     </div>
                     <div className={classes.achievement__facts_block}>
                        <span
                           className={classes.achievement__facts_block_title}
                        >
                           150+ мил
                        </span>
                        <span
                           className={classes.achievement__facts_block_subTitle}
                        >
                           Общий показать выручки наших клиентов
                        </span>
                     </div>
                     <div className={classes.achievement__facts_block}>
                        <span
                           className={classes.achievement__facts_block_title}
                        >
                           5000+
                        </span>
                        <span
                           className={classes.achievement__facts_block_subTitle}
                        >
                           Новых клиентов получили заказчики внедряя наши
                           решения
                        </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className={classes.achievement__slider_wrapper}>
               <Slider elements={sliderData} />
            </div>
         </div>
      </div>
   )
}
