import React from 'react';
import logo from './Assets/Logo.png'; 
import { Link } from 'react-router-dom';
import useOnlineStatus from './utills/useOnlineStatus';
import { useContext } from 'react';
import userName from './utills/UserInfo';

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const{logedinuser}=useContext(userName);
    return (
        <div className="flex justify-between p-4 border-2 m-2 bg-white shadow ">
            <div className="w-24 h-24">
                <img src={logo} alt="Logo" /> 
            </div>
            <div className="ml-auto">
                <ul className="flex p-4 m-4 space-x-4 text-cyan-400 font-mono font-bold text-xl">
                    <li>onlineStatus {onlineStatus ? "✅" : "🔴"}</li>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>AboutUs</li></Link>
                    <Link to="/contact"><li>ContactUs</li></Link>
                    <Link to="/grocery"><li>Grocery</li></Link>
                    <li className='text-black'>{logedinuser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
