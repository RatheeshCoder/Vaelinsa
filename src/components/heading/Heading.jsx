import React from 'react'
import * as style from './Style'

const Heading = ({
    title,
    Style = {},
    textStyle = {},
    background,
    fontStyle,
    lineHeight,
    fontSize,
}) => {
    return (
        <style.Heading style={{...Style, background}}>
            <style.HeadingText style={{textStyle, fontStyle,fontSize, lineHeight}}>
                {title}
            </style.HeadingText>
        </style.Heading>
    )
}

export default Heading



