import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AddItemForm as AddItem } from './forms/AddItem';
import { RemoveListConnected as RemoveList } from './RemoveList';
import { TodoItemsConnected as TodoItems } from './TodoItems';


const List = ({list}) => (
    <div className="Todo-List">
        <h2>{list.title}</h2>
        <RemoveList list={list} />
        <AddItem listId={list.id}/>
        <TodoItems listId={list.id} />
    </div>
)

const TodoList = ({lists, match:{params:{id}}, fetched}) => {
    let toReturn = <p>Ending the mankind...</p>;

    if (fetched) {
        let requestedList = lists.find(list => list.id === +id);
        !requestedList
        ? toReturn = <Redirect to="/overview" />
        : toReturn = <List list={requestedList} />
    }

    return toReturn;
}

TodoList.propTypes = {
    lists: PropTypes.array.isRequired,
    fetched: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
}

const MapStateToProps = (state) => ({ 
    lists: state.userData.lists,
    fetched: state.userData.fetched,
})

export const TodoListConnected = connect(MapStateToProps)(TodoList);