import React from "react";
import { Simulate } from "react-dom/test-utils";
import './Button.css'

const STYLES =[
    'bth--primary',
    'bth--outline'
]

const SIZES =[
    'bth--medium',
    'bth--large'
]


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}