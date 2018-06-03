import React from 'react';
import { Button } from '../../../src/components/Button';
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer';

describe('Button utility component', () => {
    let myButton, props, onClickFunc;
    beforeEach(() => {
        onClickFunc = jest.fn();
        props = {
            classes: "something",
            text: "Andrej's Button",
            clickHandler: onClickFunc
        }
    })
    it('matches the expected snapshot', () => {
        const myButton = renderer.create(<Button {...props} />).toJSON();
        expect(myButton).toMatchSnapshot();
    });

    it('correctly calls the onClick function', () => {
        const myButton = shallow(<Button {...props} />
        ).find('button');
        myButton.simulate("click");
        expect(onClickFunc.mock.calls.length).toEqual(1);
    })

    it('does not call anything when disabled', () => {
        const myButton = mount(<Button {...props} disabled />).find('button');
        myButton.simulate("click")
        expect(onClickFunc.mock.calls.length).toEqual(0)
    })
})