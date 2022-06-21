import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./Routers/Header";
import { Home } from "./Routers/Home";
import { Intro } from "./Routers/Intro";
import { PageNotFound } from "./Routers/PageNotFound";
import { Product } from "./Routers/Product";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
