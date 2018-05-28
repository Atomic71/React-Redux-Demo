import * as actionTypes from './actionTypes';
import {authenticationHandler} from './axiosInstances';


const loginPass = (token) => ({type: actionTypes.LOGIN_PASS, token: token})

export const tryLogin = ({username, password, memorize}, resolveCb, rejectCb) => 
    (dispatch) => authenticationHandler({username, password})
    .then((res) => {
        memorize && localStorage.setItem("token", res.data.token);
        dispatch(loginPass(res.data.token))
        resolveCb();
    }).catch(err => rejectCb())

    
export const tryLogout = () => { 
    localStorage.removeItem("token");
    return { type: actionTypes.LOGOUT_PASS } 
}
