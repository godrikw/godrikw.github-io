import React from "react"
import { MyLine } from "../../../UI/MyLine"
import { BlockName } from "../BlockName"
import classes from "./index.module.css"
import { LinkDetails } from "../LinkDetails"
import { Slider } from "./Slider"
import { ReactComponent as Icon1 } from "./Slider/img/Vector (1).svg"
import { ReactComponent as Icon2 } from "./Slider/img/Vector (2).svg"
import { ReactComponent as Icon3 } from "./Slider/img/Vector (3).svg"
import { ReactComponent as Icon4 } from "./Slider/img/Vector (4).svg"
import { ReactComponent as Icon5 } from "./Slider/img/Vector (5).svg"
import { ReactComponent as Icon6 } from "./Slider/img/Vector (6).svg"

const sliderData = [
   {
      title: "Комплексное решение",
      img: Icon1,
      color: "#2E4ADF",
      description:
         "В этом предложении мы решаем целый комплекс задач. Разработка посадочной страницы, внедрение CRM системы, воронки продаж, а также создание и сопровождение рекламы в Google, Яндекс, социальных сетях. Как итог вы получаете комплексное решение от одной команды по стоимости содержания одного сотрудника.",
   },
   {
      title: "WEB — разработка",
      img: Icon2,
      color: "#9E00FF",
      description:
         "Наш опыт позволяет решать\n" +
         "практически любые задачи в направлении Веб-разработки. У нас в команде\n" +
         "full-stack и no-code разработчики,\n" +
         "а также талантливые UX-UI дизайнеры.\n" +
         "Мы готовы утверждать, что качественная веб-разработка может быть не дорогой. У вас есть задача? У нас есть решение!",
   },
   {
      title: "Внедрение CРМ",
      img: Icon3,
      color: "#01978C",
      description:
         "Современный бизнес уже немыслим без CRM. Аналоговая система управления более не отвечает требованиям времени. Мы предлагаем нашим клиентам эффективные и проработанные решения по внедрению CRM системы в бизнес процессы компании. CRM система позволит вам настроить работу отдела продаж, систематизировать выполнение задач сотрудниками, отследить эффективность рекламного канала,\n" +
         "а также понять реальную отдачу от тех\n" +
         "или иных решений.",
   },
   {
      title: "СЕО продвижение",
      img: Icon4,
      color: "#EDA335",
      description:
         "Органическое продвижение вашего бизнеса в поисковых системах Google\n" +
         "и Яндекс. ",
   },
   {
      title: "Автоматизация",
      img: Icon5,
      color: "#D03636",
      description:
         "Мы разработали решение, которое позволит вам автоматизировать\n" +
         "рутинные процессы, а также оптимизировать расходы на персонал. \n" +
         "Наш автоматический бот YAFAX понимает человеческую речь. Он готов быстро\n" +
         "и эффективно прозвонить вашу базу потенциальных клиентов или ответить\n" +
         "на входящий звонок. Он способен пригласить на мероприятие или сделать предложение о покупке, без участия оператора.",
   },
   {
      title: "Продюссирвоания",
      img: Icon6,
      color: "#318FC4",
      description: "Прописать!",
   },
]

export const MainLandingOffer = () => {
   return (
      <div className={"container"}>
         <MyLine />
         <BlockName
            title={"ЧТО МЫ ПРЕДЛОГАЕМ"}
            description={"Услуги / Тарифы"}
         />
         <div className={classes.description__wrapper}>
            <div className={classes.description__wrapper_play}>
               <div className={classes.play_wrapper}>
                  <div className={classes.circle}>
                     <svg
                        width="17"
                        height="19"
                        viewBox="0 0 17 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M16.1348 9.50005L0.183271 18.7096L0.183272 0.290452L16.1348 9.50005Z"
                           fill="#1D1D1D"
                        />
                     </svg>
                  </div>
                  <div className={classes.play__name}>
                     <span className={classes.play__name_one}>
                        Видео об услугах
                     </span>
                     <span className={classes.play__name_two}>
                        Дмитриев Андрей
                     </span>
                  </div>
               </div>
               <div className={classes.description__wrapper_main}>
                  <div className={classes.description__wrapper_text}>
                     Мы создали баланс между ценой и эффективностью. Узнайте
                     почему качественная веб-разработка это не обязательно
                     дорого, а привлечение новых клиентов может быть прибыльно.
                  </div>
                  <LinkDetails
                     path={
                        <svg
                           width="12"
                           height="12"
                           viewBox="0 0 12 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M11.5287 5.98154C9.66165 3.94873 6.56193 0.96 6.56193 0.96L5.29305 2.25231L8.48338 5.53846H1.81269V0H0V5.53846V7.38461H1.81269H8.55589L5.29305 10.7077L6.56193 12L12 6.49846C12 6.49846 11.7135 6.18272 11.5287 5.98154Z"
                              fill="#1D1D1D"
                           />
                        </svg>
                     }
                     title={"Подробнее о подходе"}
                  />
               </div>
            </div>
         </div>
         <Slider elements={sliderData} />
      </div>
   )
}
