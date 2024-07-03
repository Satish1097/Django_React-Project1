import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { Home } from './Home'
import Product from './Product'
import Category from './Category'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}></Route>
          <Route path="Home/" element={<Home />}></Route>
        </Routes>
      </Router>
      <Home />
      <Category />
    </>
  )
}

export default App
