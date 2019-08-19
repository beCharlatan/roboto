import React from 'react'
import cl from 'classnames'
import icons from '../utils/icons'

const TextInput = ({
  name,
  error,
  placeholder,
  size,
  icon,
  ...props }) => {
  return <div
    className={cl('form__section', 
      size === 'sm' && 'form__section--sm')}>
    <input
      name={name}
      placeholder={placeholder}
      id={`id-${name}`}
      className={cl('form__input', {
        'form__input--error': error
      })}
      {...props}
    />
    <label
      className={`form__label`}
      htmlFor={`id-${name}`}>
      {placeholder}
    </label>
    {icon && <div className="form__icon">{icons[icon]}</div>}
  </div>
}

export default TextInput;