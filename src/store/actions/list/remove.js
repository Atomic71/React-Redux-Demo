import * as actionTypes from '../actionTypes';
import {axiosInst} from '../axiosInstances';


const removeListInit = ( listId ) => ({ type: actionTypes.REMOVE_LIST_INIT, listId: listId })
const removeListFail = ( list, msg ) => ({ type: actionTypes.REMOVE_LIST_FAIL, list: list }) 
const removeListService = (token, listId) => axiosInst.delete(
    `/${listId}`,
    {headers: {
        "Authorization": `Token ${token}`
    }}
)

export const removeList = (token, list) => {
    return dispatch => {
        dispatch(removeListInit(list.id));
        console.log(list.id, token)
        removeListService(token, list.id)
        .catch(() => dispatch(removeListFail(list)))
    }
}