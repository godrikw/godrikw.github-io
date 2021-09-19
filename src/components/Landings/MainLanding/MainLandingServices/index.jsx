import React from "react"
import classes from "./index.module.css"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import { Link } from "react-router-dom"
import { ReactComponent as Icon } from "./Audio_road.svg"
import { Slider } from "../MainLandingProject/Slider"

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

export const MainLandingServices = () => {
   return (
      <div className={"container"}>
         <div className={classes.services__wrapper}>
            <div>
               <MyLine />
               <BlockName
                  description={"Услеги / Тарифы"}
                  title={"Тарифы и услуги"}
               />
            </div>
            <div className={classes.services__wrapper_main}>
               <div>
                  <div
                     className={classes.services__main_pagination_link_wrapper}
                  >
                     <Link
                        to={"/sandbox"}
                        className={classes.services__main_pagination_link}
                     >
                        Все проекты
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.services__main_pagination_link}
                     >
                        Комплексное решение
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.services__main_pagination_link}
                     >
                        Web - разработка
                     </Link>

                     <Link
                        to={"/sandbox"}
                        className={classes.services__main_pagination_link}
                     >
                        Внедрение CRM
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.services__main_pagination_link}
                     >
                        Автоматизация
                     </Link>
                     <Link
                        to={"/sandbox"}
                        className={classes.services__main_pagination_link}
                     >
                        SEO
                     </Link>
                  </div>
                  <div className={classes.services__main_slider}>
                     <Slider elements={sliderData} />
                  </div>
               </div>
               <div>
                  <div className={classes.services__main_content_wrapper}>
                     <div className={classes.services__main_content_left}>
                        Комплексная услуга
                     </div>
                     <div className={classes.services__main_content_right}>
                        <span
                           className={classes.services__main_content_right_text}
                        >
                           Наша базовая и основная услуга с которой чаще всего
                           начинается сотрудничество. <br />
                           <br /> Мы подготовили это предложение таким образом,
                           чтобы оно включало в себя весь необходимый перечень
                           инструментов и возможностей, для того чтобы ваш
                           бизнес смог занять лидирующие позиции в своей нише.
                        </span>
                        <div
                           className={
                              classes.services__main_content_right_audio
                           }
                        >
                           <div
                              className={
                                 classes.services__main_content_right_audio_play
                              }
                           >
                              <div
                                 className={
                                    classes.services__main_content_right_audio_play_stop
                                 }
                              />
                           </div>

                           <Icon />

                           <div
                              className={
                                 classes.services__main_content_right_audio_text
                              }
                           >
                              Об услуге в аудио формате
                           </div>
                        </div>
                        <div
                           className={
                              classes.services__main_content_right_title
                           }
                        >
                           Выберите <br /> интересующий тариф:
                        </div>
                        <div
                           className={
                              classes.services__main_content_right_card_wrapper
                           }
                        >
                           <div
                              className={
                                 classes.services__main_content_right_card
                              }
                              style={{ backgroundColor: "#1D1D1D" }}
                           >
                              <div
                                 className={
                                    classes.services__main_content_right_card_title
                                 }
                              >
                                 Basic
                              </div>
                              <div
                                 className={
                                    classes.services__main_content_right_card_description
                                 }
                              >
                                 <span>45.000₽</span>
                                 <span>мес</span>
                              </div>
                           </div>
                           <div
                              className={
                                 classes.services__main_content_right_card
                              }
                              style={{ backgroundColor: "#2E4ADF" }}
                           >
                              <div
                                 className={
                                    classes.services__main_content_right_card_title
                                 }
                              >
                                 Pro
                              </div>
                              <div
                                 className={
                                    classes.services__main_content_right_card_description
                                 }
                              >
                                 <span>65.000₽</span>
                                 <span>мес</span>
                              </div>
                           </div>
                           <div
                              className={
                                 classes.services__main_content_right_card
                              }
                              style={{ backgroundColor: "gray" }}
                           >
                              <div
                                 className={
                                    classes.services__main_content_right_card_title
                                 }
                              >
                                 Enterprise
                              </div>
                              <div
                                 className={
                                    classes.services__main_content_right_card_description
                                 }
                              >
                                 <span>от 120.000₽</span>
                                 <span>мес</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
