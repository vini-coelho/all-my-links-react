import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto';
  }
  html {
    background: var(--background);
  }
  :root {
    /* --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --theme: #33A1F2;
    --theme-dark-hover: #011017;
    --theme-light-hover: #2C8ED6; */
    
    --background:#282a36;
    --current-line: #44475a;
    --foreground:#f8f8f2;
    --comment:#6272a4;
    --cyan:#8be9fd;
    --green:#50fa7b;
    --orange:#ffb86c;
    --pink:#ff79c6;
    --purple:#bd93f9;
    --red:#ff5555;
    --yellow:#f1fa8c;
  }
`;
