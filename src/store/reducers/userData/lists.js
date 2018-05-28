import {MakeReducer} from '../MakeReducer';
import * as helpers from '../helperFunctions';

const initialState = [];
const handlers = {
    FETCH_LISTS_PASS: (state, action) => [...action.lists],
    CREATE_LIST_PASS: (state, action) => [...state, action.list],
    REMOVE_LIST_INIT: (state, action) => state.filter(list => list.id !== action.listId ),
    REMOVE_LIST_FAIL: (state, action) => helpers.add_obj_to_list(state, action.list),
}

export const userLists = MakeReducer(initialState, handlers);
