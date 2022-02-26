import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    background: ${props => props.theme.colors.bg};
    /* overflow: hidden; */
  }
  *, button, input{
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }


  ul{
    list-style: none;
  }


  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.scrollbar.thumb};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.scrollbar.track};
  }

`;
