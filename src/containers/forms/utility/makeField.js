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
        // destructure the this.props object in order to get the properties for the <Field />
        const {
            form, touchFieldImmediately, errorDivVisible, hideErrorDiv, // no need for these
            ...rest // gather the ones that need forwarding
        } = this.props;
        return (
            <Field {...rest}
                onChange={this.onChangeHandler}
                component={myCustomInput}
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