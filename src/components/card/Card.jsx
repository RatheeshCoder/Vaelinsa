import React from "react";
import * as style from "./CardStyle";

const Card = ({
  image,
  headline,
  text,
  Style = {},
  textStyle = {},
  headStyle = {},
  imageStyle = {},
  background,
  fontStyle,
}) => {
  return (
    <style.Card style={{ ...Style, background }}>
      <style.CardImage src={image} style={imageStyle} />
      <style.CardHeadline style={{ ...headStyle, fontStyle }}>
        {headline}
      </style.CardHeadline>
      <style.CardText style={{ ...textStyle, fontStyle }}>
        {text}
      </style.CardText>
    </style.Card>
  );
};

export default Card;
