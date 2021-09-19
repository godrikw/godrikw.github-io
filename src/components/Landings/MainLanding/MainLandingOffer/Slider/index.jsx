import React, { useRef, useState } from "react"
import classes from "./index.module.css"
import cn from "classnames"
import { LinkDetails } from "../../LinkDetails"
import { ReactComponent as Icon } from "./img/Vector_arrow.svg"

export const Slider = ({ elements }) => {
   const slider = useRef(null)
   const [currentSlide, setCurrentSlide] = useState(0)

   let position = 0

   const prevHandler = () => {
      setCurrentSlide(
         currentSlide === 0 ? elements.length - 1 : currentSlide - 1,
      )
   }
   const nextHandler = () => {
      setCurrentSlide(
         currentSlide === elements.length - 1 ? 0 : currentSlide + 1,
      )
   }

   return (
      <div className={classes.slider__wrapper}>
         <div className={classes.slider__track} ref={slider}>
            {elements.map((item, index) => (
               <Slide
                  key={index}
                  {...item}
                  index={index}
                  style={{
                     transform: `translateX(calc(-${currentSlide} * 100% - ( ${currentSlide} * 35px )))`,
                     transition: ".3s",
                  }}
               />
            ))}
         </div>
         <button
            className={cn(classes.slider__button, classes.slider__button_prev)}
            onClick={prevHandler}
         >
            {`<`}
         </button>
         <button
            className={cn(classes.slider__button, classes.slider__button_next)}
            onClick={nextHandler}
         >
            {`>`}
         </button>
      </div>
   )
}

const Slide = ({ color, style, index, img, title, description }) => {
   const [isHidden, setIsHidden] = useState(false)

   const toggleHiddenState = () => setIsHidden(!isHidden)

   return (
      <div
         style={{
            ...style,
            backgroundColor: color,
         }}
         className={classes.slider__block}
         onClick={toggleHiddenState}
      >
         <div className={classes.slider__block_head}>
            {"/" + 0 + (index + 1)}
            {React.createElement(img, {})}
         </div>
         <div className={classes.slider__block_bot}>{title}</div>

         <div
            className={
               isHidden ? classes.slider__drop : classes.slider__drop_none
            }
         >
            <div>{description}</div>
            <span />
            <LinkDetails path={<Icon />} title={"К услуге"} />
         </div>
      </div>
   )
}
