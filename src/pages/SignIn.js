import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../model/firebase.config";
import { useNavigate } from "react-router-dom";
import NavbarBlurred from '../components/NavbarBlurred';
import NavbarPhone from '../components/NavbarPhone';

export default function SignIn() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error.message);
    }
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
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Se Connecter
          </Typography>
          <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
            Entrez votre email et votre mot de passe pour vous connecter
          </Typography>
          <form onSubmit={handleSignIn} className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-dark"
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
                  className="mb-2 block font-medium text-dark"
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
                      <EyeIcon className="h-5 w-5 text-turquoise" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5 text-turquoise" />
                    )}
                  </i>
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="mt-6 w-full text-white bg-primary rounded-md hover:bg-secondary">
              Se connecter
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal"
            >
              Pas encore inscrit?{" "}
              <a href="/signup" className="font-medium text-turquoise hover:text-secondary">
                Créer un compte
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </>
  );
}
