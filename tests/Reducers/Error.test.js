import { errorDiv } from '../../src/store/reducers/error/errorDiv';

describe('errorDiv', () => {
    it('sets up correctly', () => {
        expect(errorDiv(undefined, { type: "random_type" }))
            .toEqual(false);
    })
    it('responds to actions correctly', () => {
        expect(errorDiv(undefined, { type: "SHOW_ERROR_DIV", error: "some error" }))
            .toEqual("some error");
        expect(errorDiv(undefined, { type: "HIDE_ERROR_DIV" }))
            .toEqual(false);
    })
})