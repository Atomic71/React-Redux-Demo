import { MakeReducer } from '../MakeReducer'
import * as helpers from '../helperFunctions'


const initialState = [];
const handlers_items = {
    //tested
    FETCH_LISTS_PASS: (state, action) => helpers.list_extractor(action.lists),
    
    //tested
    CREATE_ITEM_PASS: (state, action) => [...state, action.item],
    
    //tested
    REMOVE_ITEM_INIT: (state, action) => state.filter(item => item.id !== action.item.id),
    
    //tesetd
    TOGGLE_ITEM_INIT: (state, action) => state.map( 
        item => item.id !== action.item.id 
        ? item 
        : ({...item, completed: !item.completed}) 
    ),

    //tested
    UPDATE_ITEM_INIT: (state, action) => state.map(
        item => item.id !== action.item.id
        ? item
        : ({...item, description: action.newName})
    ),  
}


export const userItems = MakeReducer(
    initialState,
    handlers_items
)