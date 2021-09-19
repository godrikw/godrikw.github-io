import React from "react"
import classes from "./index.module.css"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import { Slider } from "./Slider"
import Woman1 from "./Slider/img/woman(1).jpg"
import Woman2 from "./Slider/img/woman(2).jpg"

const sliderData = [
   {
      img: Woman1,
      title: "DENIS LOMOV",
      subTitle: "creative director",
   },
   {
      img: Woman2,
      title: "DENIS SAFONOV",
      subTitle: "creative frontend developer",
   },
   {
      img: Woman1,
      title: "DENIS LOMOV",
      subTitle: "creative director",
   },
   {
      img: Woman2,
      title: "DENIS SAFONOV",
      subTitle: "creative frontend developer",
   },
   {
      img: Woman1,
      title: "DENIS LOMOV",
      subTitle: "creative director",
   },
   {
      img: Woman2,
      title: "DENIS SAFONOV",
      subTitle: "creative frontend developer",
   },
]

export const MainLandingTeam = () => {
   return (
      <div className={"container"}>
         <div className={classes.team__wrapper}>
            <MyLine />
            <BlockName description={"Сотрудники"} title={"Команда"} />
            <div className={classes.team_text_wrapper}>
               <div className={classes.team_text}>
                  Мы гордимся своими проектами, потому что они показывают планку
                  качества, умением анализировать рынок и выбирать правильные
                  решения для бизнеса.
               </div>
            </div>
            <Slider elements={sliderData} />
         </div>
      </div>
   )
}
