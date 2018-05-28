import * as actionTypes from '../actionTypes';
import { toggleItemService } from '../axiosInstances'; 

const toggleItemInit = (item) => ({ type: actionTypes.TOGGLE_ITEM_INIT, item: item });
const toggleItemFail = (item) => ({ type: actionTypes.TOGGLE_ITEM_FAIL, item: item });

export const toggleItem = (item, userToken) => {
    return dispatch => {
        dispatch(toggleItemInit(item))
        toggleItemService(item, userToken)
        .catch( err => dispatch(toggleItemFail(item)) )
    }
}
