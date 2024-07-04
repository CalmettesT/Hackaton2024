import React, { useEffect, useState } from 'react';
import { UserCircleIcon, CurrencyDollarIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { auth } from '../model/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import NavbarPhone from '../components/NavbarPhone';
import NavbarBlurred from '../components/NavbarBlurred';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const userData = {
    name: user.displayName || 'Sylvain DURIFF',
    email: user.email,
    level: 5,
    exp: 200,
    nextLevelExp: 500,
    balance: 120.00
  };

  return (
    <>
      <div className="hidden md:block w-full">
        <NavbarBlurred />
      </div>
      <div className="block md:hidden w-full">
        <NavbarPhone />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-light">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="flex flex-col items-center">
            <UserCircleIcon className="w-24 h-24 text-primary" />
            <h1 className="mt-4 text-2xl font-bold text-dark">{userData.name}</h1>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700">Niveau: {userData.level}</h2>
              <p className="text-gray-600">Expérience: {userData.exp}/{userData.nextLevelExp}</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700">Solde: {userData.balance.toFixed(2)} €</h2>
              <button className="flex items-center justify-center w-full px-4 py-2 mt-2 text-white bg-primary rounded-md hover:bg-secondary">
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                Retirer de l'argent
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-6 space-x-4">
            <button className="flex items-center justify-center flex-1 px-4 py-2 text-white bg-primary rounded-md hover:bg-secondary">
              <PencilSquareIcon className="w-5 h-5 mr-2" />
              Modifier le profil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
