import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllProducts from "../pages/AllProducts/AllProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import MyCart from "../pages/MyCart/MyCart";
import Checkout from "../pages/Checkout/Checkout";


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
      {
        path: '/allproducts',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>
      },
      {
        path: "/cart/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/cartProducts/${params.id}`)
      },
    ]
  },
]);

export default router;