import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { myCustomInput } from './inputCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createList } from '../../store/actions/list/create';
import { showErrorDiv, hideErrorDiv }  from '../../store/actions/error';
import {MinLength} from './validators'


const MinLength0 = MinLength(0);


class AddList extends Component {

    AddListHandler = (values) => {
        const NewListName = values.AddList;
        const { CreateList, token, showError, history: { push }}  = this.props;
        return new Promise((resolve, reject) => CreateList(token, NewListName, resolve, reject))
        .then((id) => push(`/overview/${id}`))
        .catch((msg) => showError(msg));
    } 

    clearErrorHandler = () => this.props.hasError && this.props.hideError();

    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                onSubmit={handleSubmit(this.AddListHandler)}
                className="AddList-Form">
                <Field shouldFocusOnMount hasButton
                    onChange={this.clearErrorHandler}
                    placeholder="Enter a new item name"
                    name="AddList"
                    type="text"
                    component={myCustomInput} 
                    validate={MinLength0} 
                    />
                
            </form>
        )
    }
}


const MapStateToProps = (state) => ({
    token: state.userData.token,
    hasError: state.errorDiv,
    
})

const MapDispatchToProps = (dispatch) => ({
    CreateList: (UserToken, NewListName, resolveCb, rejectCb) => dispatch(createList(
        UserToken, NewListName, resolveCb, rejectCb
    )),
    showError: (message) => dispatch(showErrorDiv(message)),
    hideError: () => dispatch(hideErrorDiv())
}) 

AddList = withRouter(connect(MapStateToProps, MapDispatchToProps)(AddList));

export const AddListForm = reduxForm({form: "AddList"})(AddList);