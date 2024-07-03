/*import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Navbar from "./components/NavbarBlurred";


export default function App() {

  return (
      <Navbar />
  );
}*/



// // src/App.js
// import React, { useState } from 'react';
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage';

// function App() {
//   const [isLogin, setIsLogin] = useState(true);

//   const togglePage = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="App">
//       {isLogin ? (
//         <LoginPage togglePage={togglePage} />
//       ) : (
//         <SignupPage togglePage={togglePage} />
//       )}
//     </div>
//   );
// }

// export default App;








// src/App.js
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}

export default App;

