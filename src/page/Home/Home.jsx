import React from "react";
import Slider from "./Slider/Slider";
import "./styles.css";
import TopFood from "../Food/TopFood";
 
const Home = () => {
  return (
    <div className="  ">
       <Slider/>
       <TopFood/>
    </div>
  );
};

export default Home;
