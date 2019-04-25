import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => (props.primary ? '#3850A2' : 'white')};
  color: ${props => (props.primary ? 'white' : props.theme.text.default)};
  border: ${props => (props.primary ? 'none' : '1px solid #dcdbdb')};
  display: inline-block;
  font-size: 16px;
  padding: 12px 20px;
  height: 40px;
  line-height: 1;
  text-decoration: none;
  align-items: center;
  border-radius: 2px;
  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;
`
