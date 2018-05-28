import React from 'react';
import { ErrorDiv } from "../../../src/components/Utility/ErrorDiv";
import { CSSTransition } from 'react-transition-group';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('<ErrorDiv />', () => {
    const myMockFn = jest.fn();
    it('does not render when error is false' , () => {
        const tree = renderer.create(
            <ErrorDiv error={false} hideError={myMockFn} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    it('does render when there is an error', ()=> {
        const tree = renderer.create(
            <ErrorDiv error="Some error" hideError={myMockFn} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('calls the onCLick properly', () => {
        const myErrDiv = shallow(<ErrorDiv error="Some error" hideError={myMockFn}/>)
        const closeBtn = myErrDiv.find('span');
        closeBtn.simulate('click');
        expect(myMockFn.mock.calls.length).toBe(1);        
    })

})