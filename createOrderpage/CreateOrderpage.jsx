import React from "react";
import "./createOrderpage.css"
import Header from "../createOrderpage/Header/Header";
import Footer from "../createOrderpage/footer/footer";
import SideBar from "../createOrderpage/Sidebar/Sidebar";
import Subheader from "../createOrderpage/subheader/subheader"
import shirt from "../images/shirt.jpg"
import tshirt from "../images/tshirt.jpg"
import trosures from "../images/trosures.jpg"
import jeans from "../images/jeans.jpg"
import boxer from "../images/boxer.jpg"
import jogger from "../images/jogger.jpg"
import othersimg from "../images/othersimg.jpg"
import washingmachine from "../logos/washingmachine.jpg"
import towel from "../logos/towel.jpg"
import bleach from "../logos/bleach.jpg"
import ironing from "../logos/ironing.jpg"


const CreateOrderPage = () => {
    return (
        <div>
            <Header />
            <div className="Body">
                <SideBar />
                <Subheader/>
                
                <table cellSpacing={0} className='table-orderlists-inside'  >
                    <thead>
                        <tr className='table-head'>
                            <th className="product-type" >Product Types</th>
                            <th>Quantity</th>
                            <th >Wash type</th>
                            <th className="pricefield">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="shirts">
                            <td>
                                <div className="shirtlogo">
                                    <img className="Cimage" src={shirt} />
                                </div>

                                <div className="CnameOf">
                                    <h6 className="">Shirt</h6>
                                    <p className="para1">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>
                        <tr className="tshirts">
                            <td>
                                <div className="tshirtlogo">
                                    <img className="Cimage" src={tshirt} />
                                </div>

                                <div className="CnameOf">
                                    <h6 className="">T-Shirt</h6>
                                    <p className="para2">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>
                
                       <tr className="trosures">
                            <td>
                                <div className="trouserlogo">
                                    <img className="Cimage" src={trosures} />
                                </div>
                                <div className="CnameOf">
                                    <h6 className="">boxers</h6>
                                    <p className="para3">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                      </tr>
                      <tr className="jeans">
                            <td>
                                <div className="jeanslogo">
                                    <img className="Cimage" src={jeans} />
                                </div>
                                <div className="CnameOf">
                                    <h6 className="">jeans</h6>
                                    <p className="para4">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>
                        <tr className="Boxers">
                            <td>
                                <div className="Boxerslogo">
                                    <img className="Cimage" src={boxer} />
                                </div>
                                <div className="CnameOf">
                                    <h6 className="">Boxers</h6>
                                    <p className="para5">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>
                        <tr className="joggers">
                            <td>
                                <div className="joggerslogo">
                                    <img className="Cimage" src={jogger} />
                                </div>
                                <div className="CnameOf">
                                    <h6 className="">joggers</h6>
                                    <p className="para6">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>
                        <tr className="others">
                            <td>
                                <div className="otherslogo">
                                    <img className="Cimage" src={othersimg} />
                                </div>
                                <div className="CnameOf">
                                    <h6 className="">others</h6>
                                    <p className="para7">
                                        A good laundry room with storage can make life easier
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td className="washtypelogos">
                                     <img src={washingmachine} alt="washingmachine" />
                                    <img src={ironing} alt="ironing" />
                                    <img src={towel} alt="towel" /> 
                                    <img src={bleach} alt=" bleach" />
                                   
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>


                      
                       
                    </tbody>
                </table>


            </div>
            <Footer />
        </div>
    )
}
export default CreateOrderPage