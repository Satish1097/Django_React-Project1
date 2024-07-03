import React, { useState } from 'react';
import { FaUserAlt, FaLock,FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="wrapper-login">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-box">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <label htmlFor="username">Username</label>
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <label htmlFor="password">Password</label>
                        <FaLock className='icon' />
                    </div>
                    <div>
                        <a href="" className='forgot-link'>Forgot Password</a>
                    </div>
                    <button type='submit' className='login-btn'>Login</button>
                    <div className='signup-link'>
                        <p>Don't have an account? <a href="">Signup</a> </p>
                    </div>
                    <div className='login-with'>
                        <p>Or Login with</p>
                        <div className='social-icons'>
                            <a href=""><FcGoogle className='social-icon' /></a>
                            <a href=""><FaFacebook className='social-icon' /></a>
                            <a href=""><FaSquareXTwitter className='social-icon' /></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;