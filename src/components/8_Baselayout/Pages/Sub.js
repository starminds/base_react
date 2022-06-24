import styled from "styled-components";
import { PageTitle } from "../Component/PageTitle";

const Section = styled.section`
  padding: 200px 400px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 400px;
  height: 500px;
  background-color: lightgrey;
`;

const TextWrap = styled.div`
  max-width: 500px;
`;

const Title = styled.h3`
  margin-top: 100px;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const Sub = ({ cons }) => {
  return (
    <Section>
      <PageTitle text={"Sub 페이지 입니다"} />
      <Bg></Bg>
      <TextWrap>
        <Title>{cons.title}</Title>
        <Desc>{cons.desc}</Desc>
      </TextWrap>
    </Section>
  );
};
