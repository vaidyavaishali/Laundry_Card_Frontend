import React from "react";
import './cancelAlert.css';
import Back from "./images/letter-x.png"
import { Link } from "react-router-dom";
import Alerticon from "./images/warning.png"
const CancelAlert = () => {
    return (
        <>
            <div id="cancel-alert">
              
                <div id="alert-header">
                <span><h4 id="alert">Alert</h4></span>
                <span>
                  <Link to="/"><img src={Back} alt="back" id="back"></img></Link>  
                </span>
                </div>

                <div>
                    <span>
                        <img src={Alerticon} alt="alert-icon" id="alert-icon"></img>
                    </span>
                    <span>
                        <p id="msg">Are  you sure want to cancel the order : orderId</p>
                        <button id="proceed">Proceed</button>
                    </span>

                </div>
            </div>

        </>
    )
}
export default CancelAlert