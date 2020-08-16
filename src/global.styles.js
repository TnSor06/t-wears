import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 60px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media screen and (max-width:800px){
    padding:10px;
  }
}

a {
  text-decoration: none;
  color: black;
}
a:focus {
  outline: none;
}
a::-moz-focus-inner {
  border: 0;
}

* {
  box-sizing: border-box;
}

`;
