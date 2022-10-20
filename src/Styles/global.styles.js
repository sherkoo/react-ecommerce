import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: arial;
  }

  img{
    margin: 0;
  }

  a{
    color: blue;
  }

  .container{
    max-width: 1300px;
    margin: 0 auto;
  }
`;
