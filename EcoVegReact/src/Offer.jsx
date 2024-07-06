import React from 'react'
import './Offer.css'
const Offer = () => {
    return (
        <div className="offer-section">
            <div className="container">
                <div className="inner-container">
                    <div className="row-left">
                        <div className="row-left-inner">
                            <div className="offer-data">
                                <div className="offer-data-inner">
                                    <div className='offer-section-content'>
                                        <h1>Items on SALE</h1>
                                        <p className='offer-p'>Get up to 50% off</p>
                                        <a href="#" className="offer-section-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-right">
                        <div className="row-right-top">
                            <div className="inner">
                                <div className="offer-data">
                                    <div className="offer-data-inner">
                                        <div className='offer-section-content'>
                                            <h1>Combo Offers</h1>
                                            <p className='offer-p'>Discount up to 40% </p>
                                            <a href="#" className="offer-section-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-right-below">
                            <div className="inner">
                                <div className="offer-data">
                                    <div className="offer-data-inner">
                                        <div className='offer-section-content'>
                                            <h1>Discount Coupons</h1>
                                            <p className='offer-p'>Discount up to 30%</p>
                                            <a href="#" className="offer-section-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offer 