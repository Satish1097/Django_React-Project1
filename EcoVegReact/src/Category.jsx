import React from "react";
import './Category.css'
const Category = () => {
    return (
        <div className="wrapper-category">
            <div className="category-title">
                <h3>Categories</h3>
            </div>
            <div className="category-list">
                <div className="category-items">
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src="Images/cabage.png" alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>Leaves</p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src="Images/potato.png" alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>Roots</p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src="Images/onion.png" alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>Roots</p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src="Images/pee.png" alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>Fruits</p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src="Images/tomato.png" alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>Fruits</p>
                        </div>
                    </div>
                    <div className="category-item">
                        <div className="category-outer-img">
                            <div className="category-item-img">
                                <img src="Images/brocaly.png" alt="img" />
                            </div>
                        </div>
                        <div className="category-item-content">
                            <p>Flowers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category