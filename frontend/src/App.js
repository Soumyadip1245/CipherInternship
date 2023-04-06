import React, { useState } from 'react'
import { Header } from './component/header/Header'
import Section from './component/section/Section'
import Login from './component/login/Login'
import './App.css'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
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
          <Section />
        </div>
      </div >
    </>
  )
}

export default App