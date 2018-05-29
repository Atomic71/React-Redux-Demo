import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { myCustomInput } from './inputCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showErrorDiv, hideErrorDiv }  from '../../store/actions/error';
import { createItem } from '../../store/actions/item/index';
import {MinLength} from './validators';


const MinLength0 = MinLength(0);


class AddItem extends Component {
    AddItemHandler = (values) => {
        const NewItemName = values.NewItem;
        console.log(this.props)
        const { CreateItem, token, showError, listId, reset}  = this.props;
        return new Promise((resolve, reject) => CreateItem(NewItemName, listId, token, resolve, reject))
        .then(()=>reset())
        .catch( (msg) => (showError(msg)) );
    } 

    componentDidMount() {
    }

    clearErrorHandler = () => this.props.hasError && this.props.hideError();

    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                onSubmit={handleSubmit(this.AddItemHandler)}>
                <Field shouldFocusOnMount hasButton
                    onChange={this.clearErrorHandler}
                    placeholder="Enter a new item name"
                    name="NewItem"
                    type="text"
                    component={myCustomInput} 
                    validate={MinLength0} />
            </form>
        )
    }
}


const MapStateToProps = (state) => ({
    token: state.userData.token,
    hasError: state.errorDiv,
    
})

const MapDispatchToProps = (dispatch) => ({
    CreateItem: (ItemName, ListId, UserToken, resolveCb, rejectCb) => dispatch(createItem(
        ItemName, ListId, UserToken, resolveCb, rejectCb
    )),
    showError: (message) => dispatch(showErrorDiv(message)),
    hideError: () => dispatch(hideErrorDiv()),
}) 

AddItem = connect(MapStateToProps, MapDispatchToProps)(AddItem);

export const AddItemForm = reduxForm({form: "AddItem"})(AddItem);