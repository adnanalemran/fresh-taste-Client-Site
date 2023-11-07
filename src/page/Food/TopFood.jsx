import React, { useEffect, useState } from "react";

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
  <div>
      <h2 className="text-4xl font-bold text-center py-4">Our Top FOOD</h2>
      <hr className="border-spacing-2 border-yellow-600 w-1/2 mx-auto" />
      <div className="grid grid-cols-2 gap-4">
        {topFoodData.map((food) => (
          <div key={food._id} className="border p-4">
            <h3 className="text-xl font-bold">{food.name}</h3>
            <p>Order Count: {food.orderCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFood;
