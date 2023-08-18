import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import ScrollToTop from "../ScrollToTop";
import { DashBoard } from "../Component/DashBoard/DashBord";

const Router: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashbord" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default Router;
