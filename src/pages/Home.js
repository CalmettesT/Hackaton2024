import React from "react";
import NavbarPhone from "../components/NavbarPhone";
import NavbarBlurred from "../components/NavbarBlurred";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <div>
    //   {/* Navbar for phone (small screens) */}
    //   <div className="block md:hidden">
    //     <NavbarPhone />
    //   </div>

    //   {/* Navbar for larger screens */}
    //   <div className="hidden md:block">
    //     <NavbarBlurred />
    //   </div>
    // </div>
    <nav>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

export default Home;
