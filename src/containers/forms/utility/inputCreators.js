import React, { Component } from 'react';
import { Field } from 'redux-form';
import { fieldValidIcon, giveGoodNews, giveBadNews } from './helpers'



export const renderCheckbox = (props) => (
    <div className="InputElement-withLabel">
        <label htmlFor={props.name}>
            <input type="checkbox" {...props.input} />
            <p>{props.label}</p>
        </label>
    </div>
)



const renderButton = (submitting) => (
    <button
        className={`${submitting ? "processing" : ''}`}
        type="submit"
        disabled={submitting}>&#8617;</button>
)

export class myCustomInput extends Component {
    componentDidMount() {
        const { shouldFocusOnMount } = this.props;
        shouldFocusOnMount && this.inputRef.focus();
    }

    render() {
        const {
            input,
            type,
            placeholder,
            hasButton,
            hasLabel,
            autoComplete,
            shouldFocusOnMount,
            negativeFeedback,
            positiveFeedback,
            noPositiveFeedback,
            meta: {
                error,
                warning,
                active,
                submitFailed,
                touched,
                submitting,
            }
        } = this.props;
        const classes = `InputElement ${active ? 'active' : ''} ${hasButton ? 'withButton' : ''} ${hasLabel ? 'withLabel' : ''} `;
        const niceMessage = !noPositiveFeedback && giveGoodNews(positiveFeedback)
        const validityHandler = touched && (warning ? giveBadNews(negativeFeedback || warning) : niceMessage);
        return (
            <div className={classes}>
                {(error && submitFailed) ? giveBadNews(error) : validityHandler}
                <input
                    {...input}
                    disabled={submitting}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete ? "on" : "off"}
                    ref={shouldFocusOnMount && (el => this.inputRef = el)}
                />
                {hasButton && renderButton(submitting)}
            </div>
        )
    }
}


