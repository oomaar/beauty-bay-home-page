import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Caveat', cursive,  Helvetica, Arial, sans-serif;
        color: #000;
        background-color: #fff;
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        font-family: 'Oswald', sans-serif;
    }
`;