import {
    dummyData, 
    dummyArrOfObjects 
} from '../dummydata';
import {
    list_extractor, make_list_from_lists, object_updater
} from '../src/store/reducers/helperFunctions';

describe('list extractor', () => {
    it('converts a fetched array to a list of lists', () => { 
        expect(list_extractor(dummyData))
        .toEqual(dummyArrOfObjects)
    }) 
});

describe('grp_add_action', () => {
    it('adds multiple arrays to an array', () => {
        expect(
            make_list_from_lists(
                [[4, 5, 6, 7], [8, 9]], 
                [1, 2, 3])).toEqual
                ([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    })
    it('adds multiple arrays to an empty array',() => {
        expect(
            make_list_from_lists( [ [1,2,3], [4, 5, 6] ] ))
            .toEqual([1,2,3,4,5,6])
    })
})

describe('object_updater', () => {
    const someObject = {
        name: 'Andrej',
        surname: 'Tomic',
        employed: false
    };

    it('correctly updates an object if a new value is provided', () => {

        expect(object_updater(someObject, "surname", "kraljevic"))
        .toEqual({
            ...someObject,
            surname: "kraljevic"     
        })
    })

    it('correctly updates a boolean value inside of an object', () => {
        expect(object_updater(someObject, "employed"))
        .toEqual({
            ...someObject,
            employed: true
        })
    })
})
