// src/app.js
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homes from "./pages";
import Abouts from "./pages/about";
import Manage from './pages/manages';
import Sett from './pages/settings';

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);


  const handleSignInClick = (event) => {
    event.preventDefault();
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      if (isShowLogin) {
        handleClose();
      } else if (isShowRegister) {
        handleCloseRegister();
      } 
    }
  };
  const handleRegisterClick = (event) => {
    event.preventDefault();
    setIsShowRegister(true);
  };

  const handleCloseRegister = () => {
    setIsShowRegister(false);
  };


  return (
<Router>
  <Navbar onSignIn={handleSignInClick} />
  {isShowLogin && 
    <div className="modal" onClick={handleBackgroundClick} >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <LoginForm onClose={handleClose} />
      </div>
    </div>
  }
  {isShowRegister && 
    <div className="modal" onClick={handleBackgroundClick} >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <RegisterForm onClose={handleCloseRegister} />
      </div>
    </div>
  }
  <Routes>
    <Route path="/" element={<Homes onSignIn={handleSignInClick} onRegister={handleRegisterClick} />} />
    <Route path="/about" element={<Abouts />} />
    <Route path="/manages" element={<Manage />} />
    <Route path="/settings" element={<Sett />} />
  </Routes>

</Router>
  );
}
export default App;
