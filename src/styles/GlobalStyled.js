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
`;
