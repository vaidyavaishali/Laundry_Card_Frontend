import React, { useEffect, useState } from "react";
import "./OrderCard.css"
const OrderCard = () => {
    // const [userData, setUserData] = useState([])
    // useEffect(() => {
    //     fetch("").then((res) => {
    //         return res.json()
    //     }).then((data) => {
    //         setUserData(data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    return (
        <>
            <table>
                <thead className="order">
                    <tr>
                        <th>Order_Id</th>
                        <th>Order Date & Time</th>
                        <th>Store Location</th>
                        <th>City</th>
                        <th>Store Phone</th>
                        <th>City</th>
                        <th>Total Item</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Views</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                       {userData.map((items, i)=>{
                        <td>{items.}</td>
                       })} 
                       
                    </tr>
                </tbody> */}
            </table>

            {/* <div className="order">
             <div id="Order-header">
                <h4>Order_Id</h4>
                <h4>Order Date & Time</h4>
                <h4>Store Location</h4>
                <h4>City</h4>
                <h4>Store Phone</h4>
                <h4>Total Item</h4>
                <h4>Price</h4>
                <h4>Status</h4>
                <h4>Views</h4>
             </div>
            </div> */}

        </>
    )

}
export default OrderCard