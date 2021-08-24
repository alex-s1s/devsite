import React from 'react'
import HeroSection from '../HeroSection.js'
import { homeObjOne } from '../HomePage/Data.js'

function Products() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
        </>
    )
}

export default Products
