import React from "react";
import * as style from "./Style";

const Title = ({
  heading,
  text,
  Style = {},
  textStyle = {},
  headStyle ={},
  background,
  fontStyle,
})=> {
  return (
    <style.Title style={{...Style, background}}>
      <style.TitleText style={{textStyle, fontStyle }} >
        {text}
      </style.TitleText>
      <style.TitleHeading style={{headStyle, fontStyle}}>
        {heading}
      </style.TitleHeading>
    </style.Title>
  );
}
export default Title;