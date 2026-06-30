import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home/Home.jsx";
import { Detalles } from "./pages/Detalles/Detalles.jsx";
import "./i18n.js";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from './pages/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detalles/:id",
    element: <Detalles />,
  },
  {
    path: "/sobrenosotros",
    element: <SobreNosotros />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "*", element: <NotFound /> }, // ruta 404
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
