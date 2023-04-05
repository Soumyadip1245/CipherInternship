import React, { useState } from 'react'
import { Header } from './component/header/Header'
import Section from './component/section/Section'
import Login from './component/login/Login'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <Header />
      <div className="App">
        {!isLoggedIn && (
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
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