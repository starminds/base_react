import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainStyled = {
  color: "salmon",
  fontSize: "26px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }


    body{
      font-family: 'Noto Sans KR', sans-serif;
    }
    /* body{
      background-color: #555;
    } */

    a{
      text-decoration: none;
    }
`;
