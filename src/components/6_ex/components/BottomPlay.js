import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBottomPlay = styled.div``;
const ProFile = styled.div``;
const Avatar = styled.div``;
const NextBtn = styled.div``;

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
