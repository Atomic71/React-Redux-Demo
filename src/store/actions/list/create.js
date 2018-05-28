import * as actionTypes from '../actionTypes';
import axios from 'axios';


const createListInit = () => ({type: actionTypes.CREATE_LIST_INIT});
const createListSuccess = (list) => ({ type: actionTypes.CREATE_LIST_PASS, list: list })

export const createList = (token, listName, resolveCb, rejectCb) => {
    return (dispatch) => {
       dispatch(createListInit());
       axios.post(
           'https://radiant-escarpment-95925.herokuapp.com/api/todos/', 
           {title: listName},
           {headers: {
               "Authorization": `Token ${token}`
           }}
       )
       .then(res => {
           dispatch(createListSuccess(res.data));
           resolveCb(res.data.id)
        })
       .catch(() => rejectCb("something went wrong!"))
   }
}
