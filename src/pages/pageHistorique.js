import React from 'react';
import GraphiqueConso from '../components/GraphiqueConso';
import GraphiqueEvolutionGagne from '../components/GraphiqueEvolutionGagne';
import GraphiqueCo2 from '../components/GraphiqueCo2';

const PageHistorique = (prop) => {
    const title = prop.title;
    return (
          <div className="mt-6 md:mt-16 mb-16">
            <GraphiqueConso title={title}/> 
            <GraphiqueEvolutionGagne />
            <GraphiqueCo2 />
          </div>
      );
};
export default PageHistorique;