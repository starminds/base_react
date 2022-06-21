import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/intro">인트로</Link>
      </li>
      <li>
        <Link to="/product">제품</Link>
      </li>
    </ul>
  );
};
