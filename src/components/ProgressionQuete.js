import React, { useState, useEffect } from 'react';
import questsData from './EtatQuete.json';  // Importer les quêtes depuis le fichier JSON

const QuestProgress = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    // Simuler la récupération des données
    setQuests(questsData);
  }, []);

  return (
    <div className="quest-progress">
      <ul>
        {quests.map(quest => (
          <li key={quest.id}>
            <h3>{quest.title} ({quest.points} points)</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${quest.progress}%` }}></div>
            </div>
            <p>Progression : {quest.progress}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestProgress;
