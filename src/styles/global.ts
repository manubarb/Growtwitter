import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  html {
    background-color: #EDEDED;
  }

  body {
    font-family: 'Poppins' , sans-serif;

  }
`
