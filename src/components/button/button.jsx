import React from 'react';
import * as style from './Style';

const Button = ({
  title,
  clickCallback = () => { },
  Style = {},
  textStyle = {},
  background,
  textSize,
}) => {
  const handleClick = async () => {
    try {
      await clickCallback();
    } catch (error) {
      console.error('Error in clickCallback:', error);
    }
  };

  return (
    <style.Buttonoutline
      onClick={handleClick}
      style={{ ...Style, background }}
    >
      <style.Buttontext style={{textStyle, textSize}}>
        {title}
      </style.Buttontext>
    </style.Buttonoutline>
  );
};

export default Button;
