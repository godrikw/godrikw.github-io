import React, { useState } from "react"
import classes from "./index.module.css"
import cn from "classnames"

export const Slider = ({ elements }) => {
   const [currentSlide, setCurrentSlide] = useState(0)

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
         <div className={classes.slider__track}>
            {elements.map((elements, index) => (
               <>
                  <div
                     className={classes.slider__block}
                     style={{
                        transform: `translateX(calc(-${currentSlide} * 100% - ( ${currentSlide} * 35px )))`,
                        transition: ".3s",
                     }}
                  >
                     <img
                        className={classes.slider_img}
                        src={elements.img}
                        alt="ss"
                     />

                     <div className={classes.slider__block_title}>
                        {elements.title}
                     </div>
                     <div className={classes.slider__block_subTitle}>
                        {elements.subTitle}
                     </div>
                  </div>
               </>
            ))}
            <button
               className={cn(
                  classes.slider__button,
                  classes.slider__button_prev,
               )}
               onClick={prevHandler}
            >
               {`<`}
            </button>
            <button
               className={cn(
                  classes.slider__button,
                  classes.slider__button_next,
               )}
               onClick={nextHandler}
            >
               {`>`}
            </button>
         </div>
      </div>
   )
}
