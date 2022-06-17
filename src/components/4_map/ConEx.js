import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const Conwrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  a {
    color: white;
  }
`;

const Bg = styled.div`
  height: 350px;
  background-color: lightgray;
`;

const TitleWrap = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 900;
  margin: 20px;
`;

const Desc = styled.p`
  font-weight: 100;
  margin-left: 20px;
`;

export const ConEx = ({ conData }) => {
  return (
    <Wrap>
      <Conwrap>
        {conData.map((con) => (
          <Con key={con.id}>
            <a href={con.url}>
              <Bg
                style={{
                  background: `url(${con.imgurl}) no-reapeat center / cover`,
                }}
              />
              <TitleWrap>
                <Title>{con.Title}</Title>
                <Desc>{con.Desc}</Desc>
              </TitleWrap>
            </a>
          </Con>
        ))}
      </Conwrap>
    </Wrap>
  );
};

// *background 축약
// =>background: url() no-repeat 위치 / 크기
