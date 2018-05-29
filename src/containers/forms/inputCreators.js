import React, {Component} from 'react';

export const renderCheckbox = (props) => (
    <div className="InputElement-withLabel">
        <label htmlFor={props.name}>
            <input type="checkbox" {...props.input}/>
            <p>{props.label}</p>
        </label>
    </div>
)

export class myCustomInput extends Component {
    componentDidMount() {
        this.props.shouldFocusOnMount && this.inputRef.focus();
    }

    render() {
        const {
            input,
            type,
            placeholder,
            autoComplete,
            shouldFocusOnMount,
            hasButton,
            hasLabel,
            meta: {
                error,
                warning,
                active,
                submitFailed,
                touched,
                submitting
            }
        } = this.props;
        return (
            <div 
            className={`InputElement
            ${hasButton && 'withButton'}
            ${hasLabel && 'withLabel'}
            `}
            >
                {(touched || submitFailed) && error && (
                <p className="Warning">{error}</p>
                )}
                <input
                {...input}
                type={type}
                className={`InputElement 
                ${active && 'active'} 
                ${touched && !active && (error ? 'invalid': '')}`}
                placeholder={placeholder}
                autoComplete={autoComplete || "off"}
                ref={shouldFocusOnMount && (el => this.inputRef = el)}
                />
                {hasButton && <button
                    className={`${submitting
                    ? "processing"
                    : ''}`}
                    type="submit"
                    disabled={submitting}>&#8617;</button>
                }
            </div>
        )
    }
}