import { Fragment } from "react";
import TagRule from "./components/1_JssRule/TagRuls";
import ClassComponent from "./components/2_component/ClassComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/Subject";
import { kakaodb, Subjectdb, wapdb } from "./db";
// import FnComponent from "./components/2_component/FnComponent";
import { TodayMenudb } from "./db";
// import { TodayMenu } from "./components/3_props/TodayMenu";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { KakaoEx } from "./components/4_map/KakaoEx";
import { Content } from "./components/4_map/Content";
import { GlobalStyled } from "./styles/GlobalStyled";
import { Wap } from "./components/4_map/Wap";

const App = () => {
  return (
    <div>
      <GlobalStyled />
      {/* <TagRule /> */}
      {/* 1일차 */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}

      {/* 2일차 */}

      {/* <Menus /> */}

      {/* <Subject sub={Subjectdb} /> */}

      {/* <TodayMenu menu={TodayMenudb} /> */}

      {/* 3일차 */}

      {/* <FoodMenu menus={TodayMenudb} /> */}

      {/* <KakaoEx kakaoData={kakaodb} /> */}

      <Wap wapData={wapdb} />
      {/* 4 일 차 */}
      {/* <Content /> */}
    </div>
  );
};

export default App;
