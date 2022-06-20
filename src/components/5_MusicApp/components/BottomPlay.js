import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBottomPlay = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f1f1f1;
  margin-top: 25px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;
const ProFile = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 12px;
  font-weight: 700;
`;
const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
`;
const NextBtn = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
  font-size: 15px;
`;

export const BottomPlay = () => {
  return (
    <SBottomPlay>
      <ProFile>
        <Avatar />
        <h3>PNcoding</h3>
      </ProFile>
      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SBottomPlay>
  );
};
