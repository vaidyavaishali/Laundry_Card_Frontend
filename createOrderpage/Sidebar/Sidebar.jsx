import React from "react";
// import Home from '../images/home.png'
import Home from '../images/homeicon.png'
import List from '../images/list.jpg'
import AddMore from '../images/addmore.png'
import './sidebar.css'
const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                 <div className="home-icon"><img src={Home} alt="home-icon" id="home-icon"/></div>
                <div className="list-icon"><img src={List} className="list"/></div>
                <div className="add-more"><img src={AddMore} className="add"></img></div>
            </div>
        </>
    )
}
export default SideBar