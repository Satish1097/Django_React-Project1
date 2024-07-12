import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './OtpVerify.css'

function OtpVerify() {
  const [OTP, setOTP] = useState('')
  const Navigate = useNavigate()
  let user_data = localStorage.getItem('data');
  let user = JSON.parse(user_data)
  let Name = user.name
  let Email = user.email
  let Contact = user.contact
  let Password = user.password
  const resend = async () => {
    await axios.post('http://127.0.0.1:8000/send_mail_view/', { Email, Name })
    toast.success("OTP sent on your Email")
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get('http://127.0.0.1:8000/verify-otp')
      const otp = response.data.otp
      if (otp) {
        if (otp === OTP) {
          let user1 = { Name, Email, Contact, Password }
          await axios.post('http://127.0.0.1:8000/customers/', user1)
          toast.success("User Registered successfully");
          localStorage.removeItem('data');
          Navigate('/')
        } else {
          toast.error("Incorrect OTP. Please try again.");
        }
      } else {
        toast.error("No OTP records found.");
      }
    }
    catch (err) {
      toast.error("Try Again")
    }
  }
  return (
    <>
      <div className="wrapper-verify">
        <div className="Otp-Verify">
          <form className="outer-form" onSubmit={handleSubmit}>
            <div className="outer-details">
              <p className='email-message'>Email Verification</p>
              <p className='otp-message'>Enter the OTP sent to your email</p>
              <p className='email-detail'>Email: <span className='email'>{Email}</span></p>
            </div>
            <div className="otp-input" >
              <div class="form__group field">
                <input type="input" class="form__field" placeholder="Name" required="" value={OTP} onChange={e => setOTP(e.target.value)} />
                <label for="name" class="form__label">Otp</label>
              </div>
            </div>
            <button className='verify-btn' type='submit'>Verify</button>
            <div className="resend-outer">
              <p className='resend-message'>Didn't receive the OTP ?</p>
              <p className='resend-otp' onClick={resend}>Resend otp</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default OtpVerify