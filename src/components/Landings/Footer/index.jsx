import React from "react"
import classes from "./index.module.css"
import Header from "../Header/Header"
import { LinkDetails } from "../MainLanding/LinkDetails"
import { MyLine } from "../../UI/MyLine"
import Icon1 from "./img/Vector (1).svg"
import Icon2 from "./img/Vector (2).svg"
import Icon3 from "./img/Vector (3).svg"
import Icon4 from "./img/Vector (4).svg"
import Icon5 from "./img/Vector (5).svg"
import cn from "classnames"

export const Footer = () => {
   return (
      <div className={classes.footer__wrapper}>
         <div className={"container"}>
            <div className={classes.footer__wrapper_pos} />
            <Header isDark color={"1px solid white"} />
            <div className={classes.footer__content}>
               <div className={classes.footer__content_left}>
                  <span className={classes.footer__content_left_title}>
                     Есть проект?
                  </span>
                  <span className={classes.footer__content_left_title}>
                     Давайте обсудим!
                  </span>

                  <LinkDetails
                     path={"⤓"}
                     title={"Cкачать презентацию"}
                     name={"#F5F5F5"}
                     names={"1px solid white"}
                     width={"162px"}
                  />

                  <span className={classes.footer__content_left_place}>
                     Санкт-Петербург, м. Лиговский проспект, БЦ "Платформа"
                  </span>

                  <a
                     className={classes.footer__content_left_connection}
                     href={"tel:+7 812 201 00 07"}
                  >
                     +7 812 201 00 07
                  </a>
                  <a
                     className={classes.footer__content_left_connection}
                     href="mailto:Sequoia.Agency@gmail.com"
                  >
                     Sequoia.Agency@gmail.com
                  </a>
               </div>
               <div className={classes.footer__content_right}>
                  <form
                     className={classes.footer__content_right_form}
                     action="#"
                  >
                     <input
                        className={classes.footer__content_right_input}
                        type="text"
                        placeholder={"Ваше имя"}
                     />
                     <input
                        className={classes.footer__content_right_input}
                        type="text"
                        placeholder={"E-mail или Телефон"}
                     />
                     <textarea
                        className={classes.footer__content_right_input}
                        placeholder={"О проекте"}
                        style={{ height: 154 }}
                     />
                     <div
                        className={classes.footer__content_right_button_block}
                     >
                        <button
                           className={classes.footer__content_right_button}
                        >
                           Оставить заявку
                        </button>
                        <span className={classes.footer__content_right_text}>
                           Нажимая кнопку “Отправить”, вы соглашаетесь <br /> с
                           Политикой конфиденциальности.
                        </span>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className={classes.footer_down_line} />
         <div className={"container"}>
            <div className={classes.footer_down_wrapper}>
               <span className={classes.footer_down_text}>
                  2018-2021 © Sequoia
               </span>
               <a className={classes.footer_down_link} href="#">
                  Политика конфиденциальности
               </a>
               <div className={classes.footer_down_soc}>
                  <div>
                     <a href="#">
                        <div className={classes.footer_down_img}>
                           <img src={Icon1} alt="1" />
                        </div>
                     </a>
                  </div>

                  <div>
                     <a href="#">
                        <div className={classes.footer_down_img}>
                           <img src={Icon2} alt="1" />
                        </div>
                     </a>
                  </div>

                  <div>
                     <a href="#">
                        <div className={classes.footer_down_img}>
                           <img src={Icon3} alt="1" />
                        </div>
                     </a>
                  </div>

                  <div>
                     <a href="#">
                        <div className={classes.footer_down_img}>
                           <img src={Icon4} alt="1" />
                        </div>
                     </a>
                  </div>

                  <div>
                     <a href="#">
                        <div className={classes.footer_down_img}>
                           <img src={Icon5} alt="1" />
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
