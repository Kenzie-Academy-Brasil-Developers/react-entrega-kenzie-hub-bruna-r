import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-Style: none;
    text-decoration: none;
    border: none;
    outline:none
}
:root{
    --color-primary:#FF577F;
    --color-primary-Focus:#FF427F;
    --color-primary-Negative: #59323F;
    --color-grey-4:#121214;
    --color-grey-3:#212529;
    --color-grey-2:#343B41;
    --color-grey-1:#868E96;
    --color-grey-0: #F8F9FA;
    --color-negative:#E83F5B;
    --color-sucess:#3FE864;
}

body{
    min-width: 320px;
    font-family: 'Inter', sans-serif;
    background-color: var(--color-grey-4);
    color: var(--color-grey-0);
}

.Title{
    font-weight: 700;
    line-height: 150%;
}
.Title.One{
    font-size: 18px;
}

.Title.Two{
    font-size: 12px;
}

.Text{
    font-weight: 400;
    line-height: 150%;
}

.Text.One{
    font-size: 12px;
}

`;
