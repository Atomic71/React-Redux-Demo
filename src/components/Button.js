import React from 'react';
import PropTypes from 'prop-types'

export const Button = ({type, onClick, text}) => (
    <button className={`button ${type}`} onClick={onClick}>
        {text}
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}