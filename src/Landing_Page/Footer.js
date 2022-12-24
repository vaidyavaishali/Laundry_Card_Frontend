import React from 'react';
import './Styles/footer.css';

const Footer = () => {
    return (
        <>
            <div className='upper-footer'>
                <div className='upper-part'>
                    <h3>Now Refer & Earn ₹500 for every referral*</h3>
                    <p>* Terms and conditions will be applied</p>
                </div>

                <footer class="footer">
                    <div class="footer-container">
                        <div class="row">

                            <div class="footer-col">
                                <h4>ABOUT US</h4>
                                <p>Doorstep Wash & Dryclean Service</p>
                            </div>

                            <div class="footer-col">
                                <h4>Home</h4>
                                <ul>
                                    <li><a href="#">Sign In</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>

                            <div class="footer-col">
                                <h4>Pricing</h4>
                            </div>

                            <div class="footer-col">
                                <h4>Career</h4>
                                <ul>
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Create</a></li>
                                </ul>
                            </div>

                            <div class="footer-col">
                                <h4>Contact</h4>
                            </div>

                            <div class="footer-col">
                                <h4>SOCIAL MEDIA</h4>
                                <div class="social-links">
                                    <span><img src={require('./Images/facebook.png')} alt="facebook" /></span>
                                    <span><img src={require('./Images/instagram.png')} alt="instagram" /></span>
                                    <span><img src={require('./Images/linkedin.png')} alt="linkedin" /></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

                <div className='last-black-part'>
                    <p>2022 @ Laundry</p>
                </div>

            </div>
        </>
    )

}

export default Footer