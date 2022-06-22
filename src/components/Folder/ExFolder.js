import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./RouteFol/Header";
import { Home } from "./RouteFol/Home";
import { Section } from "./RouteFol/Section";
import { Product } from "./RouteFol/Product";

export const ExFolder = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mainpage" element={<MainPage />} /> */}
        <Route path="/section" element={<Section />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      {/* <MainPage />
      <ChoicePage /> */}
    </Router>
  );
};
