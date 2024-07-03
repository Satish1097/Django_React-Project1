import React from "react";
import { FaHeart } from "react-icons/fa";
import './Product.css'
const Product = () => {
    return (
        <div className="wrapper-product">
            <div className="product">
                <div className="product-img">
                    <img src="https://demo.templatesjungle.com/organic/images/product-thumb-5.png" alt="" />
                </div>
                <div className="product-name">
                    <p>Organic Spinach Leaves (Fresh Produce)</p>
                </div>
                <div className="product-price">
                    <del className="actual-price"><p>$ 24.00</p></del>
                    <p className="discount-price">$ 18.00</p>
                </div>
                <div className="product-btn">
                    <button className="product-add-btn">Add to Cart</button>
                    <button className="product-like-btn"><FaHeart /></button>
                </div>
            </div>
        </div>
    )
}
export default Product