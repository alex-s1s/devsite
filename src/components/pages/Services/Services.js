import React from 'react'
import HeroSection from '../HeroSection.js'
import Princing from '../Princing.js'
import {homeObjOne} from './Data'

function Services() {
    return (
        <>
            <Princing/>
            <HeroSection {...homeObjOne}/>
        </>
    )
}

export default Services
