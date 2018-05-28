import { combineReducers } from 'redux';

import { errorDiv } from './errorDiv';
import { errorAuth } from './errorAuth';


export const errors = combineReducers({
    div: errorDiv,
    auth: errorAuth,
})