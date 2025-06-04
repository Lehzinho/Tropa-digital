// routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";

export const authRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
