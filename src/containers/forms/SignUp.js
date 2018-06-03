import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myCustomInput } from './utility/inputCreators';
import { MakeFieldConnected as MakeField } from './utility/makeField'
import { Button } from '../../components/Button';
import { MinLength, shouldMatch, validEmail, upperCaseChecker, numberChecker, checkOtherField, noSpaceAllowed } from './utility/validators';


const MinLength0 = MinLength(0);
const MinLength3 = MinLength(3, "weak password, keep going");
const MinLength6 = MinLength(6, "almost there...");
const shouldMatchPassword = shouldMatch("Password", "Passwords do not match");
const upperCaseChecker0 = upperCaseChecker(0);
const numberChecker0 = numberChecker(0);
const checkIfPassword = checkOtherField("Password", "hey, enter password first!")
const noSpace = noSpaceAllowed("please don't use spaces.")


const fields = [
    {
        name: "FirstName",
        type: "text",
        shouldFocusOnMount: true,
        placeholder: "Name",
        negativeFeedback: "Bad news example",
        warn: [ MinLength0 ],
        validate: [ MinLength0 ]
    },
    {
        name: "LastName",
        type: "text",
        placeholder: "Last name",
        warn: [ MinLength0 ],
        validate: [ MinLength0 ]
    },
    {
        name: "Username",
        type: "text",
        placeholder: "Your username",
        warn: [ MinLength0, noSpace ],
        validate: [ MinLength0, noSpace ]
    },
    {
        name: "Email",
        type: "text",
        placeholder: "E-mail address",
        warn: [ MinLength0, validEmail ],
        positiveFeedback: "Great e-mail address!",
        validate: [ MinLength0, validEmail ]
    },
    {
        name: "Password",
        type: "password",
        placeholder: "Your password",
        warn: [ MinLength0, numberChecker0, upperCaseChecker0, MinLength3, MinLength6 ],
        positiveFeedback: "Great password",
        validate: [ MinLength0, numberChecker0, upperCaseChecker0, MinLength3, MinLength6 ],
        touchFieldImmediately: true,
    },
    {
        name: "PasswordRepeat",
        type: "password",
        placeholder: "Repeat your password",
        warn: [ MinLength0, checkIfPassword, shouldMatchPassword ],
        positiveFeedback: "passwords match!",
        validate: [ MinLength0, checkIfPassword, shouldMatchPassword ],
        touchFieldImmediately: true,
    },
]



let SignUp = ({ handleSubmit, submitHandler, form }) => (
    <form className="AuthForm flex-center-v" onSubmit={handleSubmit(submitHandler)}>
        {fields.map(field => <MakeField key={field.name} form={form} {...field} />)}
        <Button type="submit" text="register" classes="dark" />
    </form>
)

export const SignUpForm = reduxForm({ form: "SignUp" })(SignUp)