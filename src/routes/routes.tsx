// routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { Login } from "@/pages/login";
import { Home } from "@/pages/home";
import { DefaultLayout } from "@/layout";
import { Equipes } from "@/pages/equipes";
import { Eventos } from "@/pages/eventos";
import { Incricoes } from "@/pages/inscricoes";
import { Dados } from "@/pages/dados";

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
      { path: "/equipes", element: <Equipes /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/inscricoes", element: <Incricoes /> },
      { path: "/dados", element: <Dados /> },
    ],
  },
]);
