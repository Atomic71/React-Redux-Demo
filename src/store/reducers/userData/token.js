import { MakeReducer } from '../MakeReducer';

const ininitalState = localStorage.getItem("token") || false;

const handlers = {
    LOGIN_PASS: (state, action) => action.token,
    LOGOUT_PASS: () => false,
}

export const userToken = MakeReducer(ininitalState, handlers);