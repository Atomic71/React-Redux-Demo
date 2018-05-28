import * as actionTypes from '../actionTypes';
import {authenticationHandler} from '../axiosInstances';

const loginPass = (token) => ({type: actionTypes.LOGIN_PASS, token: token});
const storeToken = (shouldStoreToken, token) => shouldStoreToken && localStorage.setItem("token", token);

export const tryLogin = ({username, password, memorize}, resolveCb, rejectCb) => 
    (dispatch) => authenticationHandler({username, password})
    .then(res => {
        storeToken(memorize, res.data.token);
        dispatch(loginPass(res.data.token));
        resolveCb();
    }).catch(err => rejectCb())