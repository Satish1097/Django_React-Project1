import React, { useState,CSSProperties } from 'react'
import './Loading.css'
import PacmanLoader from "react-spinners/PacmanLoader";



const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loading = ({ show }) => {
    let [color, setColor] = useState("green");
    return show && (
        <div className='loading-wrapper'>
            <div className="loading">
                <PacmanLoader cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    color={color}
                />
            </div>
        </div>
    )
}
export default Loading
