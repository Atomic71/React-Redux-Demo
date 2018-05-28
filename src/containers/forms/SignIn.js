import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderCheckbox, renderPasswordInput, renderTextInput} from './inputCreators';
import {connect} from 'react-redux';


let SignIn = ({
    handleSubmit,
    submitHandler,
    submitting,
    shouldAnimate,
    ...props
}) => console.log(shouldAnimate)||(
    <form
        className={`flex-center-v ${shouldAnimate && 'rejected'}`}
        onSubmit={handleSubmit(submitHandler)}>
        {shouldAnimate && <p className="info-rejected">something went wrong, please try again</p>}
        <Field name="username" component={renderTextInput} placeholder="Username..."/>
        <Field
            name="password"
            component={renderPasswordInput}
            placeholder="Password..."/>
        <br/>
        <Field name="memorize" component={renderCheckbox} label="remember me?"/>
        <br/>
        <button
            className={`button center ${submitting
            ? 'submitting'
            : 'primary'}`}
            type="submit"
            disabled={submitting}>
            {submitting
                ? 'Logging in'
                : 'Log in'}
        </button>
    </form>
)

const validate = values => {
    const errors = {}

    // if (values.username !== "pinkpanther") {(errors.username = "")}
    return errors
    // values.username.trim().length < 5 && (errors.username = "must be longer than
    // 5 characters")
}

const warn = values => {
    const warnings = {}
    !values.username && (warnings.username = "required")
    !values.password && (warnings.password = "requried")
    return warnings
}

// const MapStateToProps = (state) => ({ })
// SignIn = connect(MapStateToProps)(SignIn)

export const SignInForm = reduxForm({form: "authentication", validate, warn})(SignIn)