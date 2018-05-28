import {combineReducers} from 'redux';
import { userData } from './userData';
import { errors } from './error';
import { reducer as formReducer } from 'redux-form';



export const rootReducer = combineReducers({
    userData: userData,
    errors: errors,
    form: formReducer
}) 