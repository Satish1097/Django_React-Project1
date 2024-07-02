import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { Home } from './Home'
import Test from './Test'
import Product from './Product'

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Product" element={<Product />}></Route>

        </Routes>
      </Router>

      <Home />
    </>
  )
}

export default App
