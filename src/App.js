import React, { useRef, useLayoutEffect, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import MdpOublie from "./pages/MdpOublie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AchevementQuete from "./pages/AchevementQuete";

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
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/resetmdp",
    element: <MdpOublie />,
  },
  {
    path: "/quete",
    element: <AchevementQuete />,
  },
  {
    path: "/test",
    element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
