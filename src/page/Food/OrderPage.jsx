import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const OrderPage = () => {
  const [food, setFood] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const displayName = user?.displayName || "Person";
  const email = user?.email;
  const [showAlert, setShowAlert] = useState(false);
  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Add cart success",
    });
  };

  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
  };

  const handleBuy = () => {
    if (food?.AddedBy === email) {
      setShowAlert(true);  
    } else {
      const buyItem = {
        food: food,
        email: email,
      };

      fetch("http://localhost:5000/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buyItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          showSuccessAlert();
        })
        .catch((error) => {
          console.log(error);
          showErrorAlert(error.message);
        });
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/food/${id}`)
        .then((response) => response.json())
        .then((data) => setFood(data))
        .catch((error) =>
          console.error("Error fetching product data: ", error)
        );
    }
  }, [id]);

  // Check if food.AddedBy is the same as the user's email
  const isProductOwnedByUser = food?.AddedBy === email;

  return (
    <div className="my-16">

      <div className="flex flex-col max-w-lg p-6 space-y-4 divide-y mx-auto">
        <h2 className="text-3xl font-semibold">Order items</h2>
        <ul className="flex flex-col pt-4 space-y-2">
          <li className="flex items-start justify-between">
            <div className="text-xl">Item Name :</div>
            <div className="text-right">
              <span className="block text-x">{food?.name}</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>Item price:</h3>
            <div className="text-right">
              <span className="block">${food?.price}</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>Active Quantity:</h3>
            <div className="text-right">
              <span className="block">1</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>Quantity:</h3>
            <div className="text-right">
              <span className="block">{food?.Quantity}</span>
            </div>
          </li>
        </ul>
        <div className="pt-4 space-y-2">
          <div>
            <div className="flex justify-between">
              <span>Buyer name : </span>
              <span> {displayName}</span>
            </div>
            <div className="flex justify-between">
              <span>Buyer Email : </span>
              <span> {email} </span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Buying Date: </span>
            <span>{currentDate}</span>
          </div>
        </div>
        <div className="pt-4 space-y-2">
          <div className="space-y-6">
            <div className="flex justify-between">
              <span>Payable</span>
              <span className="font-semibold">${food?.price}</span>
            </div>
            {showAlert && (
              <div className="text-red-600">
                You cannot buy this product. It's your own product.
              </div>
            )}
            {isProductOwnedByUser ? (
              <button
                type="button"
                className="w-full py-2 font-semibold border rounded text-red-400"
                disabled
              >
                You Add this product, <br />
                that's why you can't purchase the product
              </button>
            ) : (
              <button
                onClick={handleBuy}
                type="button"
                className="w-full py-2 font-semibold border rounded dark-bg-violet-400 dark-text-gray-900 dark-border-violet-400"
              >
                Purchase
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
