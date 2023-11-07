import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [food, setFood] = useState({});
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const displayName = user?.displayName || "Person";
  const email = user?.email;


  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Add to cart success",
    });
  };

  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error,
    });
  };

  const handleBuy = async () => {
    const updateStock = {
      orderCount: food?.orderCount + 1,
      Quantity: food?.Quantity - 1,
      name: food?.name,
      image: food?.image,
      Category: food?.Category,
      chiefNames: food?.chiefNames,
      foodOrigin: food?.foodOrigin,
      price: food?.price,
      shortDescription: food?.shortDescription,
    };

    console.log(updateStock);

    try {
      const response = await fetch(`http://localhost:5000/food/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateStock),
      });

      if (response.ok) {
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
             
           
            Swal.fire({
              title: "Your product has been successfully ordered",
           
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#239342",
              cancelButtonColor: "#FBC525",
              confirmButtonText: "i want more ",
              cancelButtonText:"see my order"

            }).then((result) => {
              if (result.isConfirmed) {
                navigate(location?.state ? location.state : "/all-food");
              }
              else{
                navigate(location?.state ? location.state : "/my-order-food-item");
              }
            });

















          })
          .catch((error) => {
            console.log(error);
            showErrorAlert(error.message);
          });
      } else {
        // Handle errors here
        const data = await response.json();
        console.log(data);
        showErrorAlert(data.error);
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(error.message);
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

  const isProductOwnedByUser = food?.AddedBy === email;

  return (
    <div className="my-16">
      <div className="flex flex-col max-w-lg p-6 space-y-4 divide-y mx-auto">
        <h2 className="text-3xl font-semibold">Order items</h2>
        <ul className="flex flex-col pt-4 space-y-2">
          <li className="flex items-start justify-between">
            <div className="text-xl">Item Name :</div>
            <div className="text-right">
              <span className="block text-xl">{food?.name}</span>
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
              <span className="block">{food?.Quantity}</span>
            </div>
          </li>
          <li className="flex items-start justify-between">
            <h3>orderCount:</h3>
            <div className="text-right">
              <span className="block">{food?.orderCount}</span>
            </div>
          </li>
        </ul>
        <div className="pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Buyer Email : </span>
            <span> {food?.email} </span>
          </div>
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

            <button
              onClick={handleBuy}
              type="button"
              className="w-full py-2 font-semibold border rounded dark-bg-violet-400 dark-text-gray-900 dark-border-violet-400"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
