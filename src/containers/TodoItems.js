import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ConnectedTodoItem as TodoItem} from '../components/TodoItem';

const TodoItems = ({ data, listId }) => (
    <div className="certain-list-items">
        {data.map(
            entry => entry.todo_list === listId 
            ? <TodoItem key={entry.id} item={entry} /> 
            : null)}
    </div>
)


TodoItems.propTypes = {
    data: PropTypes.array.isRequired,
    listId: PropTypes.number.isRequired
}

const MapStateToProps = (state) => ({
    data: state.userData.items
})

export const TodoItemsConnected = connect(MapStateToProps)(TodoItems);

