import * as actionTypes from '../actionTypes';
import {axiosInst} from '../axiosInstances';


const createListSuccess = (list) => ({ type: actionTypes.CREATE_LIST_PASS, list: list })
const createListService = (token, name) => axiosInst.post(
    '/',
    {title: name},
    {headers: {"Authorization": `Token ${token}`}}
);
export const createList = (token, listName, resolveCb, rejectCb) => {
    return (dispatch) => createListService(token, listName)
       .then( res => {
           dispatch(createListSuccess(res.data));
           resolveCb(res.data.id)
        })
       .catch(() => rejectCb("something went wrong!"))
}
