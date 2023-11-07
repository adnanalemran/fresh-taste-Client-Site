import React from "react";
import Slider from "./Slider/Slider";
import "./styles.css";
import TopFood from "../Food/TopFood";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonial/Testimonial";
 
const Home = () => {
  return (
    <div className="  ">
       <Slider/>
       <TopFood/>
       <Hero/>
       <Testimonial/>
    </div>
  );
};

export default Home;
