import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllFoodItems = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((response) => response.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Error fetching foodItem data: ", error));
  }, []);

  return (
    <div className="py-16">
      <p className="text-center py-4"> All Food Items: {food.length}</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {food.map((foodItem) => (
          <div
            key={foodItem?._id}
            className="card  bg-[#0000005d] rounded-lg shadow-xl"
          >
            <h2 className=" text-xl font-semibold  text-center  pt-4">
              {foodItem?.name}
            </h2>
            <figure className="m-4 ">
              <img
                className=" h-44 rounded-xl "
                src={foodItem?.image}
                alt={foodItem?.name}
              />
            </figure>
            <div className="card-body p-4 ">
              <p>
                Category: {foodItem?.Category} <br />
                Quantity: {foodItem?.Quantity} <br />
              </p>
              <p className="text-lg font-bold ">BDT: {foodItem?.price} Tk</p>
              <div className="card-actions flex justify-end grid-cols-3">
                <Link to={`/food/${foodItem?._id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

export default AllFoodItems;
