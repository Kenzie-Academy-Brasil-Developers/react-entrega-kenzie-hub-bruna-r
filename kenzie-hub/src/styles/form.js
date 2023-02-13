import { createGlobalStyle } from "styled-components";

export const FormStyle = createGlobalStyle`
form{
    width:90%;
    max-width: 370px;
    margin: 22px auto;
    padding:22px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    label{
        font-size: 12px;
        font-weight: 400;
    }

    input, select, button, a{
        background-color: var(--color-grey-2);
        height: 48px;
        width:100%;
        text-indent: 16px;
        color: var(--color-grey-1);
        border-radius:4px;
    }
    a{
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        line-height:48px;
    }

    fieldset{
        width:100%;
        display:flex;
        flex-direction: column;
        gap:20px;
    }

    button{
        background-color:var(--color-primary);
        color: var(--color-grey-0);
        text-indent:0;
        text-align: center;
        font-weight: 700;
    }

    h2{
        font-size: 18px;
        font-weight: 700;
    }

    p{
        font-size:12px;
    }
}
`;
