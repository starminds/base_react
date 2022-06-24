import { Link } from "react-router-dom";

import styled from "styled-components";
import { PageTitle } from "../Component/PageTitle";

const Banner = styled.section`
  height: 800px;
  background: url(https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png)
    no-repeat center/cover;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 110px 400px;
`;

const Content = styled.div`
  width: 45%;
  height: 500px;
  background-color: lightgray;
  box-shadow: 25px 25px 30px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  margin: 10px;
  &:hover {
    transform: translate(25px, 25px);
    box-shadow: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <div>
      <PageTitle text={"Home"} />
      <Banner></Banner>

      <Section>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
        <Content>
          <Link to="/sub2"></Link>
        </Content>
        <Content>
          <Link to="/sub3"></Link>
        </Content>
      </Section>
    </div>
  );
};
