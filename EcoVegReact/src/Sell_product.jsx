import React, { useState } from 'react';
import "./App.css";

const SellProduct = () => {
    const [item, setItem] = useState(1);

    const Inc = () => {
        setItem(item + 1);
    };

    const Dec = () => {
        if (item > 1) {
            setItem(item - 1);
        }
    };

    return (
        <div className="product-card">
            <img src="http://i0.wp.com/elitefoods.co.in/img/product/new/Broken-Wheat-min.png?w=250" alt="Granny Smith Apples"/>
            <h2>Granny Smith Apples</h2>
            <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">(222)</span>
            </div>
            <div className="price">
                <span className="original-price">$24.00</span>
                <span className="discounted-price">$18.00</span>
                <span className="discount">10% OFF</span>
            </div>
            <div className="cart">
                <div className='inc_dec'>
                    <div onClick={Dec}>-</div>
                    <p>{item}</p>
                    <div onClick={Inc}>+</div>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default SellProduct;
