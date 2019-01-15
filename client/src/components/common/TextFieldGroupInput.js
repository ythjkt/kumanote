import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classnames('form', { 'is-invalid': error })}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small>{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup
