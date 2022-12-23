import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div id="footer-address">
              <h4 id="add-heading">Address</h4>
              <div id="card">
                <h3 id="home">Home</h3>
                <p id="add">#223 10th Road JP Nagar Banglore</p>  
              </div>
              <Link to="/cancel/alert"><button className="cancel">Cancel</button></Link>
            </div>
        </>
    )
}
export default Footer