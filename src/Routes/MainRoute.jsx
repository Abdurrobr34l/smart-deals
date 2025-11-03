import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import ALLProducts from "../Components/ALLProducts/ALLProducts";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import CreateProduct from "../Components/CreateProduct/CreateProduct";
import MyBids from "../Components/MyBids/MyBids";
import MyProducts from "../Components/MyProducts/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/all-products",
        Component: ALLProducts
      },
       {
        path: "/my-products",
        Component: MyProducts
      },
       {
        path: "/my-bids",
        Component: MyBids
      },
       {
        path: "/create-product",
        Component: CreateProduct
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  }
])

export default router