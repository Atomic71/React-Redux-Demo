import {MakeReducer} from '../MakeReducer';

const initialState = false;

const handlers = {
    FETCH_LISTS_PASS: (state) => true,
    LOGOUT_PASS: (state) => false,
}

export const fetched = MakeReducer(initialState, handlers);
