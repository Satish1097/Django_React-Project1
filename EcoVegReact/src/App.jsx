import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Nav from './Nav'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
