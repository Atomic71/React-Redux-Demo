import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderCheckbox, renderPasswordInput, renderTextInput, myCustomInput} from './inputCreators';
import {connect} from 'react-redux';
import { Button } from '../../components/Button';

let SignIn = ({
    handleSubmit,
    submitHandler,
    submitting,
    submitFailed,
    shouldAnimate,
    ...props
}) => (
    <form
        className={`AuthForm flex-center-v ${(shouldAnimate || submitFailed) && 'rejected'}`}
        onSubmit={handleSubmit(submitHandler)}>
        {shouldAnimate && <p className="info-rejected">Incorrect username/password. please, try again.</p>}
        <Field shouldFocusOnMount 
            name="username" 
            type="text"
            component={myCustomInput} 
            placeholder="Username..."
            />
        <Field 
            name="password"
            type="password"
            component={myCustomInput}
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

    if (!values.username) {(errors.username = "required")}
    if (!values.password) {(errors.password = "required")}
    return errors
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