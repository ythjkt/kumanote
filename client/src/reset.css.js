import { createGlobalStyle } from 'styled-components'
import theme from './const/theme'

export default createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.text.default};
    padding: 0;
    margin: 0;
    font-family: ${theme.font.primary};
  }

  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`
