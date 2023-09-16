import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import AllProducts from "../pages/AllProducts/AllProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import MyCart from "../pages/MyCart/MyCart";
import Checkout from "../pages/Checkout/Checkout";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import NotFoundPage from "../components/NotFoundPage";


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
        loader: () => fetch('https://tech-trove-server-beta.vercel.app/products')
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`https://tech-trove-server-beta.vercel.app/products/${params.id}`)
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://tech-trove-server-beta.vercel.app/products/${params.id}`)
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>
      },
      {
        path: "/cart/orderHistory",
        element: <OrderHistory></OrderHistory>
      },
      {
        path: "/cart/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`https://tech-trove-server-beta.vercel.app/cartProducts/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  }
]);

export default router;