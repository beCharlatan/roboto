import React from 'react';
import cx from 'classnames';

const SelectInput = ({
  name,
  error,
  labelClass,
  inputClass,
  placeholder,
  validate,
  ...props }) => {
  return (
    <label
      className={cx('label', !!labelClass && labelClass)}
      htmlFor={`id-${name}`}>
      <span className="span">{placeholder}</span>
      <input
        className={cx(
          'input',
          !!inputClass && inputClass,
          !!error && 'error'
        )}
        name={name}
        id={`id-${name}`}
        {...props}
      />
      {/* {!!error && <span className="errorText">{error}</span>} */}
    </label>
  );
}

export default SelectInput;