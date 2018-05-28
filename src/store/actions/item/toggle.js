import * as actionTypes from '../actionTypes';
import { axiosInst } from '../axiosInstances'; 


const toggleItemInit = (item) => ({ type: actionTypes.TOGGLE_ITEM_INIT, item: item });
const toggleItemFail = (item) => ({ type: actionTypes.TOGGLE_ITEM_FAIL, item: item });
const toggleItemService = (item, userToken) => axiosInst.patch(
    `/${item.todo_list}/entries/${item.id}`,
    {"completed": !item.completed},
    {headers: {Authorization: `Token ${userToken}`}}
)

export const toggleItem = (item, userToken) => {
    return dispatch => {
        dispatch(toggleItemInit(item))
        toggleItemService(item, userToken)
        .catch( err => dispatch(toggleItemFail(item)) )
    }
}
