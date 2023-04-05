import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const register = () => {
        setShowRegisterForm(true);
    };
    const login = () => {
        setShowRegisterForm(false)
    }
    if (showRegisterForm) {
        return (
            <div className="form">
                <div className="logo-container">
                    <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="Your Logo" />
                    <h2>CipherSchools</h2>
                </div>
                <div className="input-row">
                    <input
                        type="email"
                        className="input-box"
                        placeholder="Email ID"
                    />
                </div>
                <div className="input-row">
                    <input
                        type="password"
                        className="input-box"
                        placeholder="Enter Password"
                    />
                </div>
                <button class="login-btnn" ><span>Register</span></button>
                <div className="input-bottom">
                    <div className="input-account">Done with Sign in ?</div>
                    <a onClick={login}>  <span>Login</span></a>
                </div>

            </div>

        )
    }
    else {
        return (
            <div className="form">
                <div className="logo-container">
                    <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="Your Logo" />
                    <h2>CipherSchools</h2>
                </div>
                <div className="input-row">
                    <input
                        type="email"
                        className="input-box"
                        placeholder="Email ID"
                    />
                </div>
                <div className="input-row">
                    <input
                        type="password"
                        className="input-box"
                        placeholder="Enter Password"
                    />
                </div>
                <button class="login-btnn" ><span>Signin</span></button>
                <div className="input-bottom">
                    <div className="input-account">Don't have an account ?</div>
                    <a onClick={register}>  <span>Get Started</span></a>
                </div>

            </div>

        )
    }

}

export default Login