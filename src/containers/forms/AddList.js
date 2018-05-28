import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInputWithIcon } from './inputCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createList } from '../../store/actions/list';
import { showErrorDiv, hideErrorDiv }  from '../../store/actions/error'


const MinLength = min => value => value && (value.trim().length > min) ? undefined : 'invalid list name';
const MinLength0 = MinLength(0);


class AddList extends Component {

    AddListHandler = (values) => {
        const NewListName = values.AddList;
        const { CreateList, token, showError, history: { push }}  = this.props;
        return new Promise((resolve, reject) => {
            const resolveCb = resolve;
            const rejectCb = reject;
            CreateList(token, NewListName, resolveCb, rejectCb)
            }
        ).then((id) => push(`/overview/${id}`))
        .catch((msg) => showError(msg));
    } 

    clearErrorHandler = () => this.props.hasError && this.props.hideError();

    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                onSubmit={handleSubmit(this.AddListHandler)}>
                <Field
                    autoComplete="off" 
                    onChange={this.clearErrorHandler}
                    placeholder="Enter a new list name"
                    name="AddList"
                    type="text"
                    component={renderInputWithIcon} 
                    validate={MinLength0}/>
            </form>
        )
    }
}


const MapStateToProps = (state) => ({
    token: state.userData.token,
    hasError: state.errors.div,
    
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