import React from "react";
import './popup.css'
import {Link} from "react-router-dom"
import Tick from "./images/checks.png"
const Popup = () => {
    return (
        <>
            <div id="popup">
                <div id="right">
                    <img src={Tick} alt="right_tick" id="check"></img>
                </div>
                <div><h2>Your Order is <br /> Successfully</h2></div>
                <div><p>You can track the delivery in "Order" section</p></div>
               <Link to="/orders"><button>Go To Orders</button></Link>  

            </div>
        </>
    )
}
export default Popup