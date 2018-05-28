import React from 'react';
import PropTypes from 'prop-types'

// button types

// primary - color: primary 
// danger - color: red
// processing - color: grey
// dark - color: dark
//


export const Button = ({classes, clickHandler, text, type, disabled}) => (
    <button className={`button ${classes}`} onClick={clickHandler} type={type} disabled={disabled}>
        {text}
    </button>
)

Button.propTypes = {
    classes: PropTypes.string,
    clickHandler: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}