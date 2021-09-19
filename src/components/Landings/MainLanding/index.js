import Header from "../Header/Header"
import { MainLandingIntro } from "./MainLandingIntro"
import React from "react"
import { MainLandingOffer } from "./MainLandingOffer"
import { MainLandingProject } from "./MainLandingProject"
import { MainLandingAchievement } from "./MainLandingAchievement"
import { MainLandingServices } from "./MainLandingServices"
import { MainLandingFeedback } from "./MainLandingFeedback"
import { MainLandingRecall } from "./MainLandingRecall"
import { MainLandingTeam } from "./MainLandingTeam"
import { MainLandingBlog } from "./MainLandingBlog"
import { Footer } from "../Footer"
export const MainLanding = () => {
   return (
      <div>
         <Header />
         <MainLandingIntro />
         <MainLandingOffer />
         <MainLandingProject />
         <MainLandingAchievement />
         <MainLandingServices />
         <MainLandingFeedback />
         <MainLandingRecall />
         <MainLandingTeam />
         <MainLandingBlog />
         <Footer />
      </div>
   )
}
