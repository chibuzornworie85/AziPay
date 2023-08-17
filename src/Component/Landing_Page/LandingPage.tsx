import { FC } from "react";
import "../../App.css"
import { Box } from "./Body/Box/Box";
import { Box2 } from "./Body/Box2/Box";
import { Box3 } from "./Body/Box3/Box3";
import { Box4 } from "./Body/Box4/Box";
import { Box5 } from "./Body/Box5/Box";
import { Footer } from "./Footer/Footer";

export const Landing: FC = () => {
  return (
    <>
      <Box />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Footer />
    </>
  );
};
