import * as actionTypes from '../actionTypes';
import {createItemService} from '../axiosInstances'


const createItemInit = () => ({ type: actionTypes.CREATE_ITEM_INIT });
const createItemFail = (err) => ({ type: actionTypes.CREATE_ITEM_FAIL, err: err });
const createItemPass = (item) => ({ type: actionTypes.CREATE_ITEM_PASS, item: item });

export const createItem = (name, listId, userToken, resolveCb, rejectCb) => {
    return (dispatch) => {
        dispatch(createItemInit());
        createItemService(name, listId, userToken)
        .then(res => {
            dispatch(createItemPass(res.data));
            resolveCb('Add Item Success');
        })
        .catch(err => {
            rejectCb('Add Item Rejected')
            dispatch(createItemFail(err));
        });
    }
}