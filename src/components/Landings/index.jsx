import React from "react"
import { Route } from "react-router-dom"
import { MainLanding } from "./MainLanding"
import "./styles/index.css"

export const Landings = () => {
   return (
      <>
         <Route exact path={"/"}>
            <MainLanding />
         </Route>
      </>
   )
}
