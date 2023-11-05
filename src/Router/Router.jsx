import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home";
import AddFood from "../page/Food/AddFood";
import AllFoodItems from "../page/Food/AllFoodItems";
import Page404 from "../page/Error/Page404";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../page/Food/FoodDetails";
import OrderPage from "../page/Food/OrderPage";
import MyOrderFood from "../page/Profile/MyOrderFood";
import MyAdded from "../page/Profile/MyAdded";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/all-food",
        element: <AllFoodItems />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/add-food-item",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/food/order/:id",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },

      {
        path: "/all-food",
        element: <AllFoodItems />,
      },
      {
        path: "my-order-food-item",
        element: (
          <PrivateRoute>
            <MyOrderFood />
          </PrivateRoute>
        ),
      },
      {
        path: "my-added-product",
        element: (
          <PrivateRoute>
            <MyAdded />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
