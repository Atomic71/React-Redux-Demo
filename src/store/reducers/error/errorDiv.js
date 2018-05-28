import {MakeReducer} from '../MakeReducer';


const initialState =  false;
const handlers = {
    SHOW_ERROR_DIV: (state, action) => action.error,
    HIDE_ERROR_DIV: (state) => false,
}

export const errorDiv = MakeReducer(initialState, handlers);

