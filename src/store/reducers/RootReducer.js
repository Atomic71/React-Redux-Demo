import {combineReducers} from 'redux';
import { userData } from './userData';
import { errorDiv } from './error/errorDiv';
import { reducer as formReducer } from 'redux-form';



export const rootReducer = combineReducers({
    userData: userData,
    errorDiv: errorDiv,
    form: formReducer
}) 