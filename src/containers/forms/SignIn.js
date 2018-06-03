import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderCheckbox, myCustomInput } from './utility/inputCreators';
import { MakeFieldConnected as MakeField } from './utility/makeField'
import { connect } from 'react-redux';
import { Button } from '../../components/Button';
import { MinLength } from './utility/validators';

const MinLength0 = MinLength(0);

const Fields = [
    {
        name: "username",
        type: "text",
        shouldFocusOnMount: true,
        placeholder: "Username",
        validate: [ MinLength0 ],
        warn: [ MinLength0 ],
        noPositiveFeedback: true,
    },
    {
        name: "password",
        type: "password",
        placeholder: "Your password",
        validate: [ MinLength0 ],
        warn: [ MinLength0 ],
        noPositiveFeedback: true,
    },
]

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
            {Fields.map(field => <MakeField key={field.name} {...field} />)}
            <br />
            <Field name="memorize" component={renderCheckbox} label="remember me?" />
            <br />
            <Button text={submitting ? 'Signing in' : 'Sign in'}
                classes={submitting ? 'submitting' : 'dark'}
                disabled={submitting}
                action="submit"
            />
        </form>
    )

export const SignInForm = reduxForm({ form: "SignIn" })(SignIn)