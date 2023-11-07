import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../page/Blog/Blog";
import Page404 from "../page/Error/Page404";
import AddFood from "../page/Food/AddFood";
import AllFoodItems from "../page/Food/AllFoodItems";
import FoodDetails from "../page/Food/FoodDetails";
import OrderPage from "../page/Food/OrderPage";
import UpdateFood from "../page/Food/UpdateFood";
import Home from "../page/Home/Home";
import MyAdded from "../page/Profile/MyAdded";
import MyOrderFood from "../page/Profile/MyOrderFood";
import Profile from "../page/Profile/Profile";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-food",
        element: <AllFoodItems />,
        loader: () => fetch("https://b8a11-server-side-adnanalemran.vercel.app/foodCount"),
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
        path: "/blog",
        element: <Blog/>,
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
      {
        path: "/food/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://b8a11-server-side-adnanalemran.vercel.app/food/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch food data for updating");
          }
          const data = await response.json();
          return data;
        },
      },
    ],
  },
]);

export default router;
