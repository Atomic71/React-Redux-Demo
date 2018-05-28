import * as actionTypes from '../actionTypes';

const removeToken = () => localStorage.removeItem("token")

export const tryLogout = () => { 
    removeToken(); 
    return { type: actionTypes.LOGOUT_PASS } 
}
