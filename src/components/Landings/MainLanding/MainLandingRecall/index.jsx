import React from "react"
import classes from "./index.module.css"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import { LinkDetails } from "../LinkDetails"

export const MainLandingRecall = () => {
   return (
      <div className={"container"}>
         <div className={classes.recall__wrapper}>
            <MyLine />
            <BlockName description={"Отзывы"} title={"Клиенты о нас"} />
            <div className={classes.recall__content}>
               <div className={classes.recall__content_left}>
                  <div className={classes.recall__content_left_circle}>
                     Смотерть проект
                  </div>
               </div>
               <div className={classes.recall__content_right}>
                  <div className={classes.recall__content_right_slider}>
                     <div
                        className={classes.recall__content_right_slider_photo}
                     >
                        ИФ
                     </div>
                     <div
                        className={classes.recall__content_right_slider_title}
                     >
                        <span
                           className={
                              classes.recall__content_right_slider_title_name
                           }
                        >
                           Имя Фамилия{" "}
                        </span>
                        <span
                           className={
                              classes.recall__content_right_slider_title_name_project
                           }
                        >
                           Название проекта
                        </span>
                     </div>
                     <div
                        className={classes.recall__content_right_slider_buttons}
                     >
                        <div
                           className={
                              classes.recall__content_right_slider_buttons_left
                           }
                        >
                           &#129040;
                        </div>
                        <div
                           className={
                              classes.recall__content_right_slider_buttons_right
                           }
                        >
                           &#129042;
                        </div>
                     </div>
                  </div>
                  <div className={classes.recall__content_right_text}>
                     Мы получаем постоянный поток комплиментов о нашем сайте -
                     все впечатлены дизайном. Красные воротнички-настоящие
                     лучшие в своем классе веб-дизайнеры, и очень внимательные.
                     Если вы ищете ультрасовременный веб-сайт, который будет
                     выделяться из общей массы.
                  </div>
                  <div className={classes.recall__content_right_link}>
                     <div>
                        <LinkDetails path={"↓"} title={"Читать полностью"} />
                     </div>
                     <div className={classes.recall__content_right_link_margin}>
                        <LinkDetails
                           path={"➥"}
                           title={"Благодарственное письмо"}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
