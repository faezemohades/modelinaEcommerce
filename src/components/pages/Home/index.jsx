import React from "react";
 import Carousel from "../../Carousel/index";
import Featured from "./Featured";
import Modelina from "./Modelina";
import Products from "./Products";
function Home() {
  return (
    <>
      <Carousel />
      <Modelina/>
      <Products/>
      <Featured/>
    </>
  );
}

export default Home;
