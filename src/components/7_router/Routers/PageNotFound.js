import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h3>페이지를 찾을수 없습니다</h3>
      <span>
        <Link to="/">홈으로 가기</Link>
        {/* =>&rarr;(화살표 표시 )&larr(왼쪽 화살표표시) */}
      </span>
    </div>
  );
};
