import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");
  const Navigate=useNavigate()

  const handleOTP = async () => {
    const csrftoken = Cookies.get('csrftoken');

    try {
      const otpResponse = await axios.post('http://127.0.0.1:8000/send_mail_view/', { Email, Name }, {
        headers: {
          'X-CSRFToken': csrftoken,
        },
      });
      if (otpResponse.data.success) {
        toast.success("OTP sent to your email");
      } else {
        toast.error("Error sending OTP: " + otpResponse.data.error);
      }
    } catch (otpError) {
      console.error("Error sending OTP: ", otpError);
      toast.error("Error sending OTP");
    }
  };

  const handleVerifyOTP = async () => {
    const csrftoken = Cookies.get('csrftoken');

    try {
      const verifyResponse = await axios.post('http://127.0.0.1:8000/verify_otp_view/', { Email, OTP }, {
        headers: {
          'X-CSRFToken': csrftoken,
        },
      });
      if (verifyResponse.data.success) {
        toast.success(verifyResponse.data.message);
        Navigate('/Home')
      } else {
        toast.error("Error verifying OTP: " + verifyResponse.data.error);
      }
    } catch (verifyError) {
      console.error("Error verifying OTP: ", verifyError);
      toast.error("Error verifying OTP");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={Contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={OTP}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="OTP"
        />
        <button type="button" onClick={handleOTP}>Send OTP</button>
        <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
      </form>
    </div>
  );
};

export default Test;
