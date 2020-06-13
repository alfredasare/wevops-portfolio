import {createGlobalStyle} from "styled-components";
import {normalize} from 'polished';


export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-family: monospace;
    }
    
    a {
        text-decoration: none;
    }
    
    .active {
        color: black;
    }
    
    .hide-overflow {
      overflow-y: hidden;
    }
    
`;