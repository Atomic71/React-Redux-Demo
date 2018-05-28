import React from 'react';
import {UserLists} from '../../src/components/UserListsAnimated';
import {dummyData} from '../../dummydata';
import renderer from 'react-test-renderer';
import MockRouter from 'react-mock-router';


describe("<UserLists />", () => {
    const lists = [ { "id": 3, "title": "a new fresh todo list" }, { "id": 4, "title": "an even fresher todo list" }]

    
    it("renders correctly when the lists are not fetched yet", () => {
        let tree = renderer
            .create(<UserLists/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("renders correctly when the lists are fetched but there are none", () => {
        let tree = renderer
            .create(<UserLists fetched lists={[]}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("renders correctly when the lists are fetched and there are lists", () => {
        let tree = renderer
            .create(<MockRouter><UserLists fetched lists={lists}/></MockRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})