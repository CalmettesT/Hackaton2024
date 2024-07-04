import React from "react";
import QuestProgress from "./ProgressionQuete";
import "./Style.css";
import NavbarPhone from "../components/NavbarPhone";
import NavbarBlurred from "../components/NavbarBlurred";

function App() {
  return (
    <>
    <div className="text-center">
      <header className="bg-gray-800 p-5 text-white">
          <h1>Avancement des quêtes</h1>
        </header>
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
