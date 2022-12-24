import React, { useState } from 'react';
import "./Styles/register.css";
import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const formValidation = (data) => {

    let error = {}

    if (!data.name ||
        !data.phone ||
        !data.district ||
        !data.pincode ||
        !data.email ||
        !data.state ||
        !data.address ||
        !data.password) {
        return
    }

    else if (data.phone.length < 10) {
        alert(error.phone = "Please enter a valid phone number")
    }

    else if (data.password.length <= 8) {
        alert(error.password = "Please enter a valid password")
    }

    return error;
}


function Register() {

    const [data, setData] = useState({
        name: '',
        phone: '',
        district: '',
        pincode: '',
        email: '',
        state: '',
        address: '',
        password: '',
    })

    const [error, setError] = useState({})

    const navigate = useNavigate()

    function onChangeHandler(e) {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    function onSubmitHandler(e) {

        e.preventDefault()

        setError(formValidation(data));

        axios
            .post('https://localhost:8080/register', data)
            .then(res => {
                console.log('response :: ', res.data)
                alert('success')
                navigate('/')
            })
            .catch(e => { console.log(e) })

    }
    console.log(data);

    return (
        <>
            <Header />

            <body>
                <div className='registerPage'>
                    <div className='left-part'>
                        <h1>Laundry Service</h1>
                        <p className='para1'>Doorstep Wash & Dryclean Service</p>
                        <p className='para2'>Already Have Account?</p>
                        <button><Link to='/'
                         style={{
                            textDecoration: 'none',
                            color: '#5861AE',
                            fontSize: '15px'
                        }}>Sign In</Link></button>
                    </div>

                    <div className="right-part">
                        <h1>REGISTER</h1>

                        <form onSubmit={onSubmitHandler}>
                            <div className="user-details">

                                <div className='input-box'>
                                    <label htmlFor='name'>Name :</label>
                                    <input class="input"
                                        type="text"
                                        id="name"
                                        name='name'
                                        value={data.name}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                    <label htmlFor='name'>Email :</label>
                                    <input class="input"
                                        type="email"
                                        id="email"
                                        name='email'
                                        value={data.email}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                </div>

                                <div className='input-box'>
                                    <label htmlFor='name'>Phone :</label>
                                    <input class="input"
                                        type="text"
                                        inputmode="numeric"
                                        id="phone"
                                        name='phone'
                                        value={data.phone}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                    {error.phone && <p className='error'></p>}

                                    <label htmlFor='name'>State :</label>
                                    <input class="input"
                                        type="text"
                                        id="state"
                                        name='state'
                                        value={data.state}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                </div>


                                <div className='input-box'>
                                    <label htmlFor='name'>District:</label>
                                    <input class="input"
                                        type="text"
                                        id="district"
                                        name='district'
                                        value={data.district}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                    <label htmlFor='name'>Address:</label>
                                    <input class="input"
                                        type="text"
                                        id="address"
                                        name='address'
                                        value={data.address}
                                        onChange={onChangeHandler}
                                        required
                                    />
                                </div>
                            </div>


                            <div className='input-box'>
                                <label htmlFor='name'>Pincode:</label>
                                <input class="input"
                                    type="text"
                                    inputmode="numeric"
                                    id="pincode"
                                    name='pincode'
                                    value={data.pincode}
                                    onChange={onChangeHandler}
                                    required
                                />
                                <label htmlFor='name'>Password:</label>
                                <input class="input"
                                    type="password"
                                    id="password"
                                    name='password'
                                    value={data.password}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>
                            {error.password && <p className='error'></p>}

                            <div className="checkbox">
                                <input type='checkbox' />
                                <span>I agree to Terms & Condition receiving marketing and promotional materials</span>
                            </div>

                            <div className="register-btn">
                                <button type='submit'>Register</button>
                            </div>
                        </form>
                    </div >
                </div >
            </body >

            <Footer />
        </>
    )
}

export default Register;