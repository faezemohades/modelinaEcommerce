import React from "react";
 import Carousel from "../../Carousel/index";
import ProductItems from "../../Products/ProductItems";
import Featured from "./Featured";
import Modelina from "./Modelina";
 function Home() {
  return (
    <>
      <Carousel />
      <Modelina/>
      <ProductItems/>
      <Featured/>
    </>
  );
}

export default Home;
