import React from 'react';
import GraphiqueConso from './components/GraphiqueConso';
import GraphiqueEvolutionGagne from './components/GraphiqueEvolutionGagne';

const pageHistorique = () => {
    return (
        //appel du composant "GraphiqueConso" et de la page "pageHistorique"
          <>
            <GraphiqueConso /> 
            <GraphiqueEvolutionGagne />
          </>
      );
};

export default pageHistorique;