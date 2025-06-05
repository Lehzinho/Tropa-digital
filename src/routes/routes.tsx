// routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { DefaultLayout } from "../layout";

export const authRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/equipes", element: <Home /> },
      { path: "/eventos", element: <Home /> },
      { path: "/inscricoes", element: <Home /> },
    ],
  },
]);
