import React from 'react';
import QuestProgress from '../components/ProgressionQuete';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-800 p-5 text-white">
        <h1>Avancement des quêtes</h1>
      </header>
      <main>
        <QuestProgress />
      </main>
    </div>
  );
}

export default App;
