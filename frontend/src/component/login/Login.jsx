import React, { useState } from 'react'
import axios from 'axios';
import './Login.css'
const Login = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [rname, setRname] = useState("")
    const [remail, setRemail] = useState("")
    const [rphone, setRPhone] = useState("")
    const [rpassword, setRpassword] = useState("")
    const register = async () => {
        var obj = {

            "name": rname,
            "email": remail,
            "phone": rphone,
            "password": rpassword

        }
        let res = await axios.post("http://localhost:8080/auth/register", obj)
        if (res.data.success) {
            setRPhone("")
            setRemail("")
            setRname("")
            setRpassword("")
            // localStorage.setItem("token",res.data.token)
            console.log(res.data.message)
        }
        else {
            console.log(res.data.message)
        }
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
                        type="text"
                        className="input-box"
                        placeholder="Username"
                        value={rname}
                        onChange={(e) => setRname(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <input
                        type="text"
                        className="input-box"
                        placeholder="Phone Number"
                        value={rphone}
                        onChange={(e) => setRPhone(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <input
                        type="email"
                        className="input-box"
                        placeholder="Email ID"
                        value={remail}
                        onChange={(e) => setRemail(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <input
                        type="password"
                        className="input-box"
                        placeholder="Password"
                        value={rpassword}
                        onChange={(e) => setRpassword(e.target.value)}
                    />
                </div>
                <button class="login-btnn" onClick={register}><span>Register</span></button>
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