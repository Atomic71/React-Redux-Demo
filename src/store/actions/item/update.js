import * as actionTypes from '../actionTypes';
import {renameItemService} from '../axiosInstances';

const updateItemInit = (item, newName) => ({type: actionTypes.UPDATE_ITEM_INIT, item: item, newName: newName});
const updateItemFail = (item) => ({type: actionTypes.UPDATE_ITEM_FAIL, item: item});

export const updateItem = (
    item, newName, userToken, resolveCb, rejectCb
) => dispatch => {
    dispatch(updateItemInit(item, newName))
    renameItemService(item, newName, userToken)
    .then(() => resolveCb())
    .catch(() => rejectCb(item))
}