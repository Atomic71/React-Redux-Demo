import { MakeReducer } from '../MakeReducer';


const initialState = false;
const handlers = {
    SHOW_AUTH_ERR: (state, action) => action.error,
    HIDE_AUTH_ERR: () => false 
};

export const errorAuth = MakeReducer(initialState, handlers);