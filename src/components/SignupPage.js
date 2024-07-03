// src/components/SignupPage.js
import React, { useState } from 'react';

const SignupPage = ({ togglePage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Nom d\'utilisateur:', username);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Créer un compte</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-700">Nom d'utilisateur:</label>
              <input 
                type="text" 
                id="username" 
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email:</label>
              <input 
                type="email" 
                id="email" 
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">Mot de passe:</label>
              <input 
                type="password" 
                id="password" 
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Créer un compte
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Déjà un compte? <button onClick={togglePage} className="text-green-500 underline hover:text-green-600">Se connecter</button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
