export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined


