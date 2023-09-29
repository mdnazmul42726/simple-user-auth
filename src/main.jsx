import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Resgistar from "./components/pages/Resgistar";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <Login /> },
      { path: "/signup", element: <Resgistar /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);