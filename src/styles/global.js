import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after {
  box-sizing: inherit;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -.5px;
}

a, input, button, textarea {
    outline: none;
    font-family: inherit;
    text-decoration: none;
}

a {
  cursor: pointer;
}

html {
  box-sizing: border-box;
  font-size: 80%;
  --color-primary: ${props => props.theme.colors.primary}
  --color-primary-light: ${props => props.theme.colors.primaryLight}
  --color-primary-dark: ${props => props.theme.colors.primaryDark}
  --color-white: ${props => props.theme.colors.white}
  --color-text-color: ${props => props.theme.colors.textColor}
  --color-greyish-dark: ${props => props.theme.colors.greyishDark}
  --color-greyish-light: ${props => props.theme.colors.greyishLight}
  --color-error-color: ${props => props.theme.colors.errorColor}
  --color-success-color: ${props => props.theme.colors.successColor}

  @media ${props => props.theme.mediaQueries.sm} {
    font-size: 100%;
    }
}
`;
