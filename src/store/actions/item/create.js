import * as actionTypes from '../actionTypes';
import {axiosInst} from '../axiosInstances'

const createItemPass = (item) => ({type: actionTypes.CREATE_ITEM_PASS, item: item});
const createItemService = (name, listId, userToken) => axiosInst.post(
    `/${listId}/entries`,
    {description: name},
    {headers: {"Authorization": `Token ${userToken}`}}
);

export const createItem = (name, listId, userToken, resolveCb, rejectCb) => {
    return (dispatch) => {
        createItemService(name, listId, userToken)
        .then(res => {
            dispatch(createItemPass(res.data))
            resolveCb();
        })
        .catch(err => rejectCb('Add Item Rejected'));
    }
}