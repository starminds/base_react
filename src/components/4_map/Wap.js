import styled from "styled-components";
import { mainStyled } from "../../styles/GlobalStyled";

const Box = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.bgColor};
  font-size: ${mainStyled.fontSize};
`;

export const Wap = ({ wapData }) => {
  return (
    <div>
      <box></box>
    </div>
  );
};
