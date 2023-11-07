import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
  const [topFoodData, setTopFoodData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to the backend API
    fetch("http://localhost:5000/food/top6")
      .then((response) => response.json())
      .then((data) => setTopFoodData(data))
      .catch((error) => console.error("Error fetching top food data:", error));
  }, []);
  return (
    <div className="md:pb-12 lg:pb-32">
      <h2 className="text-4xl font-bold text-center py-4">Our Top FOOD</h2>
      <hr className="border-spacing-2 border-yellow-600 w-1/2 mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {topFoodData.map((food) => (
          <div
            data-aos="fade-down"
            key={food?._id}
            className="card w-full bg-[#0000005d] rounded-lg shadow-xl  "
          >
            <h2 className="text-xl font-semibold text-center pt-4   "></h2>
            <figure className="m-4">
              <div className="h-44 w-[500px] rounded-xl bg-base-300  ">
                <img
                  className="h-44 rounded-xl mx-auto"
                  src={food?.image}
                  alt={food?.name}
                />
              </div>
            </figure>
            <h2 className="text-xl font-semibold text-center pt-4">
              {food?.name}
            </h2>
            <div className="card-body p-4">
              <p>
                Order count: {food?.orderCount} <br />
                Category: {food?.Category} <br />
              </p>
              <p className="text-lg font-bold">BDT: {food?.price} Tk</p>
              <div className="card-actions flex justify-end grid-cols-3">
                <Link to={`/food/${food?._id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFood;
