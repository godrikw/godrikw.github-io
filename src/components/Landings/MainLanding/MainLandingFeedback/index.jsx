import React from "react"
import classes from "./index.module.css"
import { Logo } from "../../Header/Logo/Logo"

export const MainLandingFeedback = () => {
   return (
      <div className={classes.feedback__wrapper}>
         <div className={"container"}>
            <div className={classes.feedback__form_wrapper}>
               <div className={classes.feedback__form_title}>
                  <span className={classes.feedback__form_title_text}>
                     <span>Остались вопросы?</span>
                     <span>Напиши нам.</span>
                  </span>
                  <Logo name={"#EEEEEE"} />
               </div>
               <div className={classes.feedback__form}>
                  <input
                     className={classes.feedback__form_input}
                     type="text"
                     placeholder={"Ваше имя"}
                  />
                  <input
                     className={classes.feedback__form_input}
                     type="text"
                     placeholder={"E-mail или Телефон"}
                  />
                  <div className={classes.feedback__form_button_wrapper}>
                     <button className={classes.feedback__form_button}>
                        Оставить заявку
                     </button>
                     <span className={classes.feedback__form_button_text}>
                        Нажимая кнопку “Отправить”, вы соглашаетесь <br /> с
                        Политикой конфиденциальности.
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
