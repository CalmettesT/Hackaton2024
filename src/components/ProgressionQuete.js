import React, { useState, useEffect } from 'react';
import questsData from './EtatQuete.json'; // Importer les quêtes depuis le fichier JSON

const QuestProgress = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    // Simuler la récupération des données
    setQuests(questsData);
  }, []);

  return (
    <div className="quest-progress flex flex-col items-center p-4">
      <ul className="list-none p-0 w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
        {quests.map(quest => (
          <li key={quest.id} className="my-4 p-4 border border-gray-300 rounded shadow-sm bg-white">
            <h3 className="text-base font-semibold mb-2">{quest.title} ({quest.points} points)</h3>
            <div className="progress-bar w-full bg-gray-200 rounded overflow-hidden">
              <div className="progress h-4 bg-green-500" style={{ width: `${quest.progress}%` }}></div>
            </div>
            <p className="mt-2 text-sm">Progression : {quest.progress}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestProgress;
