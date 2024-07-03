import React from 'react';
import GraphiqueConso from './components/GraphiqueConso';
import GraphiqueEvolutionGagne from './components/GraphiqueEvolutionGagne';
import pageHistorique from './pageHistorique';


export default function App() {

  return (
    //appel du composant "GraphiqueConso" et de la page "pageHistorique"
      <>
        {/* <GraphiqueConso />  */}
        {/* <GraphiqueEvolutionGagne /> */}
        <pageHistorique/>
      </>
  );
}