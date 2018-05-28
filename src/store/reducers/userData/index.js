import { combineReducers } from 'redux';
import { userItems } from './items';
import { userLists } from './lists';
import { userToken } from './token';
import { fetched } from './fetched';

export const userData = combineReducers({ 
    lists: userLists,
    items: userItems,
    token: userToken,
    fetched: fetched,
}) 

