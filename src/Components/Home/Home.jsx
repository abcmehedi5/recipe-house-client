import React from "react";
import Slider from "../Header/Slider/Slider";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import About from "../About/About";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <About></About>
      <Chef></Chef>
      <Subscribe></Subscribe>
      
    </div>
  );
};

export default Home;
