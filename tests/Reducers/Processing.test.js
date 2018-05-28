import { reducer as authProcessing } from '../../src/store/reducers/processing/auth';
import { reducer as addItem } from '../../src/store/reducers/processing/addItem'
import { reducer as addList } from '../../src/store/reducers/processing/addList'

describe('authProcessing', () => {
    it('sets up correctly', () => {
        expect(authProcessing(undefined, {type: "random_type"}))
        .toEqual(false);
    })
    it('responds to actions correctly', () => {
        expect(authProcessing(undefined, {type: "LOGIN_INIT"}))
        .toEqual(true);
        expect(authProcessing(undefined, {type: "LOGIN_FAIL"}))
        .toEqual(false);
        expect(authProcessing(undefined, {type: "LOGIN_PASS"}))
        .toEqual(false)
    })
});

describe('addItem', () => {
    it('sets up correctly', () => {
        expect(addItem(undefined, {type: "random_type"}))
        .toEqual(false);
    })
    it('responds to actions correctly', () => {
        expect(addItem(undefined, {type: "CREATE_ITEM_INIT"}))
        .toEqual(true);
        expect(addItem(undefined, {type: "CREATE_ITEM_FAIL"}))
        .toEqual(false);
        expect(addItem(undefined, {type: "CREATE_ITEM_PASS"}))
        .toEqual(false)
    })
})

describe('addList', () => {
    it('sets up correctly', () => {
        expect(addList(undefined, {type: "random_type"}))
        .toEqual(false);
    })
    it('responds to actions correctly', () => {
        expect(addList(undefined, {type: "CREATE_LIST_INIT"}))
        .toEqual(true);
        expect(addList(undefined, {type: "CREATE_LIST_FAIL"}))
        .toEqual(false);
        expect(addList(undefined, {type: "CREATE_LIST_PASS"}))
        .toEqual(false)
    })
})