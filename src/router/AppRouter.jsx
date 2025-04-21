import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ProtectedRoute from "@auth/ProtectedRoute";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Home from "@pages/Home";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

export default AppRouter;
