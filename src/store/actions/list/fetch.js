import * as actionTypes from '../actionTypes';
import {axiosInst} from '../axiosInstances';


const fetchListsFail = () => ({ type: actionTypes.FETCH_LISTS_FAIL })
const fetchListsPass = (lists) => ({ type: actionTypes.FETCH_LISTS_PASS, lists: lists })

const fetchListsService = (token) => axiosInst.get(
    '/', {headers: {"Authorization": `token ${token}`}}
)


export const fetchLists = (token) => 
    (dispatch) => fetchListsService(token)
        .then((res) => dispatch(fetchListsPass(res.data)))
        .catch((err) => dispatch(fetchListsFail()))
