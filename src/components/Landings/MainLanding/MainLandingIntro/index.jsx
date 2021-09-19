import React from "react"
import cn from "classnames"
import classes from "./Main.module.css"
import { ShowReel } from "./ShowReel/ShowReel"
import { Button } from "../../../UI/button"

export const MainLandingIntro = () => {
   return (
      <div className={cn("container")}>
         <div className={classes.main__wrapper_sectionOne}>
            <h3>
               Веб-разработка. <br /> Внедрение CRM. <br />
               Маркетинг. <br />И не только...
            </h3>
            <div>
               <h1 className={classes.title}>
                  Комплексное решение <br /> для бизнеса по цене <br /> одного
                  сотрудника
               </h1>
               <Button title={"Стать клиентом"} styles={classes.button} />
            </div>
            <ShowReel />
         </div>
         <div className={classes.main__wrapper_sectionTwo}>
            <div className={classes.mainLandingIntro__show_play}>
               <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M13.5078 8.00014L0.746618 15.3678L0.746618 0.632459L13.5078 8.00014Z"
                     fill="#2E4ADF"
                  />
               </svg>
            </div>
            <div className={classes.mainLandingIntro__show}>SHOWREEL</div>
         </div>
      </div>
   )
}
