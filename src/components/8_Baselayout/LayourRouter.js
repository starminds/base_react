import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Component/Header";
import { Home } from "./Pages/Home";
import { Sub } from "./Pages/Sub";
import { NotFound } from "./Pages/NotFound";
import { contents, sub_1, sub_2, sub_3 } from "./contents";

export const LayourRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1" element={<Sub cons={sub_1} />} />
        <Route path="/sub2" element={<Sub cons={sub_2} />} />
        <Route path="/sub3" element={<Sub cons={sub_3} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
