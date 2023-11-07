import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

// Define a SkeletonLoader component
const SkeletonLoader = () => {
  return (
    <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10 bg-[#000000b9] rounded-xl m-4">
      <div className="text-2xl font-semibold text-center  animate-pulse">
        Loading...
      </div>
      <hr />
      <ul className="flex flex-col divide-y divide-gray-700">
        {Array(5)
          .fill()
          .map((_, index) => (
            <li
              key={index}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <div className="flex-shrink-0 w-36 h-36 bg-base-300 animate-pulse rounded-lg"></div>
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading bg-base-300 animate-pulse">
                        Loading...
                      </h3>
                      <p className="text-sm bg-base-300 animate-pulse">
                        Loading...
                      </p>
                      <p className="text-lg font-semibold bg-base-300 animate-pulse">
                        Loading...
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold bg-base-300 animate-pulse">
                        Loading...
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x justify-end py-3">
                    <button className="flex items-center px-2 py-1 pl-0 space-x-1 bg-base-300 animate-pulse">
                      <span>Loading...</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          You Added Total Items:
          <span className="font-semibold p-8 bg-gray-300 animate-pulse">
            Loading...
          </span>
        </p>
      </div>
    </div>
  );
};

const MyAdded = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios
      .get(`http://localhost:5000/filtered-added-foods?email=${email}`,{withCredentials:true})
      .then((response) => {
        setFood(response.data);
        setIsLoading(false);
      });
  }, [email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(_id);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/food/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Filter out the deleted product from the products list
              setFood((prevProducts) =>
                prevProducts.filter((product) => product._id !== _id)
              );
              Swal.fire("Deleted!", "Product has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting the product:", error);
            Swal.fire(
              "Error!",
              "Error deleting the product: " + error.message,
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader />
      ) : food.length === 0 ? (
        <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10 bg-[#000000b9] rounded-xl m-4">
          <h2 className="text-2xl font-semibold text-center">
            You have not added any food
          </h2>
        </div>
      ) : (
        <div className="flex flex-col max-w-6xl p-6 space-y-4 sm:p-10 bg-[#000000b9] rounded-xl m-4">
          <h2 className="text-2xl font-semibold text-center">
            My Added Product List
          </h2>
          <hr />
          <ul className="flex flex-col divide-y divide-gray-700">
            {food.map((item) => (
              <li
                key={item._id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex  w-full space-x-2 sm:space-x-4">
                  <div className="w-1/4 justify-center items-center align-middle">
                    <img
                      className="flex-shrink-0  rounded-xl  dark:border-transparent  outline-none  "
                      src={item?.image}
                      alt={item?.name}
                    />
                    <Link to={`/food/${item?._id}`}>
                      <div className="flex text-sm divide-x justify-center py-3">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                          <span className="text-blue-500 text-center">
                            Details
                          </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading sm:pr-8">
                          {item?.name}
                        </h3>
                        <p className="text-sm dark:text-gray-400">
                          {item?.Category}
                        </p>
                        <p className="text-lg font-semibold">
                          {item?.foodOrigin}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          Price {item?.price}
                        </p>
                      </div>
                    </div>
                    <Link to={`/food/update/${item?._id}`}>
                      <div className="flex text-sm divide-x justify-end">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                          <span className="text-yellow-400">Update</span>
                        </button>
                      </div>
                    </Link>

                    <div className="flex text-sm divide-x justify-end">
                      <button
                        onClick={() => handleDelete(item?._id)}
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span className="text-red-400">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-right">
            <p>
              You Added Total Items:
              <span className="font-semibold p-8">{food?.length}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAdded;
