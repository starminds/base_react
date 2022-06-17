import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled.div`
  i {
    color: red;
  }

  svg {
    color: blue;
  }
`;

export const Icons = () => {
  return (
    <Icon>
      <i class="fa-brands fa-youtube"></i>
      <FontAwesomeIcon icon={faPlay} />
      {/* <FontAwesomeIcon icon={} */}
    </Icon>
  );
};
