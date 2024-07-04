import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import './Product.css';



function Product() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
      .then(response => {
        setItems(response.data);
        console.log(items)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <>
    <div className="wrapper-product">
    {items.map(i=>(
    <div className="product">
        <div className="product-img">
            <img src={i.P_Image} alt="" />
        </div>
        <div className="product-name">
            <p>{i.P_Name}</p>
        </div>
        <div className="product-price">
            <del className="actual-price"><p>{i.P_Price}</p></del>
            <p className="discount-price">{i.Discounted_Price}</p>
        </div>
        <div className="product-btn">
            <button className="product-add-btn">Add to Cart</button>
            <button className="product-like-btn"><FaHeart /></button>
        </div>
    </div>
    ))}
</div>
</>
);
}

export default Product;

