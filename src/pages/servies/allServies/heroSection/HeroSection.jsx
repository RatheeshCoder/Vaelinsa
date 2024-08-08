import React from 'react'
import * as Style from './Style'

const HeroSection = ({title}) => {
  return (
    <Style.HeroSection>
        <Style.ContendSection>
            <Style.Title>service</Style.Title>
            <Style.BottomContent>
              <h1>{title}</h1>
            </Style.BottomContent>
        </Style.ContendSection>
    </Style.HeroSection>
  )
}

export default HeroSection