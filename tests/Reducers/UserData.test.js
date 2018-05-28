import {userItems} from '../../src/store/reducers/userData/items'
import {userLists} from '../../src/store/reducers/userData/lists'
import {
    dummyData,
    dummyArrOfObjects,
    dummyDataArrWithoutIdThree,
    newItem,
    dummyArrOfObjectsWithNewItem,
    dummyArrOfObjectsWithUpdatedThree,
    dummyArrOfObjectsWithToggledThree,
    dummyDataWithNewList,
    dummyDataWithoutListFour
} from '../../dummydata'

describe('userLists', () => {
    it('sets up correctly', () => {
        expect(userLists(undefined, {type: "random_type"})).toEqual([]);
    });

    it('responds to FETCH_LISTS_PASS correctly', () => {
        expect(userLists(undefined, {
            type: "FETCH_LISTS_PASS",
            lists: dummyData
        })).toEqual(dummyData);
    });

    it('responds to REMOVE_LIST_INIT correctly', () => {
        expect(userLists(dummyData, {
            type: "REMOVE_LIST_INIT",
            listId: 4
        })).toEqual(dummyDataWithoutListFour);
    });


    it('responds to CREATE_LIST_PASS correctly', () => {
        expect(userLists(dummyData, {
            type: "CREATE_LIST_PASS",
            list: {
                "id": 5,
                "title": "my new list",
                entries: []
            }
        })).toEqual(dummyDataWithNewList);
    })
})

describe('userItems', () => {
    it('sets up correctly', () => {
        expect(userItems(undefined, {type: "random_type"})).toEqual([]);
    })
    it('responds to actions correctly', () => {
        expect(userItems(undefined, {
            type: "FETCH_LISTS_PASS",
            lists: dummyData
        })).toEqual(dummyArrOfObjects);

        expect(userItems(dummyArrOfObjects, {
            type: "REMOVE_ITEM_INIT",
            item: {
                "id": 3,
                "completed": false,
                "description": "some todo list item",
                "todo_list": 4
            }
        })).toEqual(dummyDataArrWithoutIdThree);

        expect(userItems(dummyArrOfObjects, {
            type: "CREATE_ITEM_PASS",
            item: newItem
        })).toEqual(dummyArrOfObjectsWithNewItem);

        expect(userItems(dummyArrOfObjects, {
            type: "TOGGLE_ITEM_INIT",
            item: {
                "id": 3,
                "completed": false,
                "description": "some todo list item",
                "todo_list": 4
            }
        })).toEqual(dummyArrOfObjectsWithToggledThree);

        expect(userItems(dummyArrOfObjects, {
            type: "UPDATE_ITEM_INIT",
            item: {
                "id": 3,
                "completed": false,
                "description": "some todo list item",
                "todo_list": 4
            },
            newName: "updated list item"
        })).toEqual(dummyArrOfObjectsWithUpdatedThree);
    })
})