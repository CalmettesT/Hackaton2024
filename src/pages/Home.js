import React from 'react';
import NavbarPhone from '../components/NavbarPhone';
import NavbarBlurred from '../components/NavbarBlurred';

const Home = () => {
  return (
    <div>
      {/* Navbar for phone (small screens) */}
      <div className="block md:hidden">
        <NavbarPhone />
      </div>

      {/* Navbar for larger screens */}
      <div className="hidden md:block">
        <NavbarBlurred />
      </div>
    </div>
  );
};

export default Home;
