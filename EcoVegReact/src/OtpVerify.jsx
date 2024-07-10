import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './OtpVerify.css'

function OtpVerify() {
    const [OTP,setOTP]=useState("")
    const Navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        const Email=localStorage.getItem('Email')
        const otpRecordResponse=await axios.get(`http://127.0.0.1:8000/customers/?Email=${Email}`)
        if (otpRecordResponse.data.length > 0) {
                    const storedOTP = otpRecordResponse.data[0].OTP;
                    console.log(storedOTP)
                    
                    if (OTP === storedOTP) {
                      toast.success("OTP verified successfully");
                      Navigate('/')

                      // Proceed with user authentication or other actions
                    } else {
                      toast.error("Incorrect OTP. Please try again.");
                    }
                  } else {
                    toast.error("No OTP records found.");
                  }
        }
        catch{
            toast.error("Try Again")
        }
    }
  return (
    <>
    <div className="Otp-Verify">
        <h1>Enter OTP sent on Email</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" value={OTP} onChange={(e)=>setOTP(e.target.value)}/>
        <input type="submit"/>
        </form>
    </div>
    
    </>
  )
}

export default OtpVerify