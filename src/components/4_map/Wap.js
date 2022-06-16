export const Wap = ({ wapData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "250px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {wapData.map((wap) => (
          <li
            key={wap.id}
            style={{
              width: "30%",
            }}
          >
            <img
              src={wap.imgurl}
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            ></img>
            <h1 style={{ fontSize: "30px" }}>{wap.tag}</h1>
            <p style={{ lineHeight: "25px" }}>{wap.menu}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
