import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./styles.css";
// Define a SkeletonLoader component
const SkeletonLoader = () => {
  return (
    <div className=" md:w-[768px] lg:w-[1280px]  mx-auto  ">
      <div className=" mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="card w-full bg-[#0000005d] rounded-lg shadow-xl animate-pulse"
            >
              <h2 className="text-xl font-semibold text-center pt-4  animate-pulse"></h2>
              <figure className="m-4">
                <div className="h-44 w-[500px] rounded-xl bg-base-300 animate-pulse"></div>
              </figure>
              <div className="card-body p-4">
                <p>
                  Category: Loading... <br />
                  Quantity: Loading... <br />
                </p>
                <p className="text-lg font-bold">BDT: Loading... Tk</p>
                <div className="card-actions flex justify-end grid-cols-3">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800 bg-gray-300 animate-pulse">
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const AllFoodItems = () => {
  const [food, setFood] = useState([]);
  const { count } = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const numberOfPages = parseInt(Math.ceil(count / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(0); // Define currentPage here

  useEffect(() => {
    fetch(`http://localhost:5000/food?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [currentPage]);

  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div className="py-16  md:w-[768px] lg:w-[1280px]  mx-auto  ">
      <p className="text-center py-4 "> Our Total Items: {count}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {food.length === 0 ? (
          // Render the SkeletonLoader when data is being fetched
          <SkeletonLoader />
        ) : (
          food.map((foodItem) => (
            <div
              key={foodItem?._id}
              className="card w-full bg-[#0000005d] rounded-lg shadow-xl  "
            >
              <h2 className="text-xl font-semibold text-center pt-4   "></h2>
              <figure className="m-4">
                <div className="h-44 w-[500px] rounded-xl bg-base-300  ">
                  <img
                    className="h-44 rounded-xl mx-auto"
                    src={foodItem?.image}
                    alt={foodItem?.name}
                  />
                </div>
              </figure>
              <h2 className="text-xl font-semibold text-center pt-4">
                {foodItem?.name}
              </h2>
              <div className="card-body p-4">
                <p>
                  Category: {foodItem?.Category} <br />
                  Quantity: {foodItem?.Quantity} <br />
                </p>
                <p className="text-lg font-bold">BDT: {foodItem?.price} Tk</p>
                <div className="card-actions flex justify-end grid-cols-3">
                  <Link to={`/food/${foodItem?._id}`}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center space-x-1 pagination ">
        <button
          onClick={handlePrevPage}
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={pages}
            type="button"
            title="Page 1"
            className={currentPage === page ? "selected" : undefined}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AllFoodItems;
