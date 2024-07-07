import { useState} from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import "./Sign.css";
import axios from "axios"
import { toast } from 'react-toastify'


const Signup = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("")
    const [Password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mobilepattern = /^(\+91[\-\s]?)?[789]\d{9}$/;

        try {
            if (!Name || !Email || !Contact || !Password) {
                toast.error("All Fields are Required");
            }
            else if (!mobilepattern.test(Contact)) {
                toast.error("Enter Valid Number");
            }
            else if (Password.length < 8) {
                toast.error("Password must be 8 digit long")


            }
            else {
                const userdata = await axios.get('http://127.0.0.1:8000/customers/')
                const data=userdata.data
                const userExist = data.find(e=> e.Email === Email)
                if (userExist) {
                    toast.error("Email Already Exist")
                }
                else {
                    const postdata = { Name, Email, Contact, Password }
                    await axios.post('http://127.0.0.1:8000/customers/', postdata)
                    toast.success("Successfully Registered")
                }
            }

        }
        catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
    }
    return (
        <div className="wrapper-login">
            <div className="outer-form-container">
                <div className="login-box">
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={Name}
                            />
                            <label htmlFor="username">Name</label>
                            <FaUserAlt className='icon' />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                value={Email}
                            />
                            <label htmlFor="username">Email</label>
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setContact(e.target.value)}
                                value={Contact}
                            />
                            <label htmlFor="username">Phone</label>
                            <FaPhone className='icon' />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={Password}
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
