import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myCustomInput } from './utility/inputCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showErrorDiv, hideErrorDiv } from '../../store/actions/error';
import { createItem } from '../../store/actions/item/index';
import { MinLength } from './utility/validators';

import { MakeFieldConnected as MakeField } from './utility/makeField'

const MinLength0 = MinLength(0);


const AddItemField = {
    name: "AddItem",
    type: "text",
    shouldFocusOnMount: true,
    placeholder: "Enter a new item name",
    validate: [ MinLength0 ],
    noPositiveFeedback: true,
    hasButton: true,
}


class AddItem extends Component {
    AddItemHandler = (values) => {
        const NewItemName = values.AddItem;
        const { CreateItem, token, showError, listId, reset } = this.props;
        return new Promise((resolve, reject) => CreateItem(NewItemName, listId, token, resolve, reject))
            .then(() => reset())
            .catch((msg) => (showError(msg)));
    }

    render() {
        const { handleSubmit, form } = this.props;
        return (
            <form onSubmit={handleSubmit(this.AddItemHandler)}>
                <MakeField form={form} {...AddItemField} />
            </form>
        )
    }
}

const MapStateToProps = (state) => ({ token: state.userData.token, hasError: state.errorDiv })

const MapDispatchToProps = (dispatch) => ({
    CreateItem: (ItemName, ListId, UserToken, resolveCb, rejectCb) => dispatch(createItem(ItemName, ListId, UserToken, resolveCb, rejectCb)),
    showError: (message) => dispatch(showErrorDiv(message)),
    hideError: () => dispatch(hideErrorDiv())
})

AddItem = connect(MapStateToProps, MapDispatchToProps)(AddItem);

export const AddItemForm = reduxForm({ form: "AddItem" })(AddItem);