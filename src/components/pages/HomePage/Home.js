import React from 'react'
import HeroSection from '../HeroSection.js'
import Princing from '../Princing.js'
import {homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjFive} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Princing/>
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home
