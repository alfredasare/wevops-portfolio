import {createGlobalStyle} from "styled-components";

import {normalize} from 'polished';
import {rustyRed} from "./colors";
import {primaryFont} from "./typography";


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
    
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    
    body {
        margin: 0;
        font-family: ${primaryFont};
    }
    *{
    font-weight: lighter;
    }
    *{
    font-weight: lighter;
    }
    
    a {
        text-decoration: none;
    }
    
    .nav-link-active {
        color: ${rustyRed};
    }
    
    .hide-overflow {
      overflow-y: hidden;
    }
    
    .owl-theme .owl-dots .owl-dot {
        outline-color: black;
    }
    
    .owl-theme .owl-dots {
        text-align: left;
    }
    
`;