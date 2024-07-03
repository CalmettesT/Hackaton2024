import React from 'react';
import QuestProgress from './ProgressionQuete';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avancement des quêtes</h1>
      </header>
      <main>
        <QuestProgress />
      </main>
    </div>
  );
}

export default App;
