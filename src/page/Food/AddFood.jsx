import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const initialFormData = {
    image: "",
    name: "",
    Category: "Appetizer",
    Quantity: "",
    price: "",
    shortDescription: "",
    email: email,  
    chiefNames: "",
    foodOrigin: "",
    orderCount: "0",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myData = {
      ...formData,
    };

    fetch("http://localhost:5000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your product has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData(initialFormData);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-11/12 mx-auto max-w-4xl p-8 space-y-3 rounded-xl m-5 bg-base-300">
      <div className="hero-overlay bg-opacity-20"></div>
      <h1 className="text-2xl font-bold text-center">Add a Food</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Food Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image URL</label>
          <input
            required
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700  focus:dark-border-violet-400"
          />
        </div>

        <div className="flex w-full gap-4">
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">Food Category</label>
            <select
              required
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              className=" w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            >
              <option value="Appetizer">Appetizer</option>
              <option value="Soups and Salads">Soups and Salads</option>
              <option value="Entrees/Main Courses">Entrees/Main Courses</option>
              <option value="Beverages">Beverages</option>
              <option value="Kids Menu">Kids Menu</option>
            </select>
          </div>

          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">
              Food Quantity(stock)
            </label>
            <input
              type="number"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            ></input>
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">Price</label>
            <input
              required
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">
              Food Added by (email)
            </label>
            <input
              required
              type="text"
              name="price"
              disabled
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">
              Food Origin (Country)
            </label>
            <input
              required
              type="text"
              name="foodOrigin"
              value={formData.foodOrigin}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">Chief name:</label>
            <input
              required
              type="text"
              name="chiefNames"
              value={formData.chiefNames}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">
            Short Description of Food
          </label>
          <textarea
            required
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>

        <button
          type="submit"
          className="block w-full p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddFood;
