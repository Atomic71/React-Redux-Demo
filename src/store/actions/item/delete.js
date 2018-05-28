import * as actionTypes from '../actionTypes';
import { deleteItemService } from '../axiosInstances';


const deleteItemInit = (item) => ({ type: actionTypes.REMOVE_ITEM_INIT, item: item });
const deleteItemFail = (item) => ({ type: actionTypes.REMOVE_ITEM_FAIL, item: item });


export const deleteItem = (item, userToken) => {
    return (dispatch) => {
        dispatch(deleteItemInit(item));
        deleteItemService(item, userToken)
        .catch( err => dispatch(deleteItemFail(item)) );
    }
}
