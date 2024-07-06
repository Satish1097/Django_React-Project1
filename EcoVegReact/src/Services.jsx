import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsCheck2Circle } from "react-icons/bs";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import './Services.css'
const Services = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container-fluid-row">
                    <div className="item">
                        <div className="services-inner">
                            <CiDeliveryTruck className="service-icons" />
                            <h3>Free Delivery</h3>
                            <p className='service-p'>Free Delivery at your DoorStep</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-inner">
                            <GoShieldLock className="service-icons" />
                            <h3>100% Secure Payment</h3>
                            <p className='service-p'>Secure Payment with All Methods</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-inner">
                            <BsCheck2Circle className="service-icons" />
                            <h3>Quality guarantee</h3>
                            <p className='service-p'>Quality guarantee of Our vegetables</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-inner">
                            <LiaHandHoldingUsdSolid className="service-icons" />
                            <h3>guaranteed savings</h3>
                            <p className='service-p'>guaranteed savings on Every Shopping</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="services-inner">
                            <HiOutlineFaceSmile className="service-icons" />
                            <h3>Daily Offers</h3>
                            <p className='service-p'>Daily Offers with EcoVeg</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services