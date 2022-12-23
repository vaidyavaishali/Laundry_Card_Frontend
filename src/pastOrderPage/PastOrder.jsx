import React from "react";
import Footer from "./footer/footer";
import Header from "./Header/Header";
// import OrderDetailsCard from "./Order/OrderCard";
import OrderCard from "./OrderCard/OrderCard";

import SideBar from "./Sidebar/Sidebar";

const PastOrderPage = () => {
    return (
        <>
            <div id="main-container">
                {/* <OrderDetailsCard/> */}

                <Header/>
       
                <OrderCard/>
                <SideBar/>
                <Footer/>

            </div>

        </>
    )

}
export default PastOrderPage