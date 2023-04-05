import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="logo-page">
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
                    <span>Get Started</span>
                </div>

            </div>
        </div>

    )
}

export default Login