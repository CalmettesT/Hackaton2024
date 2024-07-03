import React, { useRef, useLayoutEffect, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
// import SingIn from "./pages/SignIn";
// import SingUp from "./pages/SignUp";
import Home from "./pages/Home";
import MdpOublie from "./pages/MdpOublie";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import MdpOublie from "./pages/MdpOublie";

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
    path: "/test",
    element: <Home />,
  },
]);

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Navbar from "./components/NavbarBlurred";
import LigneQuete from './components/LigneQuete';
import AchevementQuete from './components/AchevementQuete';

export default function App() {
  return <RouterProvider router={router} />;

  return (
      <AchevementQuete />
  );
}

