import * as actionTypes from '../actionTypes';
import axios from 'axios';


const fetchListsInit = () => ({ type: actionTypes.FETCH_LISTS_INIT })
const fetchListsFail = () => ({ type: actionTypes.FETCH_LISTS_FAIL })
const fetchListsPass = (lists) => ({ type: actionTypes.FETCH_LISTS_PASS, lists: lists })


export const fetchLists = (token) => {
    return (dispatch) => {
        dispatch(fetchListsInit());
        axios.get("https://radiant-escarpment-95925.herokuapp.com/api/todos/", {
                headers: {
                    "Authorization": `token ${token}`
                }
            })
            .then( (res) => dispatch(fetchListsPass(res.data)))
            .catch((err) => console.log(err) || dispatch(fetchListsFail()))
    }
}
