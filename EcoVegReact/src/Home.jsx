import React, { useState, useEffect } from 'react'
import './Home.css'
// import Product from './Product'
// import Category from './Category'
import Offer from './Offer'
import { FaHeart } from "react-icons/fa";
import { getCategory, getProduct } from './Manage'
import './Product.css'
import './Category.css'
import { toast } from 'react-toastify';
export const Home = () => {
    const [products, SetProducts] = useState([]);
    const [categories,SetCategory]=useState([]);

    useEffect(() => {
        let mounted = true;
        const fetchdata = async()=>{
            try{
                const productdata=await getProduct();
                const category=await getCategory();
                if(mounted)
                {
                    SetCategory(category);
                    SetProducts(productdata);
                }
            }catch(error){
                toast.error("Internal server Error")
            }

        };
        fetchdata();

        return ()=>{
            mounted=false
        };
    }, [])
    return (
        <>
            <header class="hero-section">
                <div class="hero-content">
                    <h2>
                        <span className='first-h2'>Organic</span>
                        <span className='second-h2'> Foods at your</span>
                        <h2 className='third-h2'>Doorsteps</h2>
                    </h2>
                    <p className='wrapper-p'>Dignissim massa diam elementum.</p>
                    <div class="cta-buttons">
                        <a href='' className="start-shopping">START SHOPPING</a>
                        <a href='' className="join-now">JOIN NOW</a>
                    </div>
                    <div class="stats">
                        <div>
                            <div className='stats-outer'>
                                <span className='stats-span'>14k+</span>
                                <span className='stats-item'> Product Varieties</span>
                            </div>
                        </div>
                        <div>
                            <div className='stats-outer'><span className='stats-span'>50k+</span> <span className='stats-item'>Happy Customers</span></div>
                        </div>
                        <div>
                            <div className='stats-outer'><span className='stats-span'>10+</span><span className='stats-item'>Store Locations</span></div>

                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="Images/bg.png" alt="Organic Foods" className='home-image' />
                </div>
            </header>
            {/* -------------Category-------------- */}
            <div className="carousel-container">
                <div className="carousel">
                    {categories.map(i=>(
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src={i.Image} alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>{i.Category}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* <!-----Product------> */}
            <div className="wrapper-product">
                {products.map(i => (
                    <div className="product" key={i.id}>
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
                            <button className="product-add-btn" onClick={() => Add(i.id)}>Add to Cart</button>
                            <button className="product-like-btn"><FaHeart /></button>
                        </div>
                    </div>
                ))}
            </div>
            <Offer />
        </>

    )
}