import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderCheckbox, renderPasswordInput, renderTextInput} from './inputCreators';

let SignUp = ({handleSubmit, submitHandler}) => (
    <form className="flex-center-v" onSubmit={handleSubmit(submitHandler)}>
        <Field name="FirstName" component={renderTextInput} placeholder="First Name"/>
        <Field name="LastName" component={renderTextInput} placeholder="Last Name"/>
        <Field name="Username" component={renderTextInput} placeholder="Username"/>
        <Field name="Email" component={renderTextInput} placeholder="E-mail" />
        <Field
            name="password"
            component={renderPasswordInput}
            placeholder="Password"/>
        <Field
            name="passwordrepeat"
            component={renderPasswordInput}
            placeholder="Repeat your password"/>
        <button type="submit">Register</button>
    </form>
)

export const SignUpForm = reduxForm({form: "SignUp"})(SignUp)