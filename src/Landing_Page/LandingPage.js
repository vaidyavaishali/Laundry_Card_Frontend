import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Styles/LandingPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const formValidation = (data) => {

    let error = {}


    // var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

    if (!data.phone ||
        !data.password) {
        return
    }

    // else if (!mailFormat.test(data)) {
    //     error = "EmailAddress/PhoneNumber is not valid. Please provide a valid Email Address or phone number";
    //     return false;

    // }
    else if (data.phone.length < 10) {
        error.phone = "Please enter a valid phone number "
    }
    // else {
    //     alert("Success");
    // }

    // else if (!mailFormat.test(data)) {
    //     error.email = "Please enter a valid email"
    // }

    return error;
}

const LandingPage = () => {

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [])

    const [data, setData] = useState({
        email: '',
        phone: '',
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
            .post('https://localhost:5000/login', data)
            .then(res => {
                console.log('response :: ', res.data)
                alert('success')
                localStorage.setItem('token', res.data.token)
                navigate('/')
            })
            .catch(e => {
                console.log(e)
            })
    }

    console.log(data);


    return (
        <>
            <Header />

                    <body>
                <div className='mainPage'>
                    <div className='left-half'>
                        <h1>Laundry Service</h1>
                        <p className='type'>Doorstep Wash & Dryclean Service</p>
                        <p className='ask'>Don’t Have An Account?</p>
                        <button><Link to='/Register'
                         style={{
                            textDecoration: 'none',
                            color: '#4552C1',
                            fontSize: '15px'
                        }}>Register</Link></button>
                    </div>

                    <div className='right-half'>
                        <h1>SIGN IN</h1>
                        <form onSubmit={onSubmitHandler}>
                            <div>
                                <div className='type_field'>
                                    <input
                                        type="text"
                                        inputmode="numeric"
                                        id="phone"
                                        name="phone"
                                        value={data.phone}
                                        onChange={onChangeHandler}
                                        required />
                                    <span></span>
                                    <label htmlFor='phone'>Mobile / Email</label>
                                </div>
                                {error.phone && <p className="error">{error.phone}</p>}
                            </div>

                            <div className='type_field'>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={onChangeHandler}
                                    required />
                                <span></span>
                                <label htmlFor='password'>Password</label>
                                <img src={require('./Images/padlock.png')} alt="padlock" />
                            </div>
                            <div className='pass'>
                                <p>Forget Password?</p>
                            </div>

                            <div className='form-btn'>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </body >

            <Footer />
        </>
    )
}

export default LandingPage



