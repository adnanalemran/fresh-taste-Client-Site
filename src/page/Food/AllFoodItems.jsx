import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllFoodItems = () => {
  return (
    <div>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      AllFoodItems
    </div>
  );
};

export default AllFoodItems;
