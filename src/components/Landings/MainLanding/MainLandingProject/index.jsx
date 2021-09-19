import React from "react"
import classes from "./index.module.css"
import cn from "classnames"
import { LinkDetails } from "../LinkDetails"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import { ReactComponent as Icon } from "./Vector (1).svg"
import { Link } from "react-router-dom"
import { ProjectCard } from "./ProjectCard"
import bg from "./img/bg.png"
import bg1 from "./img/bg(1).png"
import bg2 from "./img/bg(2).png"
import bg3 from "./img/bg(3).png"
import bg4 from "./img/bg(4).png"
import { Slider } from "./Slider"

const projectData = [
   {
      path: bg,
      title: "BAUART®",
      description:
         "Производство и монтаж клинкерных термопанелей с доставкой по России.",
   },
   {
      path: bg1,
      title: "Stroyhome®",
      description:
         "Производство и монтаж клинкерных термопанелей с доставкой по России.м",
   },
   {
      path: bg2,
      title: "Milberger®",
      description:
         "Авторские ремонты. От идеи до реализации В Санкт-Петербурге и ЛО.",
   },
   {
      path: bg3,
      title: "Milberger®",
      description:
         "Авторские ремонты. От идеи до реализации. В Санкт-Петербурге и ЛО.",
   },
   {
      path: bg4,
      title: "Remstory.PRO®",
      description:
         "Профессиональный ремонт ПК и ноутбуков любой сложност в Санкт-Петербурге и ЛО",
   },
]

const sliderData = [
   {
      title: "Все проекты",
   },
   {
      title: "Комплексное решение",
   },
   {
      title: "Web-разработка",
   },
   {
      title: "Внедрение CRM",
   },
   {
      title: "Автоматизация",
   },
   {
      title: "SEO",
   },
]

export const MainLandingProject = () => {
   return (
      <div className={"container"}>
         <div className={classes.mainLandingProject_wrapper}>
            <MyLine />
            <BlockName description={"2018 — 2021"} title={"ТОП - ПРОЕКТЫ"} />
            <div className={classes.project__upLink_wrapper}>
               <div className={classes.project__upLink_wrapper_next}>
                  <div className={classes.project__upLink_text}>
                     Мы сами для себя установили высокую планку качества и
                     стремимся соответствовать этому. Мы хотим чтобы за нас
                     говорили наши проекты.
                  </div>
                  <LinkDetails path={<Icon />} title={"Все проекты"} />
               </div>
            </div>
            <div className={classes.project__main_wrapper}>
               <div className={classes.project__main_pagination_wrapper}>
                  <div
                     className={classes.project__main_pagination_link_wrapper}
                  >
                     <Link
                        to={"/sandbox"}
                        className={classes.project__main_pagination_link}
                     >
                        Все проекты
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.project__main_pagination_link}
                     >
                        Комплексное решение
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.project__main_pagination_link}
                     >
                        Web-разработка
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.project__main_pagination_link}
                     >
                        Внедрение CRM
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.project__main_pagination_link}
                     >
                        Автоматизация
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.project__main_pagination_link}
                     >
                        SEO
                     </Link>
                  </div>

                  <LinkDetails path={<Icon />} title={"Все проекты"} />
               </div>

               <div className={classes.project__main_pagination_link_slider}>
                  <Slider elements={sliderData} />
               </div>

               <div className={classes.project__main_offer}>
                  <ProjectCard elements={projectData} />
                  <div className={classes.bottom_link}>Загрузить еще</div>
               </div>
            </div>
         </div>
      </div>
   )
}
