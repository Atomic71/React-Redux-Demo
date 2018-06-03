import React from 'react';
import '../assets/icons.svg';

export const Icon = ({ icon, onClickHandler, itemTitle }) => (
    <svg className={`icon icon-${icon}`} onClick={onClickHandler}>
        <use xlinkHref={`#icons_icon-${icon}`}>
            <title>{itemTitle}</title>
        </use>
    </svg>
)