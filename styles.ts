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
    text: 'rgba(190, 189, 189, 1)',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'montserrat', sans-serif;

        .container {
            max-width: 1200px;
            margin: 0 auto;

            @media (max-width: ${breakpoints.tablet}) {
                max-width: 90%;
                }
        }
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 130px; // Adjust based on header height
    }

    body {
        background-color: ${colors.background};
    }
`