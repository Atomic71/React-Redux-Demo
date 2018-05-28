import React from 'react';

export const renderTextInput = ({ 
    input,  
    placeholder, 
    meta : { active, error, valid, touched, pristine, dirty, warning } 
    }) => (
    <div className="InputElement">
        {touched && pristine && (<p className="InputElement-Warning">{warning}</p>)}
        <input {...input}
        className={`
            ${active && 'active'} 
            ${pristine && touched && !active && (!warning ? 'valid' : 'invalid')} 

        `}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        />
    </div>
)

export const renderPasswordInput = (props) => (
    <div className="InputElement">
        <input {...props.input}
            type="password"
            className={`
                InputElement 
                ${props.meta.active && 'active'}
                `}
            placeholder={props.placeholder}
            />
    </div>
)

export const renderCheckbox = (props) => (
    <div className="InputElement-withLabel">
        <label htmlFor={props.name}>
        <input type="checkbox" {...props.input}/>
        <p>{props.label}</p>
        </label>
    </div>
)

export const renderInputWithButton = ({
    input, type, required, placeholder, meta, autoComplete, value,
    meta:{ submitting, error, warning}
    }) => (
            <div className="InputElement-withButton">
            {meta.visited && meta.submitFailed && !submitting && error && <span className="input-error">{error}</span> }
                <input {...input}
                    autoComplete={autoComplete}
                    type={type} 
                    placeholder={placeholder} />
                <button
                    className={`${submitting ? "processing" : ''}`} 
                    type="submit" disabled={submitting}>&#8617;</button>
            </div>
)
