import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;    
    font-family: 'Noto Sans KR', sans-serif;
}
body{
    background-color: #ffffff;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;    
    cursor:pointer;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{    
  }
  ol, ul, li {
    list-style: none;
  }
  button{
    cursor:pointer;
  }  
  #custom-login-btn{    
    img{
      max-width:300px;
    }
  }  
  .container{    
    margin: 0;
    padding: 0;
    max-width: 480px;
    height: 100vh;
    margin: 0 auto;
  }

  @media all and (min-width:667px){
    .container{            
      max-width: 100%;            
    }
  }
`;