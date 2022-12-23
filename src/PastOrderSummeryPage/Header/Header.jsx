import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import Delete from '../images/letter-x.png'
const Header = () => {
    return (
        <>
            <div id="header">
                 <span className="summary"><h2>Summary</h2></span>
                <span>
                <Link to="/"><img src={Delete} alt="delete" className="delete" /></Link>
                </span> 
            </div>
        </>
    )
}
export default Header
