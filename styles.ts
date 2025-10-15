import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
}

export const colors = {
    primary: '#19222c',
    secondary: '#C8A04F',
    background: '#f5f5f5',
    title: "#ffffff",
    text: '#777777ff',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: roboto, sans-serif;

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    }
`