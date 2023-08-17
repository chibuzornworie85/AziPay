import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import ScrollToTop from "../ScrollToTop";

const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};

export default Router;
