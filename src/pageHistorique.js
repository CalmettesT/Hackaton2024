import React from 'react';
import GraphiqueConso from './components/GraphiqueConso';
import GraphiqueEvolutionGagne from './components/GraphiqueEvolutionGagne';

const PageHistorique = () => {
    return (
          <>
          <h1 className="text-2xl font-bold text-center mb-4">Page Historique</h1>
          <div className="text-center text-lg mb-8">CO2: 3%</div>
          <GraphiqueConso /> 
          <GraphiqueEvolutionGagne />
          </>
      );
};
export default PageHistorique;