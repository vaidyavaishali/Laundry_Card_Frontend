import React from "react";
import "./AddressBar.css"
const AddressBar = () => {
    return (

        <div className="addressbar">
            <table className="table">
                <thead>
                    <tr><th>Store Location</th>
                        <th>Store Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>JP Nagar</td>
                        <td>Near Phone booth 10th raod</td>
                        <td>9999999999</td>
                    </tr>
                </tbody>
            </table>


        </div>

    )
}
export default AddressBar