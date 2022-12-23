import React from "react";
import './Header.css'
import user from '../images/user.png'
import { useState } from "react";

const Header = () => {
    const Menu = ["Profile", "Setting", "Logout"]
    const [open, setopen] = useState(false)
    return (
        <>
            <div className="header">
                <span id="laundry">
                    <h2>Laundry</h2>
                </span>
                <span id="pricing">
                    <p>Pricing</p>
                </span>
                <span id="career">
                    <p>Career</p>
                </span>
                <span className="userName" onClick={() => setopen(!open)}>
                    <img src={user} className="user-icon"></img>
                    <h3 id="user">UserName</h3>
                </span>
                {
                    open && <div className="logout">
                        <ul>
                            {Menu.map((options, i) => (
                                <li>{options}</li>
                            ))}
                        </ul>


                    </div>
                }

            </div>
        </>
    )

}
export default Header