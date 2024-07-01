import React from 'react'
import './Home.css'
export const Home = () => {
    return (
        <header class="hero-section">
            <div class="hero-content">
                <h2>
                    <span className='first-h2'>Organic</span>
                    <span className='second-h2'> Foods at your</span>
                    <h2>Doorsteps</h2>
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
                <img src="Images/bg.png" alt="Organic Foods" />
            </div>
        </header>
    )
}