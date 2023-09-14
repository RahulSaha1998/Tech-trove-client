import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/addproduct',
          element: <AddProduct></AddProduct>
        },
      ]
    },
  ]);

export default router;