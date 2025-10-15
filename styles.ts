import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
}

export const colors = {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f5f5f5',
    text: '#333',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    }
`