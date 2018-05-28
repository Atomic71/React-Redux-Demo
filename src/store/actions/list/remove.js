import * as actionTypes from '../actionTypes';
import axios from 'axios';


const removeListInit = ( listId ) => ({ type: actionTypes.REMOVE_LIST_INIT, listId: listId })
const removeListFail = ( list, msg ) => ({ type: actionTypes.REMOVE_LIST_FAIL, list: list }) 
const removeListSuccess = (listId) => ({ type: actionTypes.REMOVE_LIST_PASS })

export const removeList = (token, list) => {
    return dispatch => {
        dispatch(removeListInit(list.id));
        axios.delete(
            `https://radiant-escarpment-95925.herokuapp.com/api/todos/${list.id}`,
            {headers: {
                "Authorization": `Token ${token}`
            }}
        )
        .then( res => dispatch(removeListSuccess()))    
        .catch(err => dispatch(removeListFail(list)))
    }
}