import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Label = styled.label`
  font-size: 16px;
  text-transform: capitalize;
`

const ErroMessage = styled.span`
  font-size: 12px;
  color: #e21838;
`

const Input = styled.input`
  width: ${props => (props.full ? '100%' : null)};
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  height: 40px;
  color: rgb(46, 49, 146);
  border: 1px solid #eaeaf4;
  border-radius: 2px;
  box-sizing: border-box;

  :focus {
    border: 1px solid rgb(46, 49, 146);
    outline: none;
  }
`

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
      <Label>{placeholder}</Label>
      <Input
        full
        type={type}
        name={name}
        className={classnames('form', { 'is-invalid': error })}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small>{info}</small>}
      {error && <ErroMessage className="invalid-feedback">{error}</ErroMessage>}
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
