import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ViewDetails from "../pages/ViewDetails/ViewDetails";


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
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
    ]
  },
]);

export default router;