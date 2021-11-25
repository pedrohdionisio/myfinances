import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.primary.background};
  }

  button, input {
    outline: none;
  }

  button {
    cursor: pointer;
  }
`
