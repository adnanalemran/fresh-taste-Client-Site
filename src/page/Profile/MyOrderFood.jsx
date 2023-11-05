import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyOrderFood = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/filtered-foods?email=${email}`)
      .then((response) => response.json())
      .then((data) => setFood(data))
      .catch((error) => console.error("Error fetching filtered data: ", error));
  }, [email]);

  console.log(food);

  return (
    <div>
      <h1>My Ordered Food</h1>
      <ul>
        {food.map((item) => (
          <li key={item._id}>
            <img src={item.food.image} alt={item.food.name} />
            <p>Name: {item.food.name}</p>
            <p>Category: {item.food.Category}</p>
            <p>Quantity: {item.food.Quantity}</p>
            <p>Price: {item.food.price}</p>
            <p>Description: {item.food.shortDescription}</p>
            <p>Added By: {item.food.AddedBy}</p>
            <p>Chief Names: {item.food.chiefNames}</p>
            <p>Food Origin: {item.food.foodOrigin}</p>
            <p>Order Count: {item.food.orderCount}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default MyOrderFood;
