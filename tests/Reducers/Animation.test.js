import { reducer as authAnimation } from '../../src/store/reducers/animations/auth';


describe('authAnimation', () => {
    it('sets up correctly', () => {
        expect(authAnimation(undefined, {type: "random_type"}))
        .toEqual(false)
    });
    
    it('responds to a predefined handler correctly',() => {
        expect(authAnimation(undefined, {type: "LOGIN_FAIL"}))
        .toEqual(true)

        expect(authAnimation(undefined, {type: "LOGIN_INIT"}))
        .toEqual(false);
    })
})


