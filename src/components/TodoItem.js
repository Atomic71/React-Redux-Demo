import React, {Component} from 'react';
import {Icon} from './Icon';
import { connect } from 'react-redux';

import { deleteItem, updateItem, toggleItem } from '../store/actions/item/index'
import autobind from 'autobind-decorator';
import { ChangeItemForm } from '../containers/forms/ChangeItem';
import { initialize } from 'redux-form'
 
const Item = ({item, toggleItem, changeItem, deleteItem}) => (
    <div 
        key={item.id} 
        className={`TodoItem ${item.completed ? "completed" : "" }`} >
        <p className="TodoItem-text">{item.description}</p>
        <div className="TodoItem-controls">
            <Icon onClickHandler={toggleItem} icon="clipboard" itemTitle="mark as completed" />
            <Icon onClickHandler={deleteItem} icon="bin" itemTitle="delete item" />
            <Icon onClickHandler={changeItem} icon="pencil" itemTitle="change name" />
        </div>
    </div>
)

const MapStateToProps = (state) => ({ token: state.userData.token })

const MapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (item, token) => dispatch(deleteItem(item, token)),
        toggleItem: (item, token) => dispatch(toggleItem(item, token)),
        updateItem: (item, newName, token) => dispatch(updateItem(item, newName, token)),
        setInitialName: (currentName) => dispatch(initialize("ChangeItem", {NewName: currentName})) 
    }
}


class TodoItem extends Component {
    state = {
        isBeingEdited: false,
    }
    
    @autobind
    toggleViewHandler() { 
        this.setState(prevState => ( {isBeingEdited: !prevState.isBeingEdited} ))
    }

    @autobind
    prepareItemHandler() {
        const currentName = this.props.item.description;
        const { setInitialName } = this.props;
        setInitialName(currentName);
        this.toggleViewHandler();
    } 

    @autobind
    toggleItemHandler(){ 
        const { toggleItem, item, token} = this.props;
        toggleItem(item, token); 
    }
    
    @autobind
    deleteItemHandler(){ 
        const {deleteItem, item, token} = this.props;
        deleteItem(item, token);
    }

    render() {
        const {isBeingEdited, newName} = this.state;
        const {item} = this.props;
        let todoItem = <Item 
            item={item} 
            deleteItem={this.deleteItemHandler} 
            changeItem={this.prepareItemHandler}
            toggleItem={this.toggleItemHandler} 
        />

        isBeingEdited && ( todoItem = <ChangeItemForm 
            toggleView={this.toggleViewHandler}
            item={item} 
            />
        )

        return todoItem
    }
}

export const ConnectedTodoItem = connect(MapStateToProps,MapDispatchToProps)(TodoItem);