import {MakeReducer} from '../../src/store/reducers/MakeReducer';
import {dummyData, dummyArrOfObjects} from '../../dummydata';



describe('Make Reducer', () => {
    const initialState = {
        name: "Andrej",
        surname: "Tomic"
    }
    
    const handlers = {
        change_name: (state, action) => ({...state, name: action.name})
        }
    const myReducer = MakeReducer(initialState, handlers);
    
    it('sets up correctly', ()=> {
        expect(myReducer(undefined, {}))
        .toEqual(initialState)
    })

    it('does not respond to unregistered actions', () => {
        expect(myReducer(undefined, {type: "unregistered_action"}))
        .toEqual(initialState);        
    })

    it('responds to register actions correctly', () => {
        expect(myReducer(undefined, {
            type: "change_name",
            name: "dragan"
        }))
        .toEqual({name: "dragan", surname: "Tomic"})
    })

})