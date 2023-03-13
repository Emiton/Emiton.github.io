import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
}

html, body, #root{
height: 100%;
background-color: hsl(60,100%,95%);
}

body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

ul {
list-style-type:none;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`;

export default GlobalStyle;