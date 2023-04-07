import React, { useState } from 'react'
import { Header } from './component/header/Header'
import Section from './component/section/Section'
import Login from './component/login/Login'
import jwt_decode from "jwt-decode";
import './App.css'
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
      <Header />
      <div className="App">
        {!isLoggedIn && (
          <div className='form-container'>
            <Login onLogin={handleLogin} />
          </div>
        )}
        <div style={{ filter: isLoggedIn ? "none" : "blur(5px)" }}>
          <Section isLoggedIn={isLoggedIn} token={token} />
        </div>
      </div >
    </>
  )
}

export default App