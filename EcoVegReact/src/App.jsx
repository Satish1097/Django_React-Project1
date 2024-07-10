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
function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/Test" element={<Test />}></Route> */}
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/s1t0" element={<OtpVerify/>}></Route>


        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;
