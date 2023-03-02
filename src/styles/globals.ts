import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Montserrat', sans-serif;
    background-color: #ffff;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
`

export default GlobalStyle