import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { Home } from './Home'

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
    </>
  )
}

export default App
