import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.div`
  width: 40%;
  height: 500px;
  background: url(https://i.ytimg.com/vi/W1SSgpSryzw/maxresdefault.jpg)
    no-repeat center/cover;
`;
const Title = styled.div`
  width: 50%;
  h3 {
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Section = () => {
  return (
    <Wrap>
      <Img></Img>
      <Title>
        <h3>
          눈물이눈물이 난다 이 길을 걸으면 그 사람 손길이 자꾸 생각이 난다
          붙잡지 못하고 가슴만 떨었지 내 아름답던 사람아 사랑이란 게 참 쓰린
          거더라 잡으려 할수록 더 멀어지더라 이별이란 게 참 쉬운 거더라 내 잊지
          못할 사람아 사랑아 왜 도망가 수줍은 아이처럼 행여 놓아버릴까 봐 꼭
          움켜쥐지만 그리움이 쫓아 사랑은 늘 도망가 잠시 쉬어가면 좋을 텐데
          바람이 분다 옷깃을 세워도 차가운 이별의 눈물이 차올라 잊지 못해서
          가슴에 사무친 내 소중했던 사람아 사랑아 왜 도망가 수줍은 아이처럼 행여
          놓아버릴까 봐 꼭 움켜쥐지만 그리움이 쫓아 사랑은 늘 도망가 잠시
          쉬어가면 좋을 텐데 기다림도 애태움도 다 버려야 하는데 무얼 찾아 이
          길을 서성일까 무얼 찾아 여기 있나 사랑아 왜 도망가 수줍은 아이처럼
          행여 놓아버릴까 봐 꼭 움켜쥐지만 그리움이 쫓아 사랑은 늘 도망가 잠시
          쉬어가면 좋을 텐데 잠시 쉬어가면 좋을 텐데
        </h3>
      </Title>
    </Wrap>
  );
};
