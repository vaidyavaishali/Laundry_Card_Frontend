import React from "react";
import searchbar from '../images/searchbar.png'
// import Searchbar from '../images/searchbar.png'
import './subheader.css'
const Subheader = () => {
    return (
        <>
            <div>

                <div className="subheader">
                    <span><h3 id="order">Order | 0</h3></span>
                    <span><button id="create">Create</button></span>
                    <span className="searchbar"><img src={searchbar}></img></span>
                    <input type="text" id="input"></input>
                </div>
                <div>
                </div>
            </div>



        </>
    )

}
export default Subheader