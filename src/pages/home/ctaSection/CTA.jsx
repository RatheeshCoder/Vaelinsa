import React from 'react'
import * as Style from './Style'
import Button from '../../../components/button/button'

const CTA = () => {
  return (
    <Style.CtaSectionWrapper>
        <Style.LeftSection>
            <h1>Professional Web Design            </h1>
            <p>Hi! My name ia Dmitrii Rogoza and i’m an expert in web design and branding. I can help you make your website more attractive
            </p>
            <Button title="Get Started" />
        </Style.LeftSection>

        <Style.RightSection>
        <iframe src='https://my.spline.design/earthdayandnight-9bd364ef703ba4d3f999effad8659eae/' frameborder='0' width='500%' height='500%'></iframe>
        </Style.RightSection>
    </Style.CtaSectionWrapper>
  )
}

export default CTA
