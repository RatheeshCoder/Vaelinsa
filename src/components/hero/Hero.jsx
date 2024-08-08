import React from "react";
import * as style from "./HeroStyle.js"; // Import styled components from CardStyle.js
import Title from "../sectionTitle/Title.jsx";
import Button from "../button/button.jsx";
const Hero = ({  headline, text, buttonText,  HeadText,  iframeSrc }) => {
  return (
    <style.HeroSection>
      <style.HeroContainer>
        <style.HeroContent>
          <Title heading={headline} HeadText={HeadText} color="black"/>
          <style.HeroText>{text}</style.HeroText>
          <Button title={buttonText} clickCallback={() => {}} background="black"/>
        </style.HeroContent>
        <style.HeroIframe src={iframeSrc} ></style.HeroIframe>
      </style.HeroContainer>
    </style.HeroSection>
  );
};

export default Hero;
