import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    font-family: Montserrat, sans-serif;
  }
  
  button {
    cursor: pointer;
    position: relative;
    &:active{
      top: 1px;
      left: 1px;
    }
  }
  button, input {
    border: 0;
    outline: 0;
  }
`;