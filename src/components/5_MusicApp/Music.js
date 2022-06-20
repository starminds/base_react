// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-chevron-down } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;
const Box = styled.div`
  width: 375px;
  height: 667px;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 45%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ic = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-radius: 45%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: white;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid;
  border-radius: 45px;
  background-image: url(https://cdn.topstarnews.net/news/photo/202202/14669162_758063_1635.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Title = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const H = styled.div`
  font-size: 26px;
  font-weight: 900;
  margin: 20px;
`;

const P = styled.div`
  font-weight: 100;
`;
const Scroll = styled.div`
  width: 100%;
  height: 5px;
  border: 3px solid lightgray;
  border-radius: 45px;
`;
const T = styled.div`
  width: 10%;
  height: 100%;
  background-color: salmon;
`;
const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h3 {
    font-size: 15px;
    font-weight: 100;
  }
`;
const Start = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 20px;
    color: white;
  }
  .play {
    font-size: 40px;
    color: salmon;
  }
  margin-bottom: 20px;
`;
const End = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid white;
  background-color: white;
  border-radius: 45px;
  /* display: flex;
  justify-content: ; */
`;

const Img = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid;
  border-radius: 45px;
  background-image: url(https://cdn.topstarnews.net/news/photo/202202/14669162_758063_1635.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Music = () => {
  return (
    <Wrap>
      <Box>
        <Header>
          <Icon>
            <i class="fa-solid fa-angle-down"></i>
          </Icon>
          <Ic>
            <i class="fa-solid fa-bars"></i>
          </Ic>
        </Header>
        <Bg />
        <Title>
          <H>사랑은 늘 도망가</H>
          <P>임영웅</P>
        </Title>
        <Scroll>
          <T></T>
        </Scroll>
        <Time>
          <h3>00:03</h3>
          <h3>03:40</h3>
        </Time>
        <Start>
          <i className="fa-solid fa-backward"></i>
          <i className="fa-solid fa-shuffle"></i>
          <i className="fa-solid fa-circle-pause play"></i>
          <i className="fa-solid fa-forward"></i>
          <i className="fa-solid fa-retweet"></i>
        </Start>
        <End>
          <Img></Img>
          <h3>patiname</h3>
          <i class="fa-solid fa-forward-step"></i>
        </End>
      </Box>
    </Wrap>
  );
};
