import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --size: 1;
    --background: #000;
    --ticket-color-1: #d25778;
    --ticket-color-2: #ec585c;
    --ticket-color-3: #e7d155;
    --ticket-color-4: #56a8c6;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    font-size: 14px;
  }
  
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased !important;
    overflow-x: hidden;
    font-family: Arial;
  }
  
  button {
    cursor: pointer;
  }
`;
