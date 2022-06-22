import { Link } from "react-router-dom";
import styled from "styled-components";

const Bgimg = styled.div`
  width: 100%;
  height: 600px;
  background: url(https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png)
    no-repeat center/cover;
`;
const Chice = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const A = styled.div`
  width: 30%;
  height: 400px;
`;

const Img = styled.div`
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPqnLUQOg-qwAjcFSxBnldb5wbfyK7Tz8rA&usqp=CAU)
    no-repeat center/cover;
  border: 1px solid;
  border-radius: 25px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.3);
  h3 {
  }
`;
const Page = styled.div`
  width: 30%;
  height: 400px;
  background: url(https://cdn.notefolio.net/img/f9/a0/f9a0b9236ab8994f2f66a571f43316712075f61c03402844f22df3507276a303_v1.jpg)
    no-repeat center/cover;
  border: 1px solid;
  border-radius: 25px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.3);
  h3 {
  }
`;

export const Home = () => {
  return (
    <div>
      <Bgimg></Bgimg>
      <Chice>
        <Link className="A" to="/section">
          <Img>
            <h3>노래를 선택하세요</h3>
          </Img>
        </Link>
        <Link className="A" to="/product">
          <Page>
            <h3>노래를 선택하세요</h3>
          </Page>
        </Link>
      </Chice>
    </div>
  );
};
