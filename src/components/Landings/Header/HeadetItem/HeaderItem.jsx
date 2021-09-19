import React from "react"
import classes from "./HeaderItem.module.css"
import { Link } from "react-router-dom"

const HeaderItemPush = () => {
   return (
      <div>
         <ul className={classes.headerItem__list}>
            <li className={classes.headerItem__list_type}>
               <a className={classes.headerItem__link} href="#">
                  Проекты
               </a>
            </li>
            <li className={classes.headerItem__list_type}>
               <a className={classes.headerItem__link} href="#">
                  Достижения
               </a>
            </li>
            <li className={classes.headerItem__list_type}>
               <a className={classes.headerItem__link} href="#">
                  Услуги
               </a>
            </li>
            <li className={classes.headerItem__list_type}>
               <Link to={"/sandbox"} className={classes.headerItem__link}>
                  Контакты
               </Link>
            </li>
         </ul>
      </div>
   )
}

const HeaderItem = () => {
   return HeaderItemPush()
}

export default HeaderItem
