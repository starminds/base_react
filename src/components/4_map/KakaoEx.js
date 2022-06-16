export const KakaoEx = ({ kakaoData }) => {
  console.log(kakaoData);
  return (
    <div>
      <h1>카카오</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        {kakaoData.map((kakao) => (
          <li
            key={kakao.id}
            style={{
              width: "30%",
            }}
          >
            {/* <div style={{
                width:100%,
                height:100%,
                backgroundImge: `url(${kakao.imgurl})`,
            }}></div> */}
            <img src={kakao.imgurl}></img>
            <h3>{kakao.tag}</h3>
            <p>{kakao.menu.slice(0, 50) + "..."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
