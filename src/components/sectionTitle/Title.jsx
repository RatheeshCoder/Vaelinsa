import React from "react";
import * as style from "./Style";

const Title = ({
  heading,
  HeadText,
  Style = {},
  textStyle = {},
  headStyle ={},
  background,
  fontStyle,
  color,
})=> {
  return (
    <style.Title style={{...Style, background,}}color={color} >
      <style.TitleText style={{textStyle, fontStyle }} >
        {HeadText}
      </style.TitleText>
      <style.TitleHeading style={{headStyle, fontStyle}} >
        {heading}
      </style.TitleHeading>
    </style.Title>
  );
}
export default Title;