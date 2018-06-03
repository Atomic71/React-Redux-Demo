export const length = (value) => value.trim().length;


export const MinLength = (min, errorMessage = "required") => value => value && (length(value) > min)
    ? undefined
    : errorMessage;


export const shouldMatch = (target, errorMessage = "doesn't match") => (value, allValues) => allValues[ target ] !== value ? errorMessage : undefined

export const validEmail = (value) => {
    const myregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return myregex.test(value) ? undefined : "e-mail format not quite what we expected..."
}

export const numberChecker = (index = 0) => (value) => value && isNaN(value.charAt(index)) ? undefined : 'dont cheat the system, use letters...';
export const upperCaseChecker = (index = 0, message = "please, upper case...") => (value) => value &&
    value.charAt(index) === value.charAt(index).toUpperCase()
    ? undefined
    : message;


export const checkOtherField = (otherField, message = "err message") => (value, allValues) => allValues[ otherField ] ? undefined : message;

export const noSpaceAllowed = (message = "please don't use spaces") => (value) => value && (value.indexOf(' ') >= 0 ? message : undefined);  
