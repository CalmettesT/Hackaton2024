import React from "react";
import QuestProgress from "../components/ProgressionQuete";
import NavbarPhone from "../components/NavbarPhone";
import NavbarBlurred from "../components/NavbarBlurred";
import HeaderPhone from "../components/PhoneHeader";

function Quetes() {
  return (
    <>
      <div className="block md:hidden mb-12 md:mb-0">
        <HeaderPhone title="Quetes" />
      </div>
      <div className="text-center">
        <main>
          <QuestProgress />
        </main>
      </div>

      {/* Navbar for larger screens */}
      <div className="hidden md:block">
        <NavbarBlurred />
      </div>
      {/* Navbar for phone (small screens) */}
      <div className="block md:hidden">
        <NavbarPhone />
      </div>
    </>
  );
}

export default Quetes;
