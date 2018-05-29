export const MinLength = min => value => value && (value.trim().length > min)
    ? undefined
    : 'invalid item name';
