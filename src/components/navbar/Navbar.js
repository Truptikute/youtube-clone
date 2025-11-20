import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo_icon from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/user_profile.jpg';
import { Link } from 'react-router-dom';

export default function Navbar({ setSidebar }) {
    return (
        <nav className='flex-div'>
            <div className='nav-left'>
                <img
                    className='menu_icon'
                    onClick={() => setSidebar(prev => !prev)}
                    src={menu_icon}
                    alt="Menu"
                />
                <Link to="/"><img className='logo_icon' src={logo_icon} alt="Logo" /></Link>
            </div>

            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder='Search'
                    />
                    <img className='search_icon' src={search_icon} alt="Search" />
                </div>
            </div>

            <div className='nav-right'>
                <img src={upload_icon} alt="Upload" />
                <img src={more_icon} alt="More" />
                <img src={notification_icon} alt="Notifications" />
                <img src={profile_icon} alt="Profile" className='profile_icon' />
            </div>
        </nav>
    );
}
