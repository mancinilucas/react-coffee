import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Baloo 2', cursive;
    font-family: 'Roboto', sans-serif;

    list-style: none;
  }
  
  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['brown-900']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button{
    font-size: 1rem;
    font-weight: 400;
  }
`
