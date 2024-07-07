import React from 'react'
import AboutUs from './aboutUs/AboutUs'
import Marquee from './marquee/Marquee'
import Testimonials from './testimonials/Testimonials'
import LetConnect from './letConnect/LetConnect'
import OurProducts from './ourProducts/OurProducts'
import OurServices from './ourServices/OurServices'
import CTA from './ctaSection/CTA'
const HomeIndex = () => {
  return (
    <>
      <LetConnect />
      <AboutUs />
      <OurProducts />
      <Marquee />
      <Testimonials />
      <OurServices/>
      <CTA/>

    </>
  )
}

export default HomeIndex
