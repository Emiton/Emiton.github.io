import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
}

html, body, #root{
height: 100%;
background-color: hsl(60,100%,95%);
--select-color: hsl(20, 46%, 52%);
}

body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

ul {
list-style-type:none;
}

a {
  text-decoration: none;
  color: black;
}

a:visited {
  color: hsl(213, 30%, 32%);
}

a:hover {
  color: hsl(5, 40%, 40%);
  font-weight: 900;
}

::selection {
  background: var(--select-color);
}

::-moz-selection {
  background: var(--select-color);
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`;

export default GlobalStyle;