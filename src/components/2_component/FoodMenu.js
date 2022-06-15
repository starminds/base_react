import "../../styles/style.css";

export const FoodMenu = ({ menuName, sideMenu }) => {
  // console.log(menuName);
  // =>프록스는 오브젝트형태로 가져오기 때문에 매개변수에 중괄호를 적고 작성할것
  return (
    <div>
      오늘의 메뉴는 <i className="menu">{menuName}</i> 사이드 메뉴는{" "}
      <i className="side">{sideMenu}</i>
      {/* jsx안쪽에 변수를 사용할시 중괄호를 감싸줌 */}
    </div>
  );
};
