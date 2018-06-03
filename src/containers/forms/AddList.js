import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myCustomInput } from './utility/inputCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createList } from '../../store/actions/list/create';
import { showErrorDiv, hideErrorDiv } from '../../store/actions/error';
import { MinLength } from './utility/validators';

import { MakeFieldConnected as MakeField } from './utility/makeField'

const MinLength0 = MinLength(0);


const AddListField = {
    name: "AddList",
    type: "text",
    shouldFocusOnMount: true,
    placeholder: "Enter a new list name",
    validate: [ MinLength0 ],
    noPositiveFeedback: true,
    hasButton: true,
}

class AddList extends Component {

    AddListHandler = (values) => {
        const NewListName = values.AddList;
        const { CreateList, token, showError, history: {
            push
        } } = this.props;
        return new Promise((resolve, reject) => CreateList(token, NewListName, resolve, reject))
            .then((id) => push(`/overview/${id}`))
            .catch((msg) => showError(msg));
    }


    clearErrorHandler = () => this.props.hasError && this.props.hideError();

    render() {
        const { handleSubmit, form } = this.props;
        return (
            <form onSubmit={handleSubmit(this.AddListHandler)} className="AddList-Form">
                <MakeField form={form} {...AddListField} />
            </form>
        )
    }
}

const MapStateToProps = (state) => ({ token: state.userData.token })

const MapDispatchToProps = (dispatch) => ({
    CreateList: (UserToken, NewListName, resolveCb, rejectCb) => dispatch(createList(UserToken, NewListName, resolveCb, rejectCb)),
    showError: (message) => dispatch(showErrorDiv(message)),

})

AddList = withRouter(connect(MapStateToProps, MapDispatchToProps)(AddList));

export const AddListForm = reduxForm({ form: "AddList" })(AddList);