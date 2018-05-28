import React from 'react';
import { Button } from '../../../src/components/Utility/Button';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('Button utility component', () => {
    const onClickFunc = jest.fn();
    const props = {
        type: "something",
        text: "Andrej's Button",
        onClick: onClickFunc
    }
    it('matches the expected snapshot', () => {
        const myButtonn = renderer.create(<Button {...props} />).toJSON(); 
        expect(myButtonn).toMatchSnapshot();
    });
    
    it('correctly calls the onClick function', () => {
        const myButton = shallow( <Button {...props} />
        ).find('button');
        myButton.simulate("click");
        expect(onClickFunc.mock.calls.length).toEqual(1);
    })
})