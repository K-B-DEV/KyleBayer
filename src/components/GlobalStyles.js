import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden !important;
        scroll-behavior: smooth;
        &::-webkit-scrollbar{
            width: 0.5rem !important;
            background-color: #0D0D0D !important;
            border: 1px solid white !important;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white !important;
        }
        text-shadow: 1px 1px black;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem !important;
            background-color: #0D0D0D !important;
            border: 1px solid white !important;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white !important;
        }
    }
    body{
        margin: 0;
        padding: 0;
        /* font-family: 'Montserrat', sans-serif; */
        background-color: #0D0D0D;
        
    }
    h1, h2{
        color: white;
        font-family: 'Tourney', cursive;
        font-size: 5rem;
    }
    h3, h4, i, span, p{
        color: white;
        font-family: 'Roboto Slab', serif;
    }
    
    a{
        text-decoration: none;

        &:focus,
        &:hover,
        &:visited,
        &:link,
        &:active {
            text-decoration: none;
            color: inherit;
        }
    }
`;

export default GlobalStyles;
