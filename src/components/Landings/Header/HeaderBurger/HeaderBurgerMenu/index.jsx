import React from "react"
import classes from "./index.module.css"
import { Logo } from "../../Logo/Logo"
import { LinkDetails } from "../../../MainLanding/LinkDetails"
import { ReactComponent as Icon1 } from "./img/Vector (1).svg"
import { ReactComponent as Icon2 } from "./img/Vector (2).svg"
import { ReactComponent as Icon3 } from "./img/Vector (3).svg"
import { ReactComponent as Icon4 } from "./img/Vector (4).svg"
import { ReactComponent as Icon5 } from "./img/Vector (5).svg"

export const HeaderBurgerMenu = (props) => {
   return (
      <div className={classes.container}>
         <div className={classes.wrapper}>
            <div className={classes.wrapper_top}>
               <Logo />
               <div className={classes.wrapper_top_link}>
                  <LinkDetails
                     path={"×"}
                     title={"Оставить заявку"}
                     margin={0}
                  />
               </div>
               <div onClick={props.close} className={classes.close}>
                  &#215;
               </div>
            </div>
            <div className={classes.main_block}>
               <span className={classes.main_text}>Проекты</span>
               <span className={classes.main_text}>showreel</span>
               <span className={classes.main_text}>Подход</span>
               <span className={classes.main_text}>Блог</span>
            </div>
            <div className={classes.footer_wrapper}>
               <div className={classes.footer_soc}>
                  <div className={classes.footer_soc_icon}>
                     <Icon1 />
                  </div>
                  <div className={classes.footer_soc_icon}>
                     <Icon2 />
                  </div>
                  <div className={classes.footer_soc_icon}>
                     <Icon3 />
                  </div>
                  <div className={classes.footer_soc_icon}>
                     <Icon4 />
                  </div>
                  <div className={classes.footer_soc_icon}>
                     <Icon5 />
                  </div>
               </div>
               <div className={classes.footer_block_text}>
                  <div className={classes.footer_text}>+1 929 472 6676</div>
                  <div className={classes.footer_text}>
                     Sequoia.agency@gmail.com{" "}
                  </div>
               </div>
               <div className={classes.footer_text}>2018-2021 © Sequoia</div>
            </div>
         </div>
      </div>
   )
}
