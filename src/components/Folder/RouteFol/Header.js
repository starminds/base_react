import { Link } from "react-router-dom";
import styled from "styled-components";

const Con = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: white;
  opacity: 0.8;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
`;

const Ul = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    font-size: 30px;
    font-weight: 500;
    list-style: none;
  }
`;

export const Header = () => {
  return (
    <Con>
      <Title>
        <Link to="/">로고</Link>
      </Title>
      <Ul>
        <li>
          <Link to="/section">1번</Link>
        </li>
        <li>
          <Link to="/product">2번</Link>
        </li>
      </Ul>
    </Con>
  );
};
