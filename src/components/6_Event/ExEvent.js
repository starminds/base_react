import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgcolor};
`;

export const ExEvent = () => {
  const [color, setColor] = useState("gold");
  const handleColor = () => {
    setColor("red");
  };

  return <Box bgcolor={color} onClick={handleColor} />;
};
