import AppRouter from "./router/AppRouter";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { UserAuthContextProvider } from "./context/UserAuthContext";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <UserAuthContextProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <RouterProvider router={AppRouter} />
      </UserAuthContextProvider>
    </StrictMode>
  );
}
