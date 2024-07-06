import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import "./Sign.css";


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    return (
        <div className="wrapper-login">
            <div className="outer-form-container">
                <div className="login-box">
                    <h2>Signup</h2>
                    <form>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <label htmlFor="username">Name</label>
                            <FaUserAlt className='icon' />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <label htmlFor="username">Email</label>
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                autoComplete="off"
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                            />
                            <label htmlFor="username">Phone</label>
                            <FaPhone className='icon' />
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
                        <button type='submit' className='login-btn'>Signup</button>
                        <div className='signup-link'>
                            <p>Already have an account? <Link to="/Login">Login</Link> </p>
                        </div>
                        <div className='login-with'>
                            <p>Or Sign with</p>
                            <div className='social-icons'>
                                <a href=""><FcGoogle className='social-icon' /></a>
                                <a href=""><FaFacebook className='social-icon' /></a>
                                <a href=""><FaSquareXTwitter className='social-icon' /></a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right-form-container">
                    <div className="right-form-container-inner">
                        <h2>welcome</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup
