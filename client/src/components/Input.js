import styled from 'styled-components'

const Input = styled.input`
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
export default Input
