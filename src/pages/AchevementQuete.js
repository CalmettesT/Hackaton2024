import React from "react";
import QuestProgress from "../components/ProgressionQuete";
import NavbarPhone from "../components/NavbarPhone";
import NavbarBlurred from "../components/NavbarBlurred";

function App() {
  return (
    <>
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

export default App;
