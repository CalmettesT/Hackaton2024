import React from 'react';
import GraphiqueConso from './components/GraphiqueConso';
import GraphiqueEvolutionGagne from './components/GraphiqueEvolutionGagne';
import GraphiqueCo2 from './components/GraphiqueCo2';

const PageHistorique = () => {
    return (
          <>
          <h1 className="text-2xl font-bold text-center mb-4">Page Historique</h1>
          <GraphiqueConso /> 
          <GraphiqueEvolutionGagne />
          <GraphiqueCo2 />
          </>
      );
};
export default PageHistorique;