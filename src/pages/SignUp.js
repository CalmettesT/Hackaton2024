// src/pages/SignUp.js
import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../model/firebase.config";
import { useNavigate } from "react-router-dom";
import NavbarBlurred from '../components/NavbarBlurred';
import NavbarPhone from '../components/NavbarPhone';

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      navigate('/'); // Redirige l'utilisateur vers la page d'accueil après la création du compte
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Navbar for larger screens */}
      <div className="hidden md:block w-full">
        <NavbarBlurred />
      </div>
      {/* Navbar for smaller screens */}
      <div className="block md:hidden w-full">
        <NavbarPhone />
      </div>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Inscrivez-vous
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Entrez votre email et votre mot de passe pour vous inscrire
        </Typography>
        <form onSubmit={handleSignUp} className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Votre Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="nom@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Mot de passe
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
            Créer un compte
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Déjà inscrit?{" "}
            <a href="/signin" className="font-medium text-gray-900">
              Se connecter
            </a>
          </Typography>
        </form>
      </div>
    </div>
  );
}
