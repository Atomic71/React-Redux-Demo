import React, { Component } from 'react';
import { Field, touch } from 'redux-form'
import { myCustomInput } from './inputCreators';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

const mapStateToProps = (state) => ({
    errorDivVisible: state.errorDiv
})

const mapDispatchToProps = (dispatch) => ({
    touchFieldHandler: (form, field) => dispatch(touch(form, field)),
    hideErrorDiv: () => dispatch(hideErrorDiv())
})

class MakeField extends Component {

    immediateValidationHandler = (form, name) => this.props.touchFieldHandler(form, name)

    @autobind
    onChangeHandler() {
        const { form, name, touchFieldImmediately, errorDivVisible, hideErrorDiv } = this.props;
        touchFieldImmediately && this.immediateValidationHandler(form, name);
        errorDivVisible && hideErrorDiv();
    }

    render() {
        const {
            name, // name in form
            type, // <input type />
            placeholder, // self
            shouldFocusOnMount,
            touchFieldImmediately, // should validation start as user enters the field
            validate, // check for errors
            warn, // serves no purpose so far
            negativeFeedback, // custom bad input message
            positiveFeedback, // custom good input message
            noPositiveFeedback, // don't notify user on good input
            hasButton, // should it have a button?
        } = this.props;


        return (
            <Field
                component={myCustomInput} // default 
                key={name}
                name={name}
                type={type} //required props
                placeholder={placeholder}
                shouldFocusOnMount={shouldFocusOnMount}
                validate={validate}
                noPositiveFeedback={noPositiveFeedback}
                warn={warn}
                negativeFeedback={negativeFeedback}
                positiveFeedback={positiveFeedback}
                onChange={this.onChangeHandler}
                hasButton={hasButton}
            />
        )
    }
}

export const MakeFieldConnected = connect(null, mapDispatchToProps)(MakeField)



MakeField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    shouldFocusOnMount: PropTypes.bool,
    touchFieldImmediately: PropTypes.bool,
    positiveFeedback: PropTypes.string,
    witholdPositiveFeedback: PropTypes.bool,
    negativeFeedback: PropTypes.string,
    validate: PropTypes.arrayOf(PropTypes.func),
    warn: PropTypes.arrayOf(PropTypes.func)
}