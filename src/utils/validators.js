export const required = val => !!val;
export const greaterThan = len => val => val.length > len

export const validateField = (value, validators) => {
    return Array.prototype.every.call(validators, i => {
        return i(value)
    })
};

export const validateForm = form => {
    for (let key in form) {
        const {value, validators} = form[key]
        if (!validateField(value, validators)) {
            return false
        }
    }
    return true
}
  