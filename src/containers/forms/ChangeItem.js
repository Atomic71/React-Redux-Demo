import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';

import { renderInputWithButton } from './utility/inputCreators';
import { updateItem } from '../../store/actions/item/index'
import { showErrorDiv } from '../../store/actions/error';


const MinLength = min => value => value && (value.trim().length > min) ? undefined : 'invalid item name';
const MinLength0 = MinLength(0);


class ChangeItem extends Component {

    UpdateItemHandler = (values) => {
        const { item, token, updateItemName, toggleView, showError } = this.props;
        const newName = values.NewName;
        toggleView();
        return new Promise(
            (resolve, reject) => updateItemName(item, newName, token, resolve, reject)
        ).catch((msg) => console.log("rejected"));
    }


    render() {
        const { handleSubmit, toggleView } = this.props;
        return (
            <form
                onSubmit={handleSubmit(this.UpdateItemHandler)}>
                <Field
                    onBlur={() => toggleView()}
                    autoComplete="off"
                    name="NewName"
                    type="text"
                    component={renderInputWithButton}
                    validate={MinLength0}
                />
            </form>
        )
    }
}

const MapStateToProps = (state) => ({ token: state.userData.token })

const MapDispatchToProps = (dispatch) => ({
    updateItemName: (item, newName, token, resolve, reject) => dispatch(updateItem(item, newName, token, resolve, reject)),
    showError: (message) => dispatch(showErrorDiv(message)),
})


ChangeItem = connect(MapStateToProps, MapDispatchToProps)(ChangeItem);

export const ChangeItemForm = reduxForm({ form: "ChangeItem" })(ChangeItem);   