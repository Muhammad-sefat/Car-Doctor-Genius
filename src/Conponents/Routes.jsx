import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Pages/Home";
import ErrorPage from "./ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductDetails from "./Pages/ProductDetails";
import ConfirmOrder from "./Pages/ConfirmOrder";
import PrivateRoute from "./Pages/PrivateRoute";
import MyBooking from "./Pages/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/confirmOrder",
        element: (
          <PrivateRoute>
            <ConfirmOrder></ConfirmOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/mybooking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
