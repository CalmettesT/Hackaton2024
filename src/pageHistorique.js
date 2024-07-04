import React from "react";
import GraphiqueConso from "./components/GraphiqueConso";
import GraphiqueEvolutionGagne from "./components/GraphiqueEvolutionGagne";
import GraphiqueCo2 from "./components/GraphiqueCo2";
import NavbarPhone from "./components/NavbarPhone";
import NavbarBlurred from "./components/NavbarBlurred";

const PageHistorique = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">Page Historique</h1>
      <GraphiqueConso />
      <GraphiqueEvolutionGagne />
      <GraphiqueCo2 />

      <>
        {/* Navbar for larger screens */}
        <div className="hidden md:block">
          <NavbarBlurred />
        </div>
        {/* Navbar for phone (small screens) */}
        <div className="block md:hidden">
          <NavbarPhone />
        </div>
      </>
    </>
  );
};
export default PageHistorique;
