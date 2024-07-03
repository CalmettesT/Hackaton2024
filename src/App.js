import React, { useRef, useLayoutEffect, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SingIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import MdpOublie from "./pages/MdpOublie";
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
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <SingIn />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/resetmdp",
    element: <MdpOublie />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default function App() {
  return <RouterProvider router={router} />;
}
