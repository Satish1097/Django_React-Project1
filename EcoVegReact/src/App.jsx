import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { Home } from './Home'
import Test from './Test'
import Product from './Product'
import Category from './Category'

import './App.css'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import Offer from './Offer'
function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
      </Router>
      <Category />
      <Product/>
      <Offer />
      <Footer />
    </>
  )
}

export default App;
