import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) fixed no-repeat 72% top;
    background-size: 520px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 1180px;
    margin: 0 auto;
    padding: 20px 20px;
  }
`;
