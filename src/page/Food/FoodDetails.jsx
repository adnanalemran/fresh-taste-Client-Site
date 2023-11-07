import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
const FoodDetails = () => {
  const [food, setFood] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://b8a11-server-side-adnanalemran.vercel.app/food/${id}`)
        .then((response) => response.json())
        .then((data) => setFood(data))
        .catch((error) =>
          console.error("Error fetching product data: ", error)
        );
    }
  }, [id]);

  return (
    <div className="my-32">
      <Helmet>
        <title>FreshTaste || Food details page</title>
      </Helmet>
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure className="w-full md:w-1/3 p-8">
          <img className=" rounded-xl mx-auto" src={food?.image} alt="Album" />
        </figure>
        <div className="card-body w-full lg:w-2/3">
          <h2 className="card-title text-4xl py-4">{food?.name}</h2>
          <p>● Category: {food?.Category}</p>
          <p>● Quantity: {food?.Quantity}</p>
          <p>● Price: {food?.price}</p>
          <p>● Made By (Who added the food): {food?.chiefNames}</p>
          <p>● Food Origin (Country) : {food?.foodOrigin}</p>
          <p>● Description of food : {food?.shortDescription}</p>

          <div className="card-actions justify-end">
            <Link to={`/food/order/${food?._id}`}>
              <button className="btn btn-warning">Order Now </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
