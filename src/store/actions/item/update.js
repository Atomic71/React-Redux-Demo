import * as actionTypes from '../actionTypes';
import {axiosInst} from '../axiosInstances';

const updateItemInit = (item, newName) => ({type: actionTypes.UPDATE_ITEM_INIT, item: item, newName: newName});
const updateItemFail = (item) => ({type: actionTypes.UPDATE_ITEM_FAIL, item: item});
const renameItemService = (item, newName, userToken) => axiosInst.patch(
    `/${item.todo_list}/entries/${item.id}`,
    {"description": newName},
    {headers: {Authorization: `Token ${userToken}`}}
)


export const updateItem = (
    item, newName, userToken, resolveCb, rejectCb
) => dispatch => {
    dispatch(updateItemInit(item, newName))
    renameItemService(item, newName, userToken)
    .catch(() => rejectCb(item))
}