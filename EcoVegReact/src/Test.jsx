// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// import Cookies from 'js-cookie';

// const Test = () => {
//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Contact, setContact] = useState("");
//   const [Password, setPassword] = useState("");
//   const [OTP, SetOTP]=useState("");

//   const handleOTP = async () => {
//     const csrftoken = Cookies.get('csrftoken');
  
//     try {
//       const otpResponse = await axios.post('http://127.0.0.1:8000/send_mail_view/', { Email, Name,Contact,Password }, {
//         headers: {
//           'X-CSRFToken': csrftoken,
//         },
//       });
//       if (otpResponse.data.success) {
//         toast.success("OTP sent to your email");
//       } else {
//         toast.error("Error sending OTP: " + otpResponse.data.error);
//       }
//     } catch (otpError) {
//       console.error("Error sending OTP: ", otpError);
//       toast.error("Error sending OTP");
//     }
//   };
  
//   const handleVerify = async () => {
//     try {
//       const otpRecordResponse = await axios.get(`http://127.0.0.1:8000/customers/?Email=${Email}`);
//       if (otpRecordResponse.data.length > 0) {
//         const storedOTP = otpRecordResponse.data[0].OTP;
//         console.log(storedOTP)
        
//         if (OTP === storedOTP) {
//           toast.success("OTP verified successfully");
//           // Proceed with user authentication or other actions
//         } else {
//           toast.error("Incorrect OTP. Please try again.");
//         }
//       } else {
//         toast.error("No OTP records found.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP: ", error);
//       toast.error("Error verifying OTP");
//     }
//   };
  
  
// return (
//   <div>
//     <h2>Signup</h2>
//     <form>
//       <input
//         type="text"
//         value={Name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         type="text"
//         value={Email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="text"
//         value={Contact}
//         onChange={(e) => setContact(e.target.value)}
//         placeholder="Phone"
//       />
//       <input
//         type="password"
//         value={Password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type='button' onClick={handleOTP}>Send OTP</button>
//       <input type="text"
//       value={OTP}
//       onChange={(e)=>SetOTP(e.target.value)}
//       />
//       <button type='button' onClick={handleVerify}>Verify</button>
//       <input type="submit" />
//     </form>
//   </div>
// );
// };

// export default Test;
