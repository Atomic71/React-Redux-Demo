import * as actionTypes from '../actionTypes';
import { axiosInst } from '../axiosInstances';


const deleteItemInit = (item) => ({ type: actionTypes.REMOVE_ITEM_INIT, item: item });
const deleteItemFail = (item) => ({ type: actionTypes.REMOVE_ITEM_FAIL, item: item });
const deleteItemService = (item, userToken) => axiosInst.delete(`/${item.todo_list}/entries/${item.id}`, {
    headers: {
        Authorization: `Token ${userToken}`
    }
});

export const deleteItem = (item, userToken) => {
    return (dispatch) => {
        dispatch(deleteItemInit(item));
        deleteItemService(item, userToken)
        .catch( err => dispatch(deleteItemFail(item)) );
    }
}
