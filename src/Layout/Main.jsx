import React from "react";
import NavBar from "../page/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto overflow-hidden ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
