import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { Home } from './Home'
// import Test from './Test'
import Services from './Services'
import './App.css'
import Footer from './Footer'
import Login from './Login'
import About from './About'
import Signup from './Signup'
import OtpVerify from './OtpVerify'
import Loading from './Loading';
import axios from 'axios'
function App() {

  const [loading, setLoading] = useState(false);

  //Add request interceptor
  axios.interceptors.request.use(function (config) {
    setLoading(true);
    return config;
  }, function (error) {
    setLoading(false);
    return Promise.reject(error);
  });

  // Add response interceptor
  axios.interceptors.response.use(function (response) {
    setLoading(false);
    return response;
  }, function (error) {
    setLoading(false);
    return Promise.reject(error);
  });

  return (
    <>
      <Router>
        <Nav />
        <Loading show={loading} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/Test" element={<Test />}></Route> */}
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/s1t0" element={<OtpVerify />}></Route>


        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;
