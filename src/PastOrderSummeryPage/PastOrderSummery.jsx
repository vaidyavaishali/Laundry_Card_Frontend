import React from "react";
import AddressBar from "./AddressBar/AddressBar";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
// import BasicTimeline from "./Location_Track/Location_Tack";
// import Delete from './images/delete.png'
const PastOrderSummery = () => {
    return (
        <>
        <div id="main">
            <Header/>
            {/* <BasicTimeline/> */}
            <AddressBar/>
            <Footer/>
        </div>
        </>
    )
}
export default PastOrderSummery
