import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyAdded = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/filtered-added-foods?email=${email}`)
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
            <img src={item?.image} alt={item?.name} />
            <p>Name: {item?.name}</p>
            <p>Category: {item?.Category}</p>
            <p>Quantity: {item?.Quantity}</p>
            <p>Price: {item?.price}</p>
            <p>Description: {item?.shortDescription}</p>
            <p>Added By: {item?.AddedBy}</p>
            <p>Chief Names: {item?.chiefNames}</p>
            <p>Food Origin: {item?.foodOrigin}</p>
            <p>Order Count: {item?.orderCount}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

 

export default MyAdded;
