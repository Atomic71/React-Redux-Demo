import * as actionTypes from './actionTypes';

export const showErrorDiv = (msg) => ({ type: actionTypes.SHOW_ERROR_DIV, error: msg});

export const hideErrorDiv = () => ({ type: actionTypes.HIDE_ERROR_DIV });