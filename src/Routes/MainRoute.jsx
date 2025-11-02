import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import ALLProducts from "../Components/ALLProducts/ALLProducts";
import Register from "../Components/Register/Register";

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
        path: "/register",
        Component: Register
      }
    ]
  }
])

export default router