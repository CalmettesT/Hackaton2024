// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { UserCircleIcon, CurrencyDollarIcon, FolderIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { auth } from '../model/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);



  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleClick = () => {
    navigate("/signup");
  };

  const userData = {
    name: user.displayName || 'John Doe',
    email: user.email,
    level: 5, // These are still static for now
    exp: 200,
    nextLevelExp: 500,
    balance: 120.00
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <UserCircleIcon className="w-24 h-24 text-green-500" />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">{userData.name}</h1>
          <p className="text-gray-600">{userData.email}</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Niveau: {userData.level}</h2>
            <p className="text-gray-600">Expérience: {userData.exp}/{userData.nextLevelExp}</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Solde: {userData.balance.toFixed(2)} €</h2>
            <button className="flex items-center justify-center w-full px-4 py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600">
              <CurrencyDollarIcon className="w-5 h-5 mr-2" />
              Retirer de l'argent
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-6 space-x-4">
          <button className="flex items-center justify-center flex-1 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
            <FolderIcon className="w-5 h-5 mr-2" />
            Voir les fichiers
          </button>
          <button className="flex items-center justify-center flex-1 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
            <PencilSquareIcon className="w-5 h-5 mr-2" />
            Modifier le profil
          </button>


          <button 
          onClick={handleClick} 
          className="flex items-center justify-center w-full px-4 py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Cliquer ici
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
