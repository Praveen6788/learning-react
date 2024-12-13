import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecards'
import Viewalljobs from "../components/Viewalljobs" 
import Joblisting from '../components/Joblisting'
const HOMEPAGE = () => {
  return (
    <>
    <Hero/>
    <Homecard/>
    <Joblisting  ishome={true} />
    <Viewalljobs/>
    
    </>
  )
}

export default HOMEPAGE
