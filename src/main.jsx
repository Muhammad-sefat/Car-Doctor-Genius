import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Conponents/Routes.jsx";
import AuthProvider from "./Conponents/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
