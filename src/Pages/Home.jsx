import React from 'react'
import Hero from '../Components/Hero'
import WhyTrivian from '../Components/WhyTrivian'
import TechnologyPhilosophy from '../Components/OurTechnology'
import WhatWeBuild from '../Components/WhatWeBuild'
import FocusAreas from '../Components/Focus'
import SmarterSystems from '../Components/SmarterSystem'
import WhoWeAre from '../Components/WhoWeAre'
import Products from '../Components/Products'
import CTA from '../Components/CTA'
import Security from '../Components/Sec'

const Home = () => {
  return (
    <div>
        <Hero/>
        <WhyTrivian/>
        <TechnologyPhilosophy/>
        <WhatWeBuild/>
        <FocusAreas/>
        <SmarterSystems/>
        <WhoWeAre/>
        <Products/>
        <Security/>
        <CTA/>
    </div>
  )
}

export default Home