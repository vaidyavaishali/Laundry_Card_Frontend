import React, { useEffect, useState } from "react";
import "./OrderCard.css"
import { Link } from 'react-router-dom'
import eye from '../images/eye.png'
import searchbar from '../images/searchbar.png'
// import 
const OrderCard = () => {
    const [userData, setUserData] = useState([])
    const [searchData, setSearchDate] = useState("")
    const [canceled, setcanceled] = useState("")
    let token = localStorage.getItem("token");
    console.log(token)

    


    // const [count, setCount] = useState("")
    useEffect(() => {
        fetch("http://localhost:8000/api/v1/existing/orders").then((res) => {
            return res.json()
        }).then((data) => {
            setUserData(data)
            // console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function SearchData(e) {
        if (e.target.value == "") {
            setUserData(userData)
            return
        }
        const searchResult = userData.filter(items => items.store_phone.startsWith(e.target.value))
        setUserData(searchResult)
    }
    // 

    console.log(userData.length)
    return (
        <>
            <div>
                <div className="subheader">
                    <span><h3 id="order">Order | {userData.length}</h3></span>
                    <span><button id="creat">Create</button></span>
                    <span className="searchbar"><img src={searchbar} alt="search"></img></span>
                    <input type="text" id="input" onChange={SearchData}></input>
                </div>
                <div>
                </div>
            </div>
            <table className="order-table">
                <thead className="order">
                    <tr>
                        <th>Order_Id</th>
                        <th>Order Date & Time</th>
                        <th>Store Location</th>
                        <th>City</th>
                        <th>Store Phone</th>
                        <th>Total Items</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>     </th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody className="ordertable">
                    {userData.map((items => {
                        return (
                            <tr >
                                <td>OD0001</td>
                                <td>{items.Date}</td>
                                <td>JP Nagar</td>
                                <td>Bangalore</td>
                                <td>{items.store_phone}</td>
                                <td>{items.total_items}</td>
                                <td id="price">{items.price}</td>
                           
                                <td style={{color: items.status === "canceled" ? "red" : "black"}}>{items.Status}</td>
                                <td>Cancel Order</td>
                                <td > <Link to="/summery"><img src={eye} id="eye"></img></Link></td>
                            </tr>
                        )

                    }))}
                </tbody>
            </table>
        </>
    )

}
export default OrderCard