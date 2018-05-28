import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderCheckbox, renderPasswordInput, renderTextInput} from './inputCreators';
import {connect} from 'react-redux';
import { Button } from '../../components/Button';

let SignIn = ({
    handleSubmit,
    submitHandler,
    submitting,
    shouldAnimate,
    ...props
}) => (
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
        <Button text={submitting ? 'Signing in' : 'Sign in'}
            classes={submitting ? 'submitting' : 'dark'}
            disabled={submitting}
            action="submit" 
        />
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

export const SignInForm = reduxForm({form: "SignIn", validate, warn})(SignIn)