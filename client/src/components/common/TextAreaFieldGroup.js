import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div>
      <textarea
        type="ara"
        name={name}
        placeholder={placeholder}
        className={classnames('form', { 'is-invalid': error })}
        value={value}
        onChange={onChange}
      />
      {info && <small>{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

TextAreaFieldGroup.defaultProps = {
  type: 'text'
}

export default TextAreaFieldGroup
