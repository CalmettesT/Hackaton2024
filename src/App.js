import React, { useRef, useLayoutEffect, useEffect } from "react";
import Navbar from "./components/NavbarBlurred";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default function App() {
  return <RouterProvider router={router} />;
}
