import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <>
    <div className="nav">
      <div className="logo">
        <img src="Images/Ecologo.png" alt="img" />
        <h2>EcoVeg</h2>
      </div>
      <div className="search">
        <div className="category">
          <select name="" id="">
            <option value="">All Category</option>
            <option value="">Leaves</option>
            <option value="">Root</option>
            <option value="">Flowers</option>
          </select>
        </div>
        <div className="input">
          <form action="">
            <input type="text" placeholder='Search here'/>
          </form>
        </div>
        <div className="sicon">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="menu">
        <ul>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>

        </ul>
      </div>
    </div>
    </>
  )
}

export default Nav