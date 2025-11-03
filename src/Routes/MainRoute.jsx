import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import ALLProducts from "../Components/ALLProducts/ALLProducts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import CreateProduct from "../Components/CreateProduct/CreateProduct";
import MyBids from "../Components/MyBids/MyBids";
import MyProducts from "../Components/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/all-products",
        element: <ALLProducts/>,
      },

      //* -------------PRIVATE ROUTES-------------------
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/create-product",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        ),
      },
      //* -------------PRIVATE ROUTES-------------------

      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

export default router;
