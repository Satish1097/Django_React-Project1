import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { Home } from './Home'
import Test from './Test'
import Product from './Product'

import './App.css'
import Footer from './Footer'
import Login from './Login'
function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Login" element={<Login />}></Route>


        </Routes>
      </Router>
      <Footer />





    </>
  )
}

export default App
