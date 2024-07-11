import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import './Login.css'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Navigate=useNavigate()

    const handleLogin=async()=>{
        e.preventDefault()

        try{
            if(username && password)
            {
                const user= await axios.get('http://127.0.0.1:8000/customers/')
                userdata=user.find(user=>user.Email==username && user.Password==password)

                if(userdata){
                    Navigate('/')
                }
                else{
                    toast.error("Incorrect UserName or Password")
                }
            }
            else{
                toast.error("Enter Email & Password")
            }
    
        }
        catch(error){
            toast.error("An error occured")
    
        }
    }
    

    return (
        <div className="wrapper-login">
            <div className="outer-form-container">
            <div className="right-form-container">
                    <div className="right-form-container-inner">
                        <h2>welcome</h2>
                    </div>
                </div>
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group-outer">
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
                        </div>
                        <div>
                            <a href="" className='forgot-link'>Forgot Password</a>
                        </div>
                        <button type='submit' className='login-btn1'>Login</button>
                        <div className='signup-link1'>
                            <p>Don't have an account? <Link to="/Signup">Signup</Link> </p>
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
        </div>
    );
}

export default Login;