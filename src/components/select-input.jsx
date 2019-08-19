import React, {useState} from 'react'
import cl from 'classnames'
import icons from '../utils/icons'
import $ from 'jquery'

const ages = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]

const SelectInput = ({
  name,
  error,
  placeholder,
  size,
  icon,
  onChange }) => {
  let [showOptions, setShowOptions] = useState(false)
  document.onmouseup = function(e) {
    if (e.target.nodeName === 'LI') return;
    if (showOptions) {
      setShowOptions(false)
    }
  }
  return <div
    className={cl('form__section', 
      size === 'sm' && 'form__section--sm')}>
    <select
      name={name}
      placeholder={placeholder}
      id={`id-${name}`}
      className={cl('form__input form__select', {
        'form__input--error': error
      })}
      onClick={e => {
        e.stopPropagation()
        setShowOptions(!showOptions)
      }}
    >
      <option hidden>AGE</option>
      {
        ages.map((i, id) => 
          <option key={id}>{2019 - i}</option>)
      }
    </select>
    {/* <label
      className={`form__label`}
      htmlFor={`id-${name}`}>
      {placeholder}
    </label> */}
    {icon && <div className="form__icon">{icons[icon]}</div>}
    {showOptions && 
    <ul className="form__options">
      {
        ages.map((i, id) => 
          <li key={id}
            onClick={(e) => {
              const value = $(e.target).text()
              const age = (Number(2019 - value)).toString()
              const select = $('select')
              $(select).val(age)
              setShowOptions(false)
              onChange({currentTarget: {name, value: age}})
            }}>{i}</li>)
      }
    </ul>}
  </div>
}

export default SelectInput