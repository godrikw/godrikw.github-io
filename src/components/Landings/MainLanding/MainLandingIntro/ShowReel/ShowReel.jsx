import React, { useState } from "react"
import "./ShowReel.css"
import { ReactComponent as Icon } from "./icon.svg"
var intervalId = 0
const step = 4

export const ShowReel = () => {
   /* state */
   const [rotationDegrees, setRotationDegrees] = useState(0)
   const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
   const [animationIntervalId, setAnimationIntervalId] = useState(0)

   /* methods */
   const toggleAnimation = () => {
      isAnimationPlaying ? stopAnimation() : startAnimation()
      setIsAnimationPlaying(!isAnimationPlaying)
   }
   const startAnimation = () => {
      setRotationDegrees((prev) => prev + step)

      setAnimationIntervalId(
         window.setInterval(() => {
            requestAnimationFrame(() =>
               setRotationDegrees((prev) => prev + step),
            )
         }, 30),
      )
   }
   const stopAnimation = () => {
      window.clearInterval(animationIntervalId)
      setRotationDegrees(
         rotationDegrees % 360 > 180
            ? rotationDegrees + 360 - (rotationDegrees % 360)
            : rotationDegrees - (rotationDegrees % 360),
      )
   }

   return (
      <div className={"showReel__wrapper_main"}>
         <div className={"showReel__wrapper"} style={{ width: "116px" }}>
            <svg viewBox="0 0 70 70" id="circledIcon">
               <path
                  d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0"
                  fill="none"
                  id="tophalf"
                  width="100%"
               />

               <g id="pat" onClick={toggleAnimation}>
                  <path
                     id-="play_main"
                     d="M21 11.743L0.750001 23.2168L0.750002 0.269148L21 11.743Z"
                     fill="#2E4ADF"
                     style={{ backgroundColor: "#1D1D1D" }}
                     width="100%"
                  />
               </g>

               <g
                  style={{
                     transform: `rotateZ(${rotationDegrees}deg)`,
                     transition: isAnimationPlaying ? "0.1s" : "1s",
                  }}
                  className="text__rotation_svg"
               >
                  <text style={{ font: "initial", fontSize: "8px" }}>
                     <textPath xlinkHref="#tophalf" startOffset="0%">
                        SHOWREEL
                     </textPath>
                     <textPath xlinkHref="#tophalf" startOffset="32%">
                        SEQUOIA
                     </textPath>
                     <textPath xlinkHref="#tophalf" startOffset="57%">
                        WEB
                     </textPath>
                     <textPath xlinkHref="#tophalf" startOffset="71%">
                        AGENCY–
                     </textPath>
                  </text>
               </g>
            </svg>
         </div>
         <Icon />
      </div>
   )
}
