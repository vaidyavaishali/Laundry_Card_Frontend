import React from 'react';
import './Styles/navbar.css';

function Header() {
    return (
        <>
            <nav className='header'>
                <div className='logo'>LAUNDRY</div>
                <div className='menu-link'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Career</a></li>
                        <li><a className='active' href='#'>Sign in</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;