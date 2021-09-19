import React from "react"
import { Route } from "react-router-dom"
import { Sandbox } from "./components/Sandbox"
import { Landings } from "./components/Landings"
import classes from "./styles/index.module.css"
const App = () => {
   return (
      <>
         <Landings />

         <Route path={"/sandbox"}>
            <Sandbox />
         </Route>
      </>
   )
}

export default App
