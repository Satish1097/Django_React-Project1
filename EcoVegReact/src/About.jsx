import React from 'react';
import { FaApple, FaHandshake, FaShoppingCart, FaTruck, FaFire, FaThumbsUp } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h2 className="headline">Why EcoVeg?</h2>
      <div className="feature">
        <div className="iconA">
          <FaApple />
        </div>
        <h3 className="title">Farm Fresh & Delicious</h3>
        <p className="description">Fresh juicy fruits and vegedatas directly from the farms</p>
      </div>
      <div className="feature">
        <div className="iconA">
          <FaHandshake />
        </div>
        <h3 className="title">Hygienically Washed</h3>
        <p className="description">Hygienically washed and stored</p>
      </div>
      <div className="feature">
        <div className="iconA">
          <FaShoppingCart />
        </div>
        <h3 className="title">Book Cart</h3>
        <p className="description">Cart will be there with a farm fresh fruits & veggies.</p>
      </div>
      <div className="feature">
        <div className="iconA">
          <FaTruck />
        </div>
        <h3 className="title">Free Home Delivery</h3>
        <p className="description">Fast and Free Delivery</p>
      </div>
      <div className="feature">
        <div className="iconA">
          <FaFire />
        </div>
        <h3 className="title">Ultimate Offer</h3>
        <p className="description">Avail Daily exciting offers at great deals</p>
      </div>
      <div className="feature">
        <div className="iconA">
          <FaThumbsUp />
        </div>
        <h3 className="title">Handpick Your Favourites</h3>
        <p className="description">Ease of handpicking fresh stock from a cart at Your Doorstep</p>
      </div>
    </div>
  );
};

export default About;
