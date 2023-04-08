import React, { useState } from 'react'
import { Header } from './component/header/Header'
import Section from './component/section/Section'
import Login from './component/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Follower from './component/follower/Follower';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = () => {
    const token = localStorage.getItem('token');
    setToken(token);
    setIsLoggedIn(true);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />

      <div className="App">
        {!isLoggedIn && (
          <div className='form-container'>
            <Login onLogin={handleLogin} />
          </div>
        )}
        <div style={{ filter: isLoggedIn ? "none" : "blur(5px)" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Section isLoggedIn={isLoggedIn} token={token} />} />
              <Route path="/follower" element={<Follower />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
