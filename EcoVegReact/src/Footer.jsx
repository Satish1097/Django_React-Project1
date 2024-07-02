import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaAmazon } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import './App.css'

const EcoVeg = [
  { list: "About us" },
  { list: "Conditions" },
  { list: "Our Journals" },
  { list: "Careers" },
  { list: "Affiliate Programme" },
  { list: "Ultras Press" }
];

const Quicks = [
  { lists: "Offers" },
  { lists: "Discount Coupons" },
  { lists: "Stores" },
  { lists: "Track Order" },
  { lists: "Shop" },
  { lists: "Info" }
];

const customer = [
  { lists1: "FAQ" },
  { lists1: "Contact" },
  { lists1: "Privacy Policy" },
  { lists1: "Return and Refund" },
  { lists1: "Cookie Guidelines" },
  { lists1: "Delivery Information" }
];

const icon = [
  { lists2: <CiFacebook /> },
  { lists2: <CiTwitter /> },
  { lists2: <FaInstagram /> },
  { lists2: <FaAmazon /> }
];

function Footer() {
  return (
    <>
      <div className="main">
        <div className="follow">
          <h4>Follow us</h4>
          <ul>
            {icon.map((item, index) => (
              <li key={index}>{item.lists2}</li>
            ))}
          </ul>
        </div>
        <div className="EcoVeg">
          <h4>EcoVeg</h4>
          <ul>
            {EcoVeg.map((item, index) => (
              <li key={index}>{item.list}</li>
            ))}
          </ul>
        </div>
        <div className="quick_Link">
          <h4>Quick Links</h4>
          <ul>
            {Quicks.map((item, index) => (
              <li key={index}>{item.lists}</li>
            ))}
          </ul>
        </div>
        <div className="customer_service">
          <h4>Customer Service</h4>
          <ul>
            {customer.map((item, index) => (
              <li key={index}>{item.lists1}</li>
            ))}
          </ul>
        </div>
        <div className="subscribe_us">
          <h4>Subscribe us</h4>
          <p>Subscribe to our newsletter to get updates</p>
          <p>about our grand offers.</p>
          <input type="text" placeholder="Email Address" />
          <span><button>Subscribe</button></span>
        </div>
      </div>
    </>
  );
}

export default Footer;
