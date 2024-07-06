import React from 'react'
import './Home.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsCheck2Circle } from "react-icons/bs";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import './Services.css'
const Services = () => {
    return (
    <>
        <header class="hero-section">
            <div class="hero-content">
                <h2>
                    <span className='first-h2'>"FARM-FRESH</span>
                    <span className='second-h2'> PRODUCE DELIVERED</span>
                    <h2 className='third-h2'>HOME"</h2>
                </h2>
                <p className='wrapper-p'>Exprience the Superior Test and Quality of Truly Farm-Fresh Delights.</p>
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
                <img src="Images/Servicesbg.png" alt="Organic Foods" className='home-image' />
            </div>
        </header>
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
