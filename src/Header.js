import React, { useState } from 'react';
import logo from './Assets/Logo.png'; 
import { Link } from 'react-router-dom';
import useOnlineStatus from './utills/useOnlineStatus';
import { useContext } from 'react';
import userName from './utills/UserInfo';
import { useSelector } from 'react-redux';

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const { logedinuser } = useContext(userName);

    const cartItem = useSelector((state) => state.cart.items);
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 border-2 m-2 bg-white shadow ">
            <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" /> 
            </div>
            <div className="mt-4 md:mt-0">
                <ul className="flex flex-col md:flex-row p-2 md:p-4 m-2 md:m-4 space-y-2 md:space-y-0 md:space-x-4 text-cyan-400 font-mono font-bold text-base md:text-xl">
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact Us</li>
                    </Link>
                    <Link to="/grocery">
                        <li>Grocery</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart ({cartItem.length} items)</li>
                    </Link>
                    <li className='text-black'>{logedinuser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
