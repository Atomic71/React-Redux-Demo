import { errorAuth } from '../../src/store/reducers/error/errorAuth';
import { errorDiv } from '../../src/store/reducers/error/errorDiv';

describe('errorDiv', () => {
    it('sets up correctly', () => {
        expect(errorDiv(undefined, {type: "random_type"}))
        .toEqual(false);
    })
    it('responds to actions correctly', () => {
        expect(errorDiv(undefined, {type: "SHOW_ERROR_DIV", error: "some error"}))
        .toEqual("some error");
        expect(errorDiv(undefined, {type: "HIDE_ERROR_DIV"}))
        .toEqual(false);
    })
})

describe('errorAuth', () => {
    it('sets up correctly', () => {
        expect(errorAuth(undefined, {type: "random_type"}))
        .toEqual(false);
    })
    it('responds to actions correctly', () => {
        expect(errorAuth(undefined, {type: "SHOW_AUTH_ERR", error: "some error"}))
        .toEqual("some error");
        expect(errorAuth(undefined, {type: "HIDE_AUTH_ERR"}))
        .toEqual(false);
    })
})