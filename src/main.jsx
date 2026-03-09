import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Componenets/Root/Root.jsx";
import Navbar from "./Componenets/Navbar/Navbar.jsx";
import Home from "./Componenets/NavLinks/Home.jsx";
import Add from "./Componenets/NavLinks/Add.jsx";
import About from "./Componenets/NavLinks/About.jsx";
import Fire from "./Componenets/NavLinks/Fire.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "add", Component: Add },
      { path: "fire", Component: Fire },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
