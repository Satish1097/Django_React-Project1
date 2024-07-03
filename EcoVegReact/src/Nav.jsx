import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Nav.css'

function Nav() {
  const[Category,SetCategory]=useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/ProductCategory/')
    .then(response => {
      SetCategory(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
  },[])

  const OpenMenu = () => {
    var x = document.getElementById('menu');
    var y = document.getElementById('icon');
    if (x.style.left == '-100%') {
      x.style.left = '0px';
      y.className = 'fa fa-times';
    }else{
      x.style.left='-100%';
      y.className='fa-solid fa-bars-staggered';
    }
  }
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
              {Category.map(i=>(
                <option value="">{i.Category}</option>
              ))}
            </select>
          </div>
          <div className="input">
            <form action="">
              <input type="text" placeholder='Search here' />
            </form>
          </div>
          <div className="sicon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="menu" id='menu'>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Test">About</Link>
            <Link to="/Product">Services</Link>
          </ul>
        </div>
        <div className="Login">
          <Link to='/Login'><span><i class="fa-solid fa-user"></i></span></Link>
        </div>
        <div className="cart">
          <Link><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
        <button className='bar' onClick={OpenMenu}><i className="fa-solid fa-bars-staggered" id='icon'></i></button>
      </div>
    </>
  )
}

export default Nav