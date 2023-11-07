import React from "react";
import Slider from "./Slider/Slider";
import "./styles.css";
import TopFood from "../Food/TopFood";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonial/Testimonial";
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <div className="  ">
      <Helmet>
        <title>FreshTaste || Home page</title>
      </Helmet>
       <Slider/>
       <TopFood/>
       <Hero/>
       <Testimonial/>
    </div>
  );
};

export default Home;
